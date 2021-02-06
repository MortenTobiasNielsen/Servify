import * as Responsive from "./Responsive";

// Test device: Pixel 4
const height = 718.9090909090909;
const width = 392.72727272727275;
const scale = 2.75;

test("Width and height is calculated consistently", () => {
  // Test cases
  const case1 = 1;
  const case2 = 5;
  const case3 = 27;
  const case4 = 43;
  const case5 = 89;
  const case6 = 100;

  // Test case 1
  expect(
    Math.round(
      Responsive.testFunctionality(width, height, scale, case1, true) * 100
    ) / 100
  ).toBe(4.0);
  expect(
    Math.round(
      Responsive.testFunctionality(width, height, scale, case1, false) * 100
    ) / 100
  ).toBe(7.27);

  // Test case 2
  expect(
    Math.round(
      Responsive.testFunctionality(width, height, scale, case2, true) * 100
    ) / 100
  ).toBe(19.64);
  expect(
    Math.round(
      Responsive.testFunctionality(width, height, scale, case2, false) * 100
    ) / 100
  ).toBe(36.0);

  // Test case 3
  expect(
    Math.round(
      Responsive.testFunctionality(width, height, scale, case3, true) * 100
    ) / 100
  ).toBe(106.18);
  expect(
    Math.round(
      Responsive.testFunctionality(width, height, scale, case3, false) * 100
    ) / 100
  ).toBe(194.18);

  // Test case 4
  expect(
    Math.round(
      Responsive.testFunctionality(width, height, scale, case4, true) * 100
    ) / 100
  ).toBe(168.73);
  expect(
    Math.round(
      Responsive.testFunctionality(width, height, scale, case4, false) * 100
    ) / 100
  ).toBe(309.09);

  // Test case 5
  expect(
    Math.round(
      Responsive.testFunctionality(width, height, scale, case5, true) * 100
    ) / 100
  ).toBe(349.45);
  expect(
    Math.round(
      Responsive.testFunctionality(width, height, scale, case5, false) * 100
    ) / 100
  ).toBe(640.0);

  // Test case 6
  expect(
    Math.round(
      Responsive.testFunctionality(width, height, scale, case6, true) * 100
    ) / 100
  ).toBe(392.73);
  expect(
    Math.round(
      Responsive.testFunctionality(width, height, scale, case6, false) * 100
    ) / 100
  ).toBe(718.91);
});
