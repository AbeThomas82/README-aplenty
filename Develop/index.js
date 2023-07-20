const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: "Please include suggestions the user can interject into the repo."
    },
    {
        type: "input",
        name: "test",
        message: "Please include test queries.",
        default: 'npm test',
    },
    {
        type: "list",
        name: "license",
        message: "Which license, if any, are you using?",
        choices:['Apache 2.0','Unilicense','Perl','MIT','IPL 1.0', 'MPL 2.0']
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    },
];

function init() {
    inquirer.prompt(questions).then(function (answers){
    console.log(answers);
    console.log(generateMarkdown(answers));
    fs.writeFile('README.md',generateMarkdown(answers),(err,data)=>{
        err? console.error(err):console.log('README successfully generated.')
    })
})}

init();
