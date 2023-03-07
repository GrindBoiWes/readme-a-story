
// This section is variables that are using the npm inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./genmkd/generateMarkdown.js');
// Array of questions that will be prompted when running node index.js in the terminal
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

// The section is writing the contents from the data provided
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
  

// This section generates the readme to the repo using writeToFile
function init() {
    inquirer.prompt(questions) 
      .then((data) => {
        const readme = generateMarkdown(data);
        writeToFile('README.md', readme)
      });
}

// Function call to initialize app
init();
