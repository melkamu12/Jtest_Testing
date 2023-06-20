const capitalize = require("./capitalizing.js");

test("capitalize function capitalizes the first character of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});
