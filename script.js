const names = [
  'Yaakov',
  'John',
  'Jen',
  'Jason',
  'Paul',
  'Frank',
  'Larry',
  'Paula',
  'Laura',
  'Jim',
];

for (const name of names) {
  const firstLetter = name.at(0);
  firstLetter === 'J' ? byeSpeaker(name) : helloSpeaker(name);
}
