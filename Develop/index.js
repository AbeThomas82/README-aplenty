const fs = require('fs');//Include access to file system in node.js
const inquirer = require('inquirer');//Imported inquirer v.8.2.4
const generateMarkdown = require('./utils/generateMarkdown');//Imported generateMarkdown.js

const questions = [//Listed question bank like in Challenge 4
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
        message: "Please include suggestions the user can interject into the repo."
    },
    {
        type: "input",
        name: "test",
        message: "Please include test queries.",
        default: 'npm test',//Displayed as a courtesy to the user
    },
    {
        type: "list",
        name: "license",
        message: "Which license, if any, are you using?",
        choices:['None','APACHE--2.0','Unilicense','Perl','MIT','IPL--1.0', 'MPL--2.0']
    },//List and choices provided pathway options for the user
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"//Username will be linked in generateMarkdown()
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."//This and previous question will be in a new README section
    },
];

function init() {//Begins test with 'node index' command if called
    inquirer.prompt(questions).then(function (answers){//Queries begin and answers are inputted in function
    console.log(answers);//Tested answers to check if executed properly
    console.log(generateMarkdown(answers));//Calls imported function to process data
    fs.writeFile('README.md',generateMarkdown(answers),(err,data)=>{
        err? console.error(err):console.log('README successfully generated.')
    })//Answers generated in README markdown file if bypassing errors
})}

init();//Calls function and begins generator
