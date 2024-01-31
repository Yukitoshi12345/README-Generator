// Import the required modules for user prompts, file system access, and Markdown generation
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require('./utils/generateMarkdown') // Import the required modules for user prompts, file system access, and Markdown generation

// Define an array containing objects that represent questions for user interaction
const questions = [
    
    {
        // Question for user's GitHub username
        name: 'GithubUsername',
        message: 'What is your GitHub username?',
        type: 'input'
    },

    {
        // Question for user's contact email
        name: 'Email',
        message: 'What is your contact email?',
        type: 'input'
    },

    {
        // Question for user's project title
        name: 'Title',
        message: 'What title do you want to give this project?',
        type: 'input',
    },

    {
        // Question for user's project description
        name: 'Description',
        message: 'Tell me in your own words, what this project is about!',
        type: 'input'
    },

    {
        // Question for user's installation instruction
        name: 'InstallationInstruction',
        message: 'Walk me through the installation instruction someone needs to take to set up this project.',
        type: 'input'
    },

    {
        // Question for user's usage information
        name: 'UsageInformation',
        message: 'Provide the use of this project.',
        type: 'input'
    },

    {
        // Question for user's contribution guidelines
        name: 'ContributionGuidelines',
        message: 'How can users contribute to this project?',
        type: 'input'
    },

    {
        // Question for user's test instruction
        name: 'TestInstruction',
        message: 'Provide instructions to test this project.',
        type: 'input'
    },

    {
        // Question for user's license
        name: 'license',
        message: 'Choose a License for this project',
        choices: ['Apache 2.0', 'BSL 1.0', 'BSD 2.0', 'BSD 3.0', 'CC0 1.0', 'GPL 2.0', 'GPL 2.1', 'GPL 3.0', 'Affero GPL 3.0', 'EPL 2.0', 'MIT', 'MPL 2.0', 'The Unlicense', 'None'],
        type: 'list'
    },
];

// Function to write content to a specified file, handling errors
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Your new README is ready to guide the world!')
    });
}

// Function to gather user input, generate Markdown content, and write it to a file
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile("Generated-README.md", generateMarkdown(answers));
        })
        .catch((error) => console.error('Failed to generate a README file: ', error));
}

// Function call to initialise app
// Start the process by calling the init() function
init();
