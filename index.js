//  reqired files

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/htmlTemp");
const validator = require("email-validator");

// adding asynchronous functions

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

console.clear();
console.log("--------------------");
console.log("Team Portfolio Generator");

// Functions to run application

async function main() {
  try {
    await prompt();

    for (let i = 0; i < teamArray.length; i++) {
      teamString = teamString + html.generateCard(teamArray[i]);
    }

    let finalHtml = html.generateHTML(teamString);

    console.clear();
    console.log("---------------");
    console.log("Generating index.html file.....");

    writeFileAsync("./dist/index.html", finalHtml);

    console.clear();
    console.log("-----------------");
    console.log("index.html file created successfully");
    console.log("----------------------");
  } catch (err) {
    return console.log(err);
  }
}

// adding inquirer prompts to collect the data from user when using application

async function prompt() {
  let responseDone = "";

  do {
    try {
      console.log("----------------");
      let response = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the employee's Name?",
          validate: function validateName(name) {
            return name !== "";
          },
        },
        {
          type: "input",
          name: "name",
          message: "Please enter Employee ID: ",
          validate: function validateName(name) {
            return name !== "";
          },
        },
        {
          type: "input",
          name: "name",
          message: "Please enter the employee's email address: ",
          // have to validate using email-validator
          validate: function validateName(name) {
            return validator.validate(name);
          },
        },
        {
          type: "list",
          name: "name",
          message: "Please enter the employee's role: ",
          choices: ["Engineer", "Intern", "Manager"],
        },
      ]);

      let response2 = "";

      if (response.role === "Engineer") {
        response2 = await inquirer.prompt([
          {
            type: "input",
            name: "x",
            message: "What is the employees github username?: ",
            validate: function validateName(name) {
              return name !== "";
            },
          },
        ]);
        //   add to team array

        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response2.x
        );
        teamArray.push(engineer);
      } else if (response.role === "Manager") {
        response2 = await inquirer.prompt([
          {
            type: "input",
            name: "x",
            message: "What is the employee's office number?: ",
            validate: function validateName(name) {
              return name !== "";
            },
          },
        ]);

        // add to team array
        const manager = new Manager(
          response.name,
          response.id,
          response.email,
          response2.x
        );
        teamArray.push(manager);
      } else if (response.role === "Intern") {
        response2 = await inquirer.prompt([
          {
            type: "input",
            name: "x",
            message: "What school is the employee attending?: ",
            validate: function validateName(name) {
              return name !== "";
            },
          },
        ]);

        // add to team array
        const intern = new Intern(
          response.name,
          response.id,
          response.email,
          response2.x
        );
        teamArray.push(intern);
      }
    } catch (err) {
      return console.log(err);
    }
    responseDone = await inquirer.prompt([
      {
        type: "list",
        name: "finish",
        message: "Would you like to continue?: ",
        choices: ["Yes", "No"],
      },
    ]);
  } while (responseDone.finish === "Yes");
}

// start and run program

main();
