import { d1p1, d1p2 } from "./day1";
import { d2p1, d2p2 } from "./day2";
import { d3p1 } from "./day3";

type Solvers = {
  [key: string]: (input: string[]) => number;
};

const solvers: Solvers = {
  d1p1,
  d1p2,
  d2p1,
  d2p2,
  d3p1,
};

export const solve = (puzzle: string, input: string[]): string => {
  const solver = solvers[puzzle];
  if (!solver) {
    return `¯\\_(ツ)_/¯`;
  }
  return solver(input).toString();
};
