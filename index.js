//  reqired files

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./htmlTemp");
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
