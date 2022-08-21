const Manager = require("../lib/Manager");

test("making office number", () => {
  const testValue = "10";
  const employee = new Manager("Dakota", 1, "test@gmail.com", testValue);
  expect(employee.officeNumber).toBe(testValue);
});

test("getRole function", () => {
  const testValue = "Manager";
  const employee = new Manager("Dakota", 1, "test@gmail.com", testValue);
  expect(employee.getRole()).toBe(testValue);
});
