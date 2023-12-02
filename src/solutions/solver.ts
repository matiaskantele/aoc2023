import { day1part1, day1part2 } from "./day1";

type Solvers = {
  [key: string]: (input: string[]) => number;
};

const solvers: Solvers = {
  d1p1: day1part1,
  d1p2: day1part2,
};

export const solve = (puzzle: string, input: string[]) => {
  const solver = solvers[puzzle];
  if (!solver) {
    return "still eluding the author :/";
  }
  return solver(input);
};
