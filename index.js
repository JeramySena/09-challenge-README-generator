// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdowns = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const userQuestions = [
  // title of project
  {
    type: "input",
    name: "title",
    message: "What is the title of you project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter the title of your project!");
      }
    },
  },

  // brief explanation of project
  {
    type: "input",
    name: "aboutProject",
    message: "Provide information about your project: (Required)",
    validate: (projectInfo) => {
      if (projectInfo) {
        return true;
      } else {
        console.log("Please information about your project:");
      }
    },
  },

  // how do you install this project
  {
    type: "input",
    name: "howInstall",
    message: "How do you install your project? (Required)",
    validate: (projectInstall) => {
      if (projectInstall) {
        return true;
      } else {
        console.log(
          "Please provide information on how to install your project:"
        );
      }
    },
  },

  // how do you use this project
  {
    type: "input",
    name: "projectUse",
    message: "How do you use this project? (Required)",
    validate: (projectInstructions) => {
      if (projectInstructions) {
        return true;
      } else {
        console.log("Please provide instructions on how to use your project:");
      }
    },
  },

  // What licenses where used for this project
  {
    type: "list",
    name: "license",
    message: "What licenses did you on this project?",
    // Need to add license choices
    choices: ["ISC", "MIT", "ALL"],
  },

  // What features for projects
  {
    type: "input",
    name: "features",
    message: "What are the features of this project? (Required)",
    validate: (projectFeatures) => {
      if (projectFeatures) {
        return true;
      } else {
        console.log("Please provide features for your project:");
      }
    },
  },

  // who contributed to your project
  {
    type: "input",
    name: "contributors",
    message: "Who contributed to your project?",
    default: true,
  },

  // Github link
  {
    type: "input",
    name: "link",
    message: "Enter the GitHub link to your project. (Required)",
    validate: (projectLink) => {
      if (projectLink) {
        return true;
      } else {
        console.log("Please enter the link to your project!");
      }
    },
  },
];

// TODO: Create a function to write README file

const fs = require('fs');
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) {
        return console.log(err);
      }
      console.log("Success!")
    });
  }
        

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(userQuestions).then((userAnswers) => {
    console.log(userAnswers);
    writeToFile("readme.md", generateMarkdowns(userAnswers));
  });
}

// Function call to initialize app
init();

