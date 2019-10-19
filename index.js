'use strict';

let People = require('./models/people');
let Teams = require('./models/teams');

let people = new People();
let teams = new Teams();

// let firstArg = new People(process.argv.slice(2)[0]);
// let secondArg = new Teams(process.argv.slice(3)[0]);

teams.count();
people.count();
