# Notes-app-Node.js

![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white)
![image](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

Note application is my first start learning about how to use node.js. This application will be executed in command line using node.js to run JavaScript outside web browser. What this app does are add, remove, list and read note from json file.

## Dependencies
- chalk - terminal string styling
- validator - input validation such as isEmail, isNumber
- yargs - build interactive command line tools, create an elegant user interface

## Description
- Start using this app by `node app.js --h` command
- It will show all the commands and options
  - commands
    - add - add a note with title and body argument
    - remove - remove a note with title and body argument
    - list - list all notes in the app
    - read - show title and body of the note with title argument
  - options
    - -v, --version - show version number
    - -h, --help - show help
- Add note - `node app.js --title="Wonderful" --body="It's a wonderful day"`
- Remove note - `node app.js --title"Alice" --body="There is a girl"`
- List note - `node app.js list`
- Read note - `node app.js read --title="Bright Sky"`
- Debugger
  - Instead of using console log to debugging, you can use debugger which is the feature that most web browsers have by put `debugger;` statement in your file.
  - Use `node inspect app.js add --title="Wonderland" --body="hand"` command to use debugger
  - Then, open `chrome://inspect` url in chrome and you will see the DevTools for inspecting.
  - In remote target section, it will show all node.js application that include debugger statement.
  - Click inspect and the app.js will be appeared
  - After that, click Add folder to workspace and choose the project folder.
  - Allow DevTools requests full access
  - Open the console by pressing ESC
  - Run script execution to go to debugger statement
  - All the things that happen will appear in console
  - After you close the DevTools windows, the node.js app will be disappeared in remote target.
