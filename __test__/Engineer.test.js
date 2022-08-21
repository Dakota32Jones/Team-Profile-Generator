const Engineer = require("../lib/Engineer");

test("making github with a constructor", () => {
  const testValue = "Engineer";
  const employee = new Engineer("Dakota", 1, "test@gmail.com", testValue);
  expect(employee.getRole()).toBe(testValue);
});

test("getRole function", () => {
  const testValue = "Engineer";
  const employee = new Engineer("Dakota", 1, "test@gmail.com", testValue);
  expect(employee.getRole()).toBe(testValue);
});

test("github", () => {
  const testValue = "Engineer";
  const employee = new Engineer("Dakota", 1, "test@gmail.com", testValue);
  expect(employee.getGitHub()).toBe(testValue);
});
