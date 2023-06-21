// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
function generateMarkdown(data) {
    return `# ${data.title} ![license](https://img.shields.io/badge/License-${data.license}-ff69b4)

## Description
${data.description}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}`;

}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project about?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How would you use your project?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'With whom did you collaborate?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What license does your ptoject has?',
    },
  ])
  .then((answers) => {
    const htmlReadmeContent = generateMarkdown(answers);

    fs.writeFile('./SampleREADME/README.md', htmlReadmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README')
    );
  });

