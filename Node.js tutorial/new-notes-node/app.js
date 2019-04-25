console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alais: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alais: 'b'
};

//const argv = yargs.argv;
const argv = yargs
.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
    title: titleOptions,
})
.command('remove', 'Remove a note', {
    title: titleOptions
})
.help()
.argv;

var command = argv._[0];
//var command = process.argv[2];
console.log('Command: ', command);
//console.log('process', process.argv);
console.log('yargs', argv);

if (command === 'add'){
    //console.log('Adding new note');
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
        /* console.log('--');   
    console.log(`Title: ${note.title}`);   
    console.log(`Body: ${note.body}`);   */ 
    } else {
        console.log('Note title taken');     
    }
} else if (command === 'list'){
    //console.log('Listing all notes');
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} Note(s).`);
    allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read'){
    //console.log('Reading note');
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');        
        notes.logNote(note);        
        } else {         
        console.log('Note not found');   
        }    
} else if (command === 'remove'){
    //console.log('Removing note');
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}
else {
    console.log('error');
}


