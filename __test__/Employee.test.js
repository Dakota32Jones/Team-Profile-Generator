const Employee = require("../lib/Employee");

test("create employee object", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("Make employee Name", () => {
  const name = "Dakota";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("make ID", () => {
  const testId = 100;
  const employee = new Employee("Dakota", testId);
  expect(employee.id).toBe(testId);
});

test("Make email", () => {
  const testEmail = "test@gmail.com";
  const employee = new Employee("Dakota", 1, testEmail);
  expect(employee.email).toBe(testEmail);
});

test("get name from getName", () => {
  const testName = "Dakota";
  const employee = new Employee(testName);
  expect(employee.getName()).toBe(testName);
});

test("Get ID from getID", () => {
  const testID = "100";
  const employee = new Employee("Dakota", testID);
  expect(employee.getId()).toBe(testID);
});

test("get email from getEmail", () => {
  const testEmail = "test@gmail.com";
  const employee = new Employee("Dakota", 1, testEmail);
  expect(employee.getEmail()).toBe(testEmail);
});

test("getRole", () => {
  const testRole = "Employee";
  const employee = new Employee("Dakota", 1, "test@gmail.com");
  expect(employee.getRole()).toBe(testRole);
});
