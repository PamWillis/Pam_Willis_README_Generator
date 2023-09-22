const generateMarkdown = require("./utils/generateMarkdown")

const inquirer = require(`inquirer`);
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'text',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'text',
            name: 'motivation',
            message: 'Description: what was your motivation for creating',
        },
        {
            type: 'text',
            name: 'why',
            message: 'Description: why did you build the project?',
        },
        {
            type: 'text',
            name: 'what',
            message: 'Description: what problem does it solve?',
        },
        {
            type: 'text',
            name: 'learn',
            message: 'Description: what did you learn?',
        },
        {
            type: 'text',
            name: 'installation',
            message: 'Describe how to install:',
        },
        {
            type: 'text',
            name: 'usage',
            message: 'Provide instructions and examples for use:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'choose license',
            choices: ['Apache', 'Boost', 'The MIT License', 'BSD 2-Clause License', 'BSD 3-Clause License',
             'Creative Commons 1.0', 'Eclipse Public License 1.0', 'Eclipse Public License 1.0', 'GNU GPL v3',
            'GNU GPL v2', 'Mozilla Public License 2.0', 'Unlicensed'],
            
        },
        {
            type: 'text',
            name: 'contributing',
            message: 'List your contributors, tutorials, and third-party assets that require attribution:',
        },
        {
            type: 'text',
            name: 'tests',
            message: 'list tests created:',
        },
        {
            type: 'text',
            name: 'github',
            message: 'enter github user name',
        },
        {
            type: 'text',
            name: 'email',
            message: 'enter email address',
        },

    ])
        // TODO: Create a function to write README file
        
        .then((data) => {
            
            const filename = `${data.title.toLowerCase().split(' ').join('_')}.md`;
            const generateMD = generateMarkdown(data)
            console.log('generateMD', generateMD);


    fs.writeFile(filename, generateMD, (err) =>
    err ? console.log(err) : ('Success!')
  );
});
        

// TODO: Create a function to initialize app
function createMD(data) { 
    return `
`

}
