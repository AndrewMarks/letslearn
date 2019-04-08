## Let's Learn!

Welcome Walter and Andrew - you've both expressed interest in learning more programming, learning how apis work - and maybe even what they are! - and about how to work with map and location data held by third parties.

This project is your learning sandbox for these things.

You'll notice that there are already some folders and files in this directory - don't worry about understanding everything that's in them, but take a look to familiarise yourself with the structure of the project :)

Your first task is as follows:

- if you're reading this file, you should already have copied this project to your machine (great!) - please move it from `Downloads` into `Documents`.

- we're going to be running some tests in the command line (exciting!) so we need to learn how to use them.

- i've written some tests for you already - you'll find them in the folder named `test`. these tests all check that one part of our code runs as expected; for example that one function (or 'method' - both words are correct) that we've written, returns a particular value when given a particular argument. we run these tests in the command line. the testing framework we are using is called 'jest'; to run jest tests, you need to do the following:

* open your command line: you can find it by searching for 'terminal' in the search bar.

* type `pwd` (stands for 'pathway (to) directory) to see where you are

* type `ls` (stands for 'list') to list out the available folders and files in your current location - the structure of this list might be familiar from looking for files in Finder, and that's exactly what we're doing, just with a different interface.

* to move into a folder (or 'directory') type `cd NameOfFolder` (i never learned what 'cd' stood for, google it). keep using `cd` to move into folders until you find the `letsLearn` project in `Documents`, and `cd` into it. congrats! you've made it into your project, and you're ready to run some tests.

* first thing's first: we need to set up our development environment - this means we need to install the frameworks (other programs) that are going to take care of things like compiling our code, running our tests and everything else we need. because we're writing javascript, we're going to be using `node` to manage everything we might need. we'll talk more about exactly what node is and how it works later. for now, let's just install it

* first we'll install `homebrew`, a tool that allows us to easily install new frameworks (like node) on our machines. copy and paste the following into the command line, then follow any prompts it gives you:

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

- once homebrew is installed, we'll use it to install node (you can think of it as follows: homebrew is a tool that manages programs and packages you install on your machine for developing software; node is a tool that manages the programs and packages you need for writing the kind of javascript project we're going to be working on). the command you use to access homebrew's utilities is `brew`: if you type

`brew install node`

into the command line, you should see homebrew installing it for you. more info - including on how to fix any errors with installation, here <https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew>

- you've installed node! congrats! the command that allows you to access the node utilities we'll need today is `npm` (this stands for 'node package manager', which gives you another clue as to what this tool is for). as you've copied the `letsLearn` project to your maching you will need to run

`npm install`

from the command line before you can start work. all javascript projects made with node have ways of configuring the packages and tools they need to run, and are using to do certain work. these are specified by configuration files in the project (have a sneak peek at `package.json`) but don't install themselves automatically on your machine when you copy a project from elsewhere, so you need to do this manually.

- now you should be ready to run the tests! type

`jest --notify` from the command line, and see what happens.

- you'll see that currently, we only have one test, and it's failing. this is expected behaviour at this point - we haven't written the code that will make it pass! your task today is to make this test pass.

### Suggestions:

- work on one piece of the program at a time, and worry only about making one of the tests pass at a time. this - as it is in any scientific or engineering project - is good practice as it allows you to isolate the moving parts within the system and see where a problem is coming from. work on making on test at a time pass, and only make one significant change in the code between running each test. this saves you time in the long run, as it should always be clear exactly what part of the code that you've written is breaking, creating unexpected behaviour, or otherwise causing tests to fail. if you only have one test (like today), read the error messages that jest is giving you carefully, and take care to see whether you're getting a differente error message this time, this can tell you a lot about the progress you're making!

- below are some recommended resoures and strategies for you to use in figuring your way through the task. i'll keep this updated as we move through the project :)

* js documentation <https://developer.mozilla.org/en-US/docs/Web/JavaScript>

* google your errors! chances are someone else has had this problem before - learn from them and from what their community said to help them. a good place to go is Stack Overflow, and these are often the first links you'll see when googling an error. remember that very often the answers given to another person won't map one to one with the specifics of your problem - it's up to you to use the information you find and adapt it to solve the error you have, and its causes.

* useful keywords for thinking about and researching this task are `class`, `class method`, and `return value`
