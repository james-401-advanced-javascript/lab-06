const People = require('../models/people');
jest.mock('node-fetch');

describe('Model', () => {
  let testPerson = {
    id: 10,
    firstName: 'Sarah',
    lastName: 'Smalls',
    birthday: new Date('01/01/2010'),
    likes: 'dogs',
    team: 'Yellow Rhino',
  };
  let people = new People(testPerson);
  it('sanitizes returns true when given a valid object', () => {
    expect(people.sanitize(testPerson)).toBe(true);
  });

  it('sanitize() returns undefined with missing requirements', () => {
    expect(people.sanitize()).toBe(undefined);
  });

  it('can read', () => {
    expect(people.get(testPerson.id)).toBeTruthy();
  });
});
