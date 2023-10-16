import { describe, expect, test, vi } from "vitest";
import * as subjects from "./solution.js";
import { fmtArr, createArray, benchmark } from "../test-utils.js";

const CASES = [
  {
    input: [[], 2],
    expected: -1,
  },
  {
    input: [[1], 1],
    expected: 0,
  },
  {
    input: [[1, 2, 3], 1],
    expected: 0,
  },
  {
    input: [[1, 2, 3], 2],
    expected: 1,
  },
  {
    input: [[1, 2, 3], 3],
    expected: 2,
  },
  {
    input: [[1, 2, 3], 4],
    expected: -1,
  },
  {
    input: [[1, 2, 3, 4], 3],
    expected: 2,
  },
  {
    input: [[1, 2, 3, 4], 4],
    expected: 3,
  },
];

for (let subject of Object.values(subjects)) {
  const subjectName = subject.name;

  describe(`\`${subjectName}\` test cases:`, () => {
    for (let { input, expected } of CASES) {
      const [nums, target] = input;
      test(`${fmtArr(nums)}, ${target} -> ${expected}`, () => {
        expect(subject(nums, target)).toEqual(expected);
      });
    }
  });
}

const nums = createArray(10_000_000);

Object.values(subjects).forEach((subject) => {
  test(`\`${subject.name}\` runs in O(log n) time`, () => {
    const time = benchmark(() => {
      subject(nums, nums.at(-1));
    });

    if (time > 1) {
      throw new Error(
        `Runtime exceeded. "${subject.name}" must run in O(log n) time.`
      );
    }
  });
});
