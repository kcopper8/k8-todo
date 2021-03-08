import { parseDayTodoBody, serializeDayTodoBody } from "./dayTodoDataHelper";

describe("parseDayTodoBody", () => {
  describe("when has no etc", () => {
    describe("and has no point", () => {
      it("should match snapshot", () => {
        const ret = parseDayTodoBody(`## Todo
- [x] [아이패드 미니 팔기](:/5f95a7805b8145feb85b0b2df1218b80)
- [x] [잘 다듬어져있는거 찾아서 가져다 쓰세요](:/f6b1275fc872474db60908093c110d17)
- [ ] [Joplin todo 프로젝트 2차](:/5186cd74989f4f86b637e8b5b474ff9d)

---
## Daily
- [x] [inbox 정리 2개](:/248aa9b7c29441c8a775561ad3a97a2d)
- [ ] [Anki 체크하기](:/c1bd1f5d9dc2412288214bfaac96b3fe)
\t- [x] SubTask 1
\t- [ ] SubTask 1
- [x] [햄스트링 스트레칭 20초 3회](:/6891d469eaa94d1d8d1a3abd137d2586)

---
- [할일 점수](:/054c87fff0984d028390125538aa7089) :
`);

        expect(ret.todos).toMatchInlineSnapshot(`
          Array [
            Object {
              "completed": true,
              "etc": "",
              "id": "5f95a7805b8145feb85b0b2df1218b80",
              "tasks": Array [],
              "title": "아이패드 미니 팔기",
            },
            Object {
              "completed": true,
              "etc": "",
              "id": "f6b1275fc872474db60908093c110d17",
              "tasks": Array [],
              "title": "잘 다듬어져있는거 찾아서 가져다 쓰세요",
            },
            Object {
              "completed": false,
              "etc": "",
              "id": "5186cd74989f4f86b637e8b5b474ff9d",
              "tasks": Array [],
              "title": "Joplin todo 프로젝트 2차",
            },
          ]
        `);

        expect(ret.dailyTodos).toMatchInlineSnapshot(`
          Array [
            Object {
              "completed": true,
              "etc": "",
              "id": "248aa9b7c29441c8a775561ad3a97a2d",
              "tasks": Array [],
              "title": "inbox 정리 2개",
            },
            Object {
              "completed": false,
              "etc": "",
              "id": "c1bd1f5d9dc2412288214bfaac96b3fe",
              "tasks": Array [
                Object {
                  "completed": true,
                  "title": "SubTask 1",
                },
                Object {
                  "completed": false,
                  "title": "SubTask 1",
                },
              ],
              "title": "Anki 체크하기",
            },
            Object {
              "completed": true,
              "etc": "",
              "id": "6891d469eaa94d1d8d1a3abd137d2586",
              "tasks": Array [],
              "title": "햄스트링 스트레칭 20초 3회",
            },
          ]
        `);

        expect(ret.totalPoint).toBeUndefined();
      });
    });
    describe("and has point", () => {
      it("should match snapshot", () => {
        const ret = parseDayTodoBody(`## Todo
- [x] [아이패드 미니 팔기](:/5f95a7805b8145feb85b0b2df1218b80)
- [x] [잘 다듬어져있는거 찾아서 가져다 쓰세요](:/f6b1275fc872474db60908093c110d17)
- [ ] [Joplin todo 프로젝트 2차](:/5186cd74989f4f86b637e8b5b474ff9d)

---
## Daily
- [x] [inbox 정리 2개](:/248aa9b7c29441c8a775561ad3a97a2d)
- [x] [Anki 체크하기](:/c1bd1f5d9dc2412288214bfaac96b3fe)
- [x] [햄스트링 스트레칭 20초 3회](:/6891d469eaa94d1d8d1a3abd137d2586)
- [x] [Grammar in Use 1 페이지 읽기 + 시간 재기](:/8efeb98bcfc94d3091ec2d3749a10dc7)
- [x] [영수증 10장 찢어 버리기](:/c19e15f69316442daaeaf4a03fd62850)
- [x] [뭐든 집안일하고 기록](:/12fccf0e12fb4a03a166fd6a013e11fe)


---
- [할일 점수](:/054c87fff0984d028390125538aa7089) : 12`);

        expect(ret.todos).toMatchInlineSnapshot(`
          Array [
            Object {
              "completed": true,
              "etc": "",
              "id": "5f95a7805b8145feb85b0b2df1218b80",
              "tasks": Array [],
              "title": "아이패드 미니 팔기",
            },
            Object {
              "completed": true,
              "etc": "",
              "id": "f6b1275fc872474db60908093c110d17",
              "tasks": Array [],
              "title": "잘 다듬어져있는거 찾아서 가져다 쓰세요",
            },
            Object {
              "completed": false,
              "etc": "",
              "id": "5186cd74989f4f86b637e8b5b474ff9d",
              "tasks": Array [],
              "title": "Joplin todo 프로젝트 2차",
            },
          ]
        `);

        expect(ret.dailyTodos).toMatchInlineSnapshot(`
          Array [
            Object {
              "completed": true,
              "etc": "",
              "id": "248aa9b7c29441c8a775561ad3a97a2d",
              "tasks": Array [],
              "title": "inbox 정리 2개",
            },
            Object {
              "completed": true,
              "etc": "",
              "id": "c1bd1f5d9dc2412288214bfaac96b3fe",
              "tasks": Array [],
              "title": "Anki 체크하기",
            },
            Object {
              "completed": true,
              "etc": "",
              "id": "6891d469eaa94d1d8d1a3abd137d2586",
              "tasks": Array [],
              "title": "햄스트링 스트레칭 20초 3회",
            },
            Object {
              "completed": true,
              "etc": "",
              "id": "8efeb98bcfc94d3091ec2d3749a10dc7",
              "tasks": Array [],
              "title": "Grammar in Use 1 페이지 읽기 + 시간 재기",
            },
            Object {
              "completed": true,
              "etc": "",
              "id": "c19e15f69316442daaeaf4a03fd62850",
              "tasks": Array [],
              "title": "영수증 10장 찢어 버리기",
            },
            Object {
              "completed": true,
              "etc": "",
              "id": "12fccf0e12fb4a03a166fd6a013e11fe",
              "tasks": Array [],
              "title": "뭐든 집안일하고 기록",
            },
          ]
        `);

        expect(ret.totalPoint).toBe(12);
      });
    });
  });
});

