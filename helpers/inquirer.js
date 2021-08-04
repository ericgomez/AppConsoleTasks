const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1', // Valor que representa
        name: '1. Create homework' // Datos a mostrar
      },
      {
        value: '2', // Valor que representa
        name: '2. List homework' // Datos a mostrar
      },
      {
        value: '3', // Valor que representa
        name: '3. List homework completed' // Datos a mostrar
      },
      {
        value: '4', // Valor que representa
        name: '4. List homework pendent' // Datos a mostrar
      },
      {
        value: '5', // Valor que representa
        name: '5. Complete homework(s)' // Datos a mostrar
      },
      {
        value: '6', // Valor que representa
        name: '6. Delete homework' // Datos a mostrar
      },
      {
        value: '0', // Valor que representa
        name: '0. Exit' // Datos a mostrar
      },
    ]
  }
]

const inquirerMenu = async () => {
  console.clear();
  console.log('==================='.green);
  console.log(' Select one option '.green);
  console.log('===================\n'.green);

  const { option } = await inquirer.prompt(questions);
  return option;
}


const pause = async () => {

  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Press ${ 'enter'.green } to continue`
    }
  ]

  console.log('\n')
  await inquirer.prompt(question);
}

const readInput = async ( message ) => {
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate( value ) {
        if(value.length === 0 ) {
          return 'Please enter a value'
        }
        return true;
      }
    }
  ];

  const { description } = await inquirer.prompt(question);
  return description;
}

module.exports = {
  inquirerMenu,
  pause,
  readInput
}