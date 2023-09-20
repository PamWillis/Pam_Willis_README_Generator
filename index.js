// TODO: Include packages needed for this application
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
            type: 'text',
            name: 'credits',
            message: 'List your creditors, tutorials, third-party assets that require attribution:',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'choose license',
            choices: ['MIT', 'Apache_2', 'Boost', 'BSD_3-Clause', 'BSD_2-Clause', 'The_Aritistic_License_2',]
        },
        {
            type: 'text',
            name: 'badges',
            message: 'list badges:',
        },
        {
            type: 'text',
            name: 'features',
            message: 'What features are used?',
        },
        {
            type: 'text',
            name: 'contribution',
            message: 'Directions to contribute:',
        },
        {
            type: 'text',
            name: 'tests',
            message: 'list tests created:',
        },
    ])


        // TODO: Create a function to write README file
        
        .then((data) => {
            const filename = `${data.title.toLowerCase().split(' ').join('_')}.md`;
    // function writeToFile(fileName, data) { }
    fs.writeFile(filename, createMD(data), (err) =>
    err ? console.log(err) : ('Success!')
  );
});
        

// TODO: Create a function to initialize app
function createMD(data, answers) { 
    return `
# ${data.title}

## Description
- ${data.motivation}
- ${data.why}
- ${data.what}
- ${data.learn}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}
<mockup>![MockUp](placecard.png)

## Credits
${data.credits}

## License
${data.license}

## Features
${data.features}

## Directions to Contribute
${data.contribution}

## Tests
${data.tests}`

}
