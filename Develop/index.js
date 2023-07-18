// TODO: Include packages needed for this application
const fs = require('fs');
fs.readFile('./Develop/starter.txt', (err,data) => {
    if (err) throw (err);
    console.log(data);
});
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description of what your project is about."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide details on how you would install your project."
    },
    {
        type: "input",
        name: "usage",
        message: "How would the end user work with your project?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please include suggestions on how to improve the project."
    },
    {
        type: "input",
        name: "test",
        message: "Please include test queries."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (answers){
    console.log(answers);
})}

// Function call to initialize app
init();
