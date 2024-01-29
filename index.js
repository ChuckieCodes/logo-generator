// require modules
const inquirer = require('inquirer');
const fs = require('fs');

// shapes
const { Circle } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter a text (Max of 3 chars): '
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color for the text (Or a hexadecimal number): '
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Pick a shape: ',
    choices: [
      'circle',
      'triangle',
      'square',
    ]
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color for the shape (Or a hexadecimal number): '
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {

      if (answers.text.length > 3) {
        console.log("Text input should not be more than 3 chars.");
        init();
      } 
      else {
        // destructure answers
        const { text, textColor, shapeColor } = answers;

        // handle shape
        let shapeObj;

        shapeObj = new Circle();

        shapeObj.setColor(shapeColor);

        // chekc
        // console.log(shapeObj.render());

        // file path
        const filePath = 'logo.svg';

        // svg template
        const svgTemplate = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="white" />

  ${shapeObj.render()}
          
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          
</svg>
        `;

        // write to file
        fs.writeFile(filePath, svgTemplate, (err) => {
          if (err) {
            console.error('Error generating logo:', err);
          } else {
            console.log('Generated logo.svg');
          }
        });
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

init();