import axios from "axios";
import { loadHost, loadToken } from "../localStorage/tokenService";

type RawNote = {
  id: string;
  parent_id: string;
  title: string;
  body: string;
  is_todo: number;
  todo_completed: number;
};

type RawNoteListItem = Omit<RawNote, "body">;

type JoplinItemListResult<T> = {
  items: T[];
  has_more: boolean;
};

export class JoplinInvalidConnectionError extends Error {
  static isThis(e: any): e is JoplinInvalidConnectionError {
    return (
      e instanceof JoplinInvalidConnectionError &&
      e.type === "joplinTokenInvalid"
    );
  }
  public readonly type = "joplinTokenInvalid";
  constructor() {
    super("joplin token invalid");
    this.message = "joplin token invalid";
  }
}

const loadJoplinToken = async () => {
  const token = await loadToken();
  if (!token) {
    throw new JoplinInvalidConnectionError();
  }
  return token;
};

const loadJoplinHost = async () => {
  const host = await loadHost();
  if (!host) {
    throw new JoplinInvalidConnectionError();
  }
  return host;
};

export async function createNote({
  title,
  body,
  parent_id,
  is_todo,
}: Partial<RawNote>): Promise<RawNote> {
  const data = { title, body, parent_id, is_todo };
  const ret = await axios.post(
    `${await loadJoplinHost()}/notes?token=${await loadJoplinToken()}`,
    data
  );
  console.log("createNote result: ", ret.data);
  return ret.data;
}

export async function updateNote(
  id: string,
  { title, body }: Partial<RawNote>
) {
  const data = { body, title };
  const ret = await axios.put(
    `${await loadJoplinHost()}/notes/${id}?token=${await loadJoplinToken()}`,
    data
  );

  console.log("updateNote result: ", ret.data);
}

export async function getNote(noteId: string): Promise<RawNote> {
  const ret = await axios.get(`${await loadJoplinHost()}/notes/${noteId}`, {
    params: {
      token: await loadJoplinToken(),
      fields: "id,parent_id,title,body,is_todo,todo_completed",
    },
  });

  return ret.data;
}

type Criteria = Partial<{
  parent_id: string;
  is_todo: boolean;
  is_completed: boolean;
}>;

const combineFilter = <T>(
  f1: (item: T) => boolean,
  f2: (item: T) => boolean
) => {
  return (item: T) => f1(item) && f2(item);
};

const generateFilter = (criteria: Criteria = {}) => {
  const allFilter = (_: RawNoteListItem) => true;
  let filter = allFilter;

  if ("parent_id" in criteria) {
    filter = combineFilter(
      filter,
      (item) => item.parent_id === criteria.parent_id
    );
  }

  if ("is_todo" in criteria) {
    if (criteria.is_todo) {
      filter = combineFilter(filter, (item) => item.is_todo === 1);
    } else {
      filter = combineFilter(filter, (item) => item.is_todo !== 1);
    }
  }

  if ("is_completed" in criteria) {
    if (criteria.is_completed) {
      filter = combineFilter(filter, (item) => item.todo_completed !== 0);
    } else {
      filter = combineFilter(filter, (item) => item.todo_completed === 0);
    }
  }

  return filter;
};

export async function getNotes(criteria: Criteria = {}): Promise<RawNote[]> {
  let page = 0;

  let items: RawNote[] = [];
  let result: JoplinItemListResult<RawNote>;

  const filter = generateFilter(criteria);

  do {
    result = (
      await axios.get(`${await loadJoplinHost()}/notes`, {
        params: {
          token: await loadJoplinToken(),
          fields: "id,parent_id,title,is_todo,todo_completed,body",
          limit: 100,
          page: page++,
        },
      })
    ).data;

    items = items.concat(result.items.filter(filter));
  } while (result.has_more);

  return items;
}
