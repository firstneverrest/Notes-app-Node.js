const chalk = require('chalk') // terminal string styling
const yargs = require('yargs') // command line args handler

console.log(chalk.hex('#58f540').underline('Notes-application'));

// Customize yargs version
yargs.version('1.0.1')

// create options command 
yargs.options({
    'v': {
        alias: 'version', // this command can be used instead of --version
        describe: 'show version number'
    },
    'h': {
        alias: 'help', // this command can be used instead of --help
        describe: 'show help'
    }
})

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note')
    }
})

yargs.parse() // enable to print out message in console
yargs.showHelp() // show all description in this app.js when type node app.js
