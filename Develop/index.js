// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const userQuestions = () => {
  return inquirer.prompt([
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
      name: "about",
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
      name: "about",
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
      name: "about",
      message: "How do you use this project? (Required)",
      validate: (projectInstructions) => {
        if (projectInstructions) {
          return true;
        } else {
          console.log(
            "Please provide instructions on how to use your project:"
          );
        }
      },
    },

    // What licenses where used for this project
    {
      type: "checkbox",
      name: "license",
      message: "What licenses did you on this project? (Check all that apply)",
      // Need to add license choices
      choices: ["", "", "", "", "", "", ""],
    },

    // What features for projects
    {
      type: "input",
      name: "about",
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
      name: "about",
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
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// making a note to see if I can save and push
