// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./genmkd/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',

    },

    {
        type: 'input',
        name: 'description',
        message: ' Provide a brief description of your project',

    },

    {
        type: 'input',
        name: 'contents',
        message: 'Enter items that will display in the Table of Contents',
    
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for installation',

    },

    {
        type: 'input',
        name: 'usage',
        message: 'What are the directions for usage?'

    },

    {
        type: 'input',
        name: 'test',
        message: 'What are the testing directions?'
    },

    {
        type: 'input',
        name: 'contributions',
        message: 'List any contributions on this repo'
    },

    {
        type: 'list',
        name: 'liscence',
        message: 'Please select a liscence to apply',
        choices: ['None', 'MIT', 'ISC', 'Apache 2.0', 'Mozilla'],
        validate: (value) => {
            if (value) {return true} else {return 'Please choose a liscence'}
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter a link to this projects repository',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your current email address'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
       if (err) {
        console.log(err);
       }
       else {
        console.log('README.md has been created!')
       }
    });
}
  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
      .then((data) => {
        const readme = generateMarkdown(data);
        writeToFile('README.md', readme)
      });
}

// Function call to initialize app
init();
