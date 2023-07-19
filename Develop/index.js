// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
/* fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8', (err,data) => {
    if (err) throw (err);
    console.log(data);
});

console.log('Hello...');

fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you.', (err) => {
    if (err) throw (err);
    console.log('Write complete.');

    fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nYes, it is.', (err) => {
        if (err) throw (err);
        console.log('Append complete.');
    });
});
 */

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
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

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
    
//}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (answers){
    console.log(answers);
    console.log(generateMarkdown(answers));
    fs.writeFile('README.md',generateMarkdown(answers),(err,data)=>{
        err? console.error(err):console.log('README successfully generated.')
    })
})}

// Function call to initialize app
init();
