import {
  parseDailyMultipleTaskDayTaskNoteLink,
  parseDailyMultipleTasksDayTask,
  parseDailySingleTasks,
} from "./dailyTodoDataHelper";

describe("parseDailySingleTasks", () => {
  describe("when body is empty", () => {
    const tasks = parseDailySingleTasks("");
    expect(tasks).toEqual([]);
  });

  describe("when body has no meta", () => {
    it("parses", () => {
      const tasks = parseDailySingleTasks(`- [x] [2021-01-07](:/0d2e8a15b5494a7c95877cb366aee24f)
- [x] [2021-01-06](:/f14bc498cf3b45f5b11fa34e804884f5)
- [ ] [2021-01-05](:/f7113f71c2a84c49924edcb53182de35)
- [ ] [2021-01-04](:/4df4668e331a42a8bb3276d1d22a96c3)
- [x] [2021-01-03](:/4f0ba7915803434d88f381d52929b1cf)
- [x] [2021-01-02](:/3a118a90b7c04039b0e01607b638cc28)`);

      expect(tasks).toMatchInlineSnapshot(`
        Array [
          Object {
            "completed": true,
            "id": "0d2e8a15b5494a7c95877cb366aee24f",
            "title": "2021-01-07",
          },
          Object {
            "completed": true,
            "id": "f14bc498cf3b45f5b11fa34e804884f5",
            "title": "2021-01-06",
          },
          Object {
            "completed": false,
            "id": "f7113f71c2a84c49924edcb53182de35",
            "title": "2021-01-05",
          },
          Object {
            "completed": false,
            "id": "4df4668e331a42a8bb3276d1d22a96c3",
            "title": "2021-01-04",
          },
          Object {
            "completed": true,
            "id": "4f0ba7915803434d88f381d52929b1cf",
            "title": "2021-01-03",
          },
          Object {
            "completed": true,
            "id": "3a118a90b7c04039b0e01607b638cc28",
            "title": "2021-01-02",
          },
        ]
      `);
    });
  });

  describe("when body has meta", () => {
    it("parses", () => {
      const tasks = parseDailySingleTasks(`- [x] [2021-01-07](:/0d2e8a15b5494a7c95877cb366aee24f)
- [x] [2021-01-06](:/f14bc498cf3b45f5b11fa34e804884f5)
- [ ] [2021-01-05](:/f7113f71c2a84c49924edcb53182de35)
- [ ] [2021-01-04](:/4df4668e331a42a8bb3276d1d22a96c3)
- [x] [2021-01-03](:/4f0ba7915803434d88f381d52929b1cf)
- [x] [2021-01-02](:/3a118a90b7c04039b0e01607b638cc28)
---

[grammer in use](:/dfcf5cdea9d3430cb003276938bf969b)`);

      expect(tasks).toMatchInlineSnapshot(`
        Array [
          Object {
            "completed": true,
            "id": "0d2e8a15b5494a7c95877cb366aee24f",
            "title": "2021-01-07",
          },
          Object {
            "completed": true,
            "id": "f14bc498cf3b45f5b11fa34e804884f5",
            "title": "2021-01-06",
          },
          Object {
            "completed": false,
            "id": "f7113f71c2a84c49924edcb53182de35",
            "title": "2021-01-05",
          },
          Object {
            "completed": false,
            "id": "4df4668e331a42a8bb3276d1d22a96c3",
            "title": "2021-01-04",
          },
          Object {
            "completed": true,
            "id": "4f0ba7915803434d88f381d52929b1cf",
            "title": "2021-01-03",
          },
          Object {
            "completed": true,
            "id": "3a118a90b7c04039b0e01607b638cc28",
            "title": "2021-01-02",
          },
        ]
      `);
    });
  });
});

