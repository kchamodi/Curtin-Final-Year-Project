console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

//console.log(_.isString(true));
//console.log(_.isString('kasuni'));

//var filteredArray = _.uniq(['kasuni', 1, 'kasuni', 1,2,3,4]);
var filteredArray = _.uniq(['Chamodi']);
console.log(filteredArray);

//console.log('Result:' , notes.add(9, -2));

//var res = notes.addNote();
//console.log(res);

//var user = os.userInfo();
//console.log(user);

//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);