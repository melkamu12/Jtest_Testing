const reverseString = require("./reverse_string.js");

describe("reverseString", () => {
  test("reverses the string", () => {
    expect(reverseString("Micorverse")).toBe("esrevrociM");
  });
});
