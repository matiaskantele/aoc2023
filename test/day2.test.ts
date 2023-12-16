import { expect, test } from "bun:test";
import { d2p1, d2p2 } from "../src/solutions/day2";

const input: string[] = [
  "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
  "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
  "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
  "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
  "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
];

test("Solver: Day 2 - Part 1", () => {
  const answer = d2p1(input);
  expect(answer).toBe(8);
});

test("Solver: Day 2 - Part 2", () => {
  const answer = d2p2(input);
  expect(answer).toBe(2286);
});
