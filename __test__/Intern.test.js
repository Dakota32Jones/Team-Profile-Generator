const Intern = require("../lib/Intern");

test("making a school with a constructor", () => {
  const testValue = "University of North Carolina";
  const employee = new Intern("Dakota", 1, "test@gmail.com", testValue);
  expect(employee.school).toBe(testValue);
});

test("getRole function working properly", () => {
  const testValue = "Intern";
  const employee = new Intern("Dakota", 1, "test@gmail.com", testValue);
  expect(employee.getRole()).toBe(testValue);
});

test("get intern school", () => {
  const testValue = "Univerity of North Carolina";
  const employee = new Intern("Dakota", 1, "test@gmail.com", testValue);
});
