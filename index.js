// TODO: Include packages needed for this application
const inquirer = require(`inqurier`);
const fs = require(`fs`);
const generateMarkdown = require('./utils/generatedmarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your contact email?',
    },

    {
        type: 'input',
        name: 'Title',
        message: 'What title do you want to give this project?',
    },

    {
        type: 'input',
        name: 'Description',
        message: 'Tell me in your own words, what this project is about!',
    },

    {
        type: 'input',
        name: 'Installation Instructions',
        message: 'Walk me through the installation instruction someone needs to take to set up this project.',
    },

    {
        type: 'input',
        name: 'Usage Information',
        message: 'Provide the use of this project.',
    },

    {
        type: 'input',
        name: 'Contribution Guidelines',
        message: 'How can users contribute to this project?',
    },

    {
        type: 'input',
        name: 'Test Instructions',
        message: 'Provide instructions to test this project.',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a License for this project',
        choices: ['MIT', 'Apache 2.0', 'BSL 1.0', 'BSD 2', 'BSD 3', 'CCZ 1.0', 'GPL 2.0', 'GPL 2.1', 'GPL 3.0', 'Affero GPL 3.0', 'EPL 2.0', 'MPL 2.0', 'The Unlicense', 'None'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Your new README is ready to guide the world!')
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
