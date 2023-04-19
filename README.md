# Back End for Budget App:

It is assumed your versions are the same as what's used, and that you have VSCode installed.

npm 9.4.0
node 18.9.0
(and other dependencies I may not know to specify.)

Create an Express project in Mac terminal with
```
mkdir <name of your choice>
cd <name of your choice>
npm init -y
npm i express dotenv nodemon cors
touch .env .gitignore
```

Overwrite existing files if any with repository files.

In .env, enter

```
PORT=3001
```

(or other port of your choice.)

In package.json, leave most as-is, but overwrite "scripts" as follows.
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },  
```
If you wish to maintain your own repository, in .gitignore,
```
node_modules
.env
.DS_Store
``` 

  Save all changes.  In terminal, open VSCode by entering
  ```
  code .
  ```
  , or open VSCode in the directory of the project.
Open VSCode terminal; in that terminal type
  ```
  npm start
  ```
The terminal must remain open for the back end to function.  Closing it will shut down the back end.
