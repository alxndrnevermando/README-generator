var inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    { 
    type: 'input',
    name: 'title',
    message: "What's your project title?",
    },
    {
    type: 'input',
    name: 'description',
    message: "Enter a description of your project.",
    },
    {
      type: 'input',
      name: 'installation',
      message: "How do you install your project?",
    },
    {
      type: 'input',
      name: 'usage',
      message: "Provide instructions and examples for use.",
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license are you using?',
      choices: ['MIT', 'Apache', "GPL"],
    },
    {
      type: 'input',
      name: 'contributor',
      message: "List anyone who contributed to this project.",
    },
    {
      type: 'input',
      name: 'test',
      message: "Provide instructions on how to test your application.",
    },
    {
      type: 'input',
      name: 'github',
      message: "What is your Github username?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your email?",
    },


];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("SUCCESS!")
    }
  });
}

// function to initialize program
function init() {
  inquirer
  .prompt(questions).then(answers => {
    // Use user feedback for... whatever!!
    const response = generateMarkdown(answers);
    writeToFile("README.md", response)
  });
}

// function call to initialize program
init();
