'use strict';

let People = require('./models/people');
let Teams = require('./models/teams');

let people = new People();
let teams = new Teams();

let firstArg = process.argv.slice(2)[0];
let secondArg = process.argv.slice(3)[0];

// teams.count();
// people.count();

// Name: Sonia Kandah
// Team: Yellow Rhino
// Birthday: 2/22/2020
// Likes: Cats and Dogs

// get person info by searching first and last name into query field
// needs to be in format firstName=arg1&lastName=arg2
// then get team by team.getFromField()
// format will be id=foundPerson.team

async function printPersonInfo(arg1, arg2) {
  if (arg1 === undefined || arg2 === undefined) {
    console.log('No Record Found');
    return;
  }

  const queryString = `firstName=${arg1}&lastName=${arg2}`;
  const foundPerson = await people.getFromField(queryString);
  if (foundPerson[0] === undefined) {
    console.log('No Record Found');
    return;
  }

  if (!foundPerson) {
    console.log('No Record Found');
    return;
  }

  const foundTeam = await teams.get(foundPerson[0].team);
  const birthday = new Date(foundPerson[0].birthday);

  console.log('Name: ', `${arg1} ${arg2}`);
  console.log('Team: ', foundTeam.name);
  console.log('Birthday: ', birthday.toLocaleDateString());
  switch (foundPerson[0].likes) {
  case 'dogs':
    console.log('Likes: Dogs');
    break;
  case 'cats':
    console.log('Likes: Cats');
    break;
  default:
    console.log('Likes: Cats and Dogs');
  }
}

// Print team info
async function printTeamInfo(arg1, arg2) {
  if (arg1 === undefined || arg2 === undefined) {
    console.log('No Record Found');
    return;
  }

  const queryString = `firstName=${arg1}&lastName=${arg2}`;
  const foundPerson = await people.getFromField(queryString);
  if (foundPerson[0] === undefined) {
    console.log('No Record Found');
    return;
  }

  if (!foundPerson) {
    console.log('No Record Found');
    return;
  }

  const foundTeam = await teams.get(foundPerson[0].team);
  const birthday = new Date(foundPerson[0].birthday);

  console.log('Name: ', `${arg1} ${arg2}`);
  console.log('Team: ', foundTeam.name);
  console.log('Birthday: ', birthday.toLocaleDateString());
  switch (foundPerson[0].likes) {
  case 'dogs':
    console.log('Likes: Dogs');
    break;
  case 'cats':
    console.log('Likes: Cats');
    break;
  default:
    console.log('Likes: Cats and Dogs');
  }
}

printPersonInfo(firstArg, secondArg);
