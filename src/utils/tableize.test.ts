import tableize from "./tableize";

describe("tableize", () => {
  it("works as expected ", () => {
    expect(tableize([1, 2, 3], [2, 3, 4], (a, b) => a - b)).toEqual([
      [1, undefined],
      [2, 2],
      [3, 3],
      [undefined, 4],
    ]);
  });

  describe("when not sorted", () => {
    it("returns result sorted", () => {
      expect(tableize([1, 3, 2], [3, 2, 4], (a, b) => a - b)).toEqual([
        [1, undefined],
        [2, 2],
        [3, 3],
        [undefined, 4],
      ]);
    });
  });

  describe("for not number", () => {
    it("returns result sorted by comparator", () => {
      expect(
        tableize(
          [{ v: 1 }, { v: 3 }, { v: 2 }],
          [{ v: 3 }, { v: 2 }, { v: 5 }],
          (a, b) => a.v - b.v
        )
      ).toEqual([
        [{ v: 1 }, undefined],
        [{ v: 2 }, { v: 2 }],
        [{ v: 3 }, { v: 3 }],
        [undefined, { v: 5 }],
      ]);
    });
  });
});
