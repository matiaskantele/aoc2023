import { expect, test } from "bun:test";
import { day1part1, day1part2 } from "../src/solutions/day1";

test("Solver: Day 1 - Part 1", () => {
  const input: string[] = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
  const answer = day1part1(input);
  expect(answer).toBe(142);
});

test("Solver: Day 1 - Part 2", () => {
  const input: string[] = [
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
  ];
  const answer = day1part2(input);
  expect(answer).toBe(281);
});
