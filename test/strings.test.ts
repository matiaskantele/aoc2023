import { expect, test } from "bun:test";
import {
  expandDigits,
  getCalibrationValue,
  removeNonDigits,
} from "../src/utils/strings";

test("Remove non-digits from strings", () => {
  expect(removeNonDigits("a1b2c3d4e5f")).toBe("12345");
});

test("Expand written digits", () => {
  expect(expandDigits("eightwothree")).toBe("eight8eightwo2twothree3three");
});

test("Get calibration value", () => {
  expect(getCalibrationValue(expandDigits("two1nine"))).toBe(29);
  expect(getCalibrationValue(expandDigits("eightwothree"))).toBe(83);
  expect(getCalibrationValue(expandDigits("abcone2threexyz"))).toBe(13);
  expect(getCalibrationValue(expandDigits("xtwone3four"))).toBe(24);
  expect(getCalibrationValue(expandDigits("4nineeightseven2"))).toBe(42);
  expect(getCalibrationValue(expandDigits("zoneight234"))).toBe(14);
  expect(getCalibrationValue(expandDigits("7pqrstsixteen"))).toBe(76);
});