describe("serializeDayTodoBody", () => {
  describe("when todo and dailyTodo are empty", () => {
    it("matches snapshot", () => {
      const body = serializeDayTodoBody({
        dailyTodos: [],
        todos: [],
      });

      expect(body).toMatchInlineSnapshot(`
        "- [할일 점수](:/054c87fff0984d028390125538aa7089) : 
        "
      `);
    });
  });

  describe("not empty", () => {
    it("should", () => {
      const body = serializeDayTodoBody({
        todos: [
          {
            title: "아이패드 미니 팔기",
            completed: true,
            id: "5f95a7805b8145feb85b0b2df1218b80",
            etc: "",
            tasks: [],
          },
          {
            title: "잘 다듬어져있는거 찾아서 가져다 쓰세요",
            completed: false,
            id: "f6b1275fc872474db60908093c110d17",
            etc: "",
            tasks: [],
          },
          {
            title: "Joplin todo 프로젝트 2차",
            completed: true,
            id: "5186cd74989f4f86b637e8b5b474ff9d",
            etc: "",
            tasks: [],
          },
        ],
        dailyTodos: [
          {
            title: "inbox 정리 2개",
            completed: false,
            id: "248aa9b7c29441c8a775561ad3a97a2d",
            etc: "",
            tasks: [],
          },
          {
            title: "Anki 체크하기",
            completed: true,
            id: "c1bd1f5d9dc2412288214bfaac96b3fe",
            etc: "",
            tasks: [],
          },
          {
            title: "햄스트링 스트레칭 20초 3회",
            completed: true,
            id: "6891d469eaa94d1d8d1a3abd137d2586",
            etc: "",
            tasks: [],
          },
          {
            title: "Grammar in Use 1 페이지 읽기 + 시간 재기",
            completed: true,
            id: "8efeb98bcfc94d3091ec2d3749a10dc7",
            etc: "",
            tasks: [],
          },
          {
            title: "영수증 10장 찢어 버리기",
            completed: true,
            id: "c19e15f69316442daaeaf4a03fd62850",
            etc: "",
            tasks: [],
          },
          {
            title: "뭐든 집안일하고 기록",
            completed: true,
            id: "12fccf0e12fb4a03a166fd6a013e11fe",
            etc: "",
            tasks: [],
          },
        ],
        totalPoint: 13,
      });
      expect(body).toEqual(`## Todo
- [x] [아이패드 미니 팔기](:/5f95a7805b8145feb85b0b2df1218b80)
- [ ] [잘 다듬어져있는거 찾아서 가져다 쓰세요](:/f6b1275fc872474db60908093c110d17)
- [x] [Joplin todo 프로젝트 2차](:/5186cd74989f4f86b637e8b5b474ff9d)

---
## Daily
- [ ] [inbox 정리 2개](:/248aa9b7c29441c8a775561ad3a97a2d)
- [x] [Anki 체크하기](:/c1bd1f5d9dc2412288214bfaac96b3fe)
- [x] [햄스트링 스트레칭 20초 3회](:/6891d469eaa94d1d8d1a3abd137d2586)
- [x] [Grammar in Use 1 페이지 읽기 + 시간 재기](:/8efeb98bcfc94d3091ec2d3749a10dc7)
- [x] [영수증 10장 찢어 버리기](:/c19e15f69316442daaeaf4a03fd62850)
- [x] [뭐든 집안일하고 기록](:/12fccf0e12fb4a03a166fd6a013e11fe)


---
- [할일 점수](:/054c87fff0984d028390125538aa7089) : 13
`);
    });
  });
});
