const { inheritInnerComments } = require('@babel/types');
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/manager.js');
const Intern = require('/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/intern.js');
const Engineer = require('/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/engineer.js');
const teamCards = [];

//FUNCTION TO CREATE FILE
function writeToFile(fileName, html) {
  fs.writeFile(filename, html, err => {
      if (err) {
        console.error(err);
      } else {
          console.log('file written successfully');
      }
    });
}
//PROMPTS FOR MANAGER 
const managerQuestions = [
  {   name: 'name',
      message: 'What is the team managers name?',
      type: 'input'

},
{     name: 'id',
      message: 'What is their ID?',
      type: 'input'

},
{     name: 'email',
      message: 'What is their email address?',
      type: 'input'

},
{     name: 'officeNumber',
      message: 'What is their office number?',
      type: 'input'

},]
//TRANSITORY PROMPT
const nextStepQuestions = [{
     name: "nextStep",
     message: "Would you like to add a Engineer or Intern to your team or are you done assembling?",
     type: "list",
    choices: ["Intern", "Engineer", "I'm done!"]
   }]

//PROMPTS FOR INTERN
const internQuestions = [
  {   name: 'name',
      message: 'What is the interns name?',
      type: 'input'

},
{     name: 'id',
      message: 'What is their ID?',
      type: 'input'

},
{     name: 'email',
      message: 'What is their email address?',
      type: 'input'

},
{     name: 'school',
      message: 'What school are they from?',
      type: 'input'

},]
//PROMPTS FOR ENGINEER
const engineerQuestions = [
  {   name: 'name',
      message: 'What is the engineers name?',
      type: 'input'

},
{     name: 'id',
      message: 'What is their ID?',
      type: 'input'

},
{     name: 'email',
      message: 'What is their email address?',
      type: 'input'

},
{     name: 'officeNumber',
      message: 'What is their github?',
      type: 'input'

},]
//INQUIRER PROMPT FOR MANAGER :
const getManagerData = async () => {
inquirer.prompt(managerQuestions)
  .then(answers => {
    console.log(answers);
    nextStep();
    generateManagerCard();
})
}
//INQUIRER PROMPT FOR INTERN
const getInternData = () => {
  inquirer.prompt(internQuestions)
    .then(answers => {
      console.log(answers);
      //take the data and make a card function goes here
      nextStep();
  })
  }

//INQUIRER PROMPT FOR ENGINEER
const getEngineerData = () => {
  inquirer.prompt(engineerQuestions)
    .then(answers => {
      console.log(answers);
      nextStep();
      //take the data and make a card function goes here
  })
  }

//INQUIRER PROMPT FOR TRANSITORY QUESTION
const nextStep = () => {
  inquirer.prompt(nextStepQuestions)
    .then(answers => {
      console.log(answers);
      console.log(typeof answers);
      switch(answers['nextStep']) {
        case "Intern":    
            return getInternData();

        case "Engineer":
            return getEngineerData();

        case "I'm done!":
            console.log("Team assembled!");
      }
          })
}

//FUNCTION TO CREATE MANAGER CARD 
function generateManagerCard (answers){
  let name = answers.name;
  let id = answers.id;
  let email = answers.email;
  let officeNumber = answers.officeNumber;
  const manager = new Manager(name, id, email, officeNumber);
  console.log("a manager is born!")

  const generateManagerHTML = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
    <p class="card-text">ID: ${manager.getID()} </p>
    <p class="card-text">Office: ${manager.getOfficeNumber()}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="mailto${manager.getEmail()}" class="card-link">${manager.getEmail()}</a>
  </div>
</div>`;
  teamCards.push(generateManagerHTML);
}
//FUNCTION TO CREATE INTERN CARD 

//FUNCTION TO CREATE ENGINEER CARD 


//FUNCTION TO INITIALIZE APP
function init(){
  getManagerData();
  //writeToFile(filename, html);
};

//START THE APP!
init();
