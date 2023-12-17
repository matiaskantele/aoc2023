import { expect, test } from "bun:test";
import { d3p1, d3p2 } from "../src/solutions/day3";

const input: string[] = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
];

test("Solver: Day 3 - Part 1", () => {
  const answer = d3p1(input);
  expect(answer).toBe(4361);
});

test("Solver: Day 3 - Part 2", () => {
  const answer = d3p2(input);
  // expect(answer).toBe(-1);
});
