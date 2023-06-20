const StringLength = require("./String_Length");

describe("StringLength", () => {
  test("returned String Length", () => {
    expect(StringLength("Microvers")).toBe(9);
  });

  test("throws erorr non-string input", () => {
    expect(() => StringLength(123)).toThrow("Input should be a string");
  });

  test("throws an error length less than 1 character", () => {
    expect(() => StringLength("")).toThrow(
      "String length should be between 1 and 10 characters"
    );
  });

  test("throws an error Longer than 10 characters", () => {
    expect(() => StringLength("Hello World !!")).toThrow(
      "String length should be between 1 and 10 characters"
    );
  });
});
