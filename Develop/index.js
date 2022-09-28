// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project name? (Required)",
    validate: (projectTitle) => {
        if (projectTitle) {
            return true;
        } else {
            return false;
        }
    }
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to use?",
    choices: ["MIT", "Apache", "Mozilla"]
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project: (Required)",
    validate: (description) => {
      if (description) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
  },
  {
    type: "input",
    name: "name",
    message: "Enter author's name: (Required)"
  },
  {
    type: "input",
    name: "username",
    message: "Enter GitHub username: (Required)",
    validate: (userName) => {
      if (userName) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter e-mail address: (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log(inquirerResponses);
    writeToFile("README.md", generateMarkdown(inquirerResponses));
  });
}

// Function call to initialize app
init();
