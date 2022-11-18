# Test excercise

## Prerequisites
In order to run this suite it is necessary to hace node and npm on your computer installed

## How to run the Cypress suite
>NOTE:
    This proyect aws built on windows, in order for the command to work, 
    they need to be inputted on a CMD, powershell will not work.

1.- (Only if no node_modules is present) install all dependencies by running `npm install`.

2.- to run the suite with the cypress wizard, run this command: `npm run cy:open`.
    2.1.- to run the suite headless run the command: `npm run cy:run`.

3.-The cypress suite will appear as a wizard, choose the test to run.

## NOTES
>No git ignored was added to this projecct, but the `node_modules` and any credentials should go inside a git ignore file.