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
${data.license}

## If you have any question you can find me in Github or contact me by email:
${data.questions}`;

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
      type: 'list',
      name: 'license',
      message: 'What license does your ptoject has?',
      choices: ['MIT', 'Apache', 'None'],
    },
    {
      type: 'input',
      name: 'questions',
      message: ['Please enter your GitHub username and email address'],
    },
  ])
  .then((answers) => {
    const htmlReadmeContent = generateMarkdown(answers);

    fs.writeFile('./SampleREADME/README.md', htmlReadmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README')
    );
  });

