import { NoteLink, Task } from "../type";

/**
 * 마크다운 링크 정규식
 */
export const REGEX_MARKDOWN_LINK = /\[([^\]]+)\]\(([^)]+)\)/;

/**
 * joplin note link 마크다운 텍스트를 생성한다.
 * @param param0
 */
export const makeNoteLink = ({ title, id }: NoteLink): string => {
  return `[${title}](:/${id})`;
};

export const makeTodo = ({
  title,
  completed,
}: {
  title: string;
  completed: boolean;
}) => `- [${completed ? "x" : " "}] ${title}`;

export const makeContentFromTitleAndBody = ({
  title,
  body,
}: {
  title: string;
  body: string;
}): string => {
  const result = [];
  result.push(`## ${title}`);
  result.push(body);
  result.push("");
  return result.join("\n");
};

/**
 * ":/5f95a7805b8145feb85b0b2df1218b80" => "5f95a7805b8145feb85b0b2df1218b80"
 * @param joplinLinkText
 */
export const extractJoplinNoteIdFromLink = (joplinLinkText: string) => {
  const matched = /:\/([\d\w]+)/.exec(joplinLinkText);
  if (!matched) {
    throw new Error("joplin link (:/xxxx..) required, but: " + joplinLinkText);
  }

  return matched[1];
};

/**
 * 특정 문자열이 daily todo 의 raw 템플릿 인지 여부
 *
 * @param body
 */
export const contentIsTemplate = (body: string): boolean => {
  return body.includes("#### 템플릿");
};

/**
 * 특정 문서 body 가 multitask 인지 여부
 * @param todo
 */
export const checkTodoIsMultiTask = (todoBody: string): boolean => {
  return contentIsTemplate(todoBody);
};

/**
 * parse task line
 *
 * from: `- [ ] 할일`
 * to: {completed: false, title: '할일' }
 *
 * @param line
 */
export const parseTaskLine = (line: string): Task => {
  const result = /- \[([x ])\] (.+)/.exec(line);
  if (!result) {
    throw new Error(`"${line}" is not valid TaskLine`);
  }

  return {
    completed: result[1] === "x",
    title: result[2],
  };
};

/**
 * ex)
 * from : [inbox 정리 2개](:/248aa9b7c29441c8a775561ad3a97a2d)
 * to: { title:'inbox 정리 2개, link: ':/248aa9b7c29441c8a775561ad3a97a2d' }
 * @param linkMarkdownText
 */
export const parseMarkdownLink = (
  linkMarkdownText: string
): { link: string; title: string } => {
  const ret = REGEX_MARKDOWN_LINK.exec(linkMarkdownText);
  if (!ret) {
    throw new Error(`"${linkMarkdownText}" is not valid markdown link`);
  }
  return {
    link: ret[2],
    title: ret[1],
  };
};

/**
 *
 * ex)
 * from : [inbox 정리 2개](:/248aa9b7c29441c8a775561ad3a97a2d)
 * to: { title:'inbox 정리 2개, link: '248aa9b7c29441c8a775561ad3a97a2d' }
 *
 * @param linkMarkdownText
 */
export const parseLink = (linkMarkdownText: string): NoteLink => {
  const markdownLink = parseMarkdownLink(linkMarkdownText);
  return {
    id: extractJoplinNoteIdFromLink(markdownLink.link),
    title: markdownLink.title,
  };
};

/**
 * 특정 라인이 title 라인인지 여부
 *
 * @param line
 */
export const isTitleLine = (line: string) => line.startsWith("#### ");
