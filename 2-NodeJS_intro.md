# FullStack course

## Node.js introduction
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

<Node Image>

## NPM
Node comes along with NPM, standing as Node Package Manager. This package manager allows us to deal with dependencies and allows us to have all of our dependencies in a file called package.json. To create this file simply run
```
npm init
```
Hit enter to all the questions to get the default package.json template, that looks like this
```javascript
{
  "name": "tutorialnode",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
Here you have the basic data for NPM to run. The most important tags in this file for now are
- "main": Especifies wich file to look upon Node starts to run.
- "scripts": Tells your computer wich comands to run for a certain alias. Usually there's a command "start" which tells our computer the commands to run to get the server up and running.
- "dependencies": You got me. It's not in the file still but this is maybe the most importnat tag, it specifies what NPM need to install in order to run the project. It will be added automatically when installing dependencies.

## Installing dependencies with NPM
To install dependencies with npm simply run
```
npm install <dependencyName>
```
If you are willing to install a dependency and save it to the package.json file you must run
```
npm install <dependencyName> --save
```
And the best thing about NPM is that when we want to install all the dependencies listed in a package.json file you only have to run
```
npm install
```
And you will install all the dependencies listed there. All the dependencies are installed in a folder named **node_modules**
## Importing a module
Like in any progrmming language Node.js has it's way to import the libraries we just installed, it's done like this
```javascript
var coolModule = require('coolModule');
```
NodeJS has built-in modules that you can import without having installed them previously, [here](https://www.w3schools.com/nodejs/ref_modules.asp) you have a list of them.
