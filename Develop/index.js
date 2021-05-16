// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'GitHub',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Where is your email adress?',
        },
        {
            type: 'input',
            name: 'tittle',
            message: 'What is your projects name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD', 'None'],
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'use',
            message: 'What does the user need to know about usging the repo?',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'what does the user need to know about contributig to the repo?',
        },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Successfully created README.md!')
    });
};


// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(function (userAnswer) {
        console.log(userAnswer)
        writeToFile("README.md", generateMarkdown(userAnswer));
    });
}

// Function call to initialize app
init();