describe("parseDailyMultipleTasksDayTask", () => {
  describe("when body", () => {
    const subject = () => {
      const data = `
#### [2021-01-23](:/4f2b1e6146454d898c4eb73d536d8f9f)

- [ ] ?????? ??????
- [x] ?????? ?????????
- [ ] ?????? ????????? ???????????? ?????????
- [ ] ?????? ??????

---

#### [2020-12-26](:/29fe24c0c30c4fe49b56c740a07e92fc)

- [ ] ?????? ??????
- [x] ?????? ?????????
- [ ] ?????? ??????
- [x] ?????? ?????????

---

#### [2020-12-25](:/c4013651bf7c40a0a74b06832c25360f)

- [x] ?????? ??????
- [x] ?????? ?????????
- [ ] ?????? ??????
- [x] ?????? ?????????
- [ ] ?????? ????????? ??????
- [ ] ?????? ????????? ?????????
- [ ] ????????? ????????? ??????
- [ ] ????????? ????????? ?????????
- [ ] ????????? ????????? ?????????

---
#### [2020-12-24](:/27ac063b9b104fa28d82e68e2d3f1252)

- [x] ?????? ??????
- [x] ?????? ?????????
- [x] ?????? ????????? ??????
- [x] ????????? ????????? ??????

---
#### ?????????

- [ ] ?????? ??????
- [ ] ?????? ?????????
- [ ] ?????? ????????? ???????????? ?????????

---`;

      return parseDailyMultipleTasksDayTask(data);
    };

    describe("return value dayTasks", () => {
      it("returns dayTasks match snapshot", () => {
        const { dayTasks } = subject();

        expect(dayTasks).toMatchInlineSnapshot(`
          Array [
            Object {
              "id": "4f2b1e6146454d898c4eb73d536d8f9f",
              "tasks": Array [
                Object {
                  "completed": false,
                  "title": "?????? ??????",
                },
                Object {
                  "completed": true,
                  "title": "?????? ?????????",
                },
                Object {
                  "completed": false,
                  "title": "?????? ????????? ???????????? ?????????",
                },
                Object {
                  "completed": false,
                  "title": "?????? ??????",
                },
              ],
              "title": "2021-01-23",
            },
            Object {
              "id": "29fe24c0c30c4fe49b56c740a07e92fc",
              "tasks": Array [
                Object {
                  "completed": false,
                  "title": "?????? ??????",
                },
                Object {
                  "completed": true,
                  "title": "?????? ?????????",
                },
                Object {
                  "completed": false,
                  "title": "?????? ??????",
                },
                Object {
                  "completed": true,
                  "title": "?????? ?????????",
                },
              ],
              "title": "2020-12-26",
            },
            Object {
              "id": "c4013651bf7c40a0a74b06832c25360f",
              "tasks": Array [
                Object {
                  "completed": true,
                  "title": "?????? ??????",
                },
                Object {
                  "completed": true,
                  "title": "?????? ?????????",
                },
                Object {
                  "completed": false,
                  "title": "?????? ??????",
                },
                Object {
                  "completed": true,
                  "title": "?????? ?????????",
                },
                Object {
                  "completed": false,
                  "title": "?????? ????????? ??????",
                },
                Object {
                  "completed": false,
                  "title": "?????? ????????? ?????????",
                },
                Object {
                  "completed": false,
                  "title": "????????? ????????? ??????",
                },
                Object {
                  "completed": false,
                  "title": "????????? ????????? ?????????",
                },
                Object {
                  "completed": false,
                  "title": "????????? ????????? ?????????",
                },
              ],
              "title": "2020-12-25",
            },
            Object {
              "id": "27ac063b9b104fa28d82e68e2d3f1252",
              "tasks": Array [
                Object {
                  "completed": true,
                  "title": "?????? ??????",
                },
                Object {
                  "completed": true,
                  "title": "?????? ?????????",
                },
                Object {
                  "completed": true,
                  "title": "?????? ????????? ??????",
                },
                Object {
                  "completed": true,
                  "title": "????????? ????????? ??????",
                },
              ],
              "title": "2020-12-24",
            },
          ]
        `);
      });
    });

    describe("return value template", () => {
      it("should ", () => {
        const { template } = subject();
        expect(template.length).toBe(3);
      });
    });
  });
});

describe("parseDailyMultipleTaskDayTaskNoteLink", () => {
  describe("when title is not joplin link", () => {
    it("throws error", () => {
      expect(() =>
        parseDailyMultipleTaskDayTaskNoteLink("#### ??????")
      ).toThrowError();
    });
  });

  describe("when title is jopline link", () => {
    it("extracts jopline link and title", () => {
      const noteLink = parseDailyMultipleTaskDayTaskNoteLink(
        "#### [??????](:/link)"
      );

      expect(noteLink).toEqual({
        title: "??????",
        id: "link",
      });
    });
  });

  describe("when title is more and one line", () => {
    it("extracts only link and title", () => {
      const noteLink = parseDailyMultipleTaskDayTaskNoteLink(`
#### [??????](:/link)

- [ ] ?????? ??????
- [ ] ?????? ?????????
`);

      expect(noteLink).toEqual({
        title: "??????",
        id: "link",
      });
    });
  });
  describe("when title is not valid title", () => {
    it("throws error", () => {
      expect(() =>
        parseDailyMultipleTaskDayTaskNoteLink(`
      [??????](:/link)
      `)
      ).toThrowError();
    });
  });
});
