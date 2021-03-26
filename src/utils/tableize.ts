type Comparator<T> = (v1: T, v2: T) => number;

const compares = <T>(
  a: T | undefined,
  b: T | undefined,
  comparator: Comparator<T>
): number => {
  if (a === undefined && b === undefined) {
    return 0;
  } else if (a === undefined) {
    return 1;
  } else if (b === undefined) {
    return -1;
  }
  return comparator(a, b);
};

const tableize = <T>(a: T[], b: T[], comparator: Comparator<T>) => {
  const sortedA = a.filter((v) => v).sort(comparator);
  const sortedB = b.filter((v) => v).sort(comparator);

  const arr: [T | undefined, T | undefined][] = [];

  let ai = 0;
  let bi = 0;

  while (sortedA[ai] || sortedB[bi]) {
    const compareResult = compares(sortedA[ai], sortedB[bi], comparator);
    if (compareResult === 0) {
      // a === b
      arr.push([sortedA[ai++], sortedB[bi++]]);
    } else if (compareResult < 0) {
      // a < b
      arr.push([sortedA[ai++], undefined]);
    } else {
      // a > b
      arr.push([undefined, sortedB[bi++]]);
    }
  }

  return arr;
};

export default tableize;
