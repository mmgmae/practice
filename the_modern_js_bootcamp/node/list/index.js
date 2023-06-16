#!/usr/bin/env node

// require the file system module from the node library
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');



// NOTE: process doesn't need to be required

const { lstat } = fs.promises; 

//function from the documentation
fs.readdir(process.cwd(), async (err, filenames) => {
    // EITHER err == an error object, which means something went wrong
    // OR err === null, which means everything is OK

    if (err) {
        //if err is defined, run this error handling code
        console.log(err);
    }

    const statPromises = filenames.map(filename => {
        return lstat(filename);
    });

    const allStats = await Promise.all(statPromises);

    for (let stats of allStats) {
        const index = allStats.indexOf(stats);

        if (stats.isFile()) {
            console.log(filenames[index]);
        } else {
            console.log(chalk.bold(filenames[index]));
        }
    }
});

// run with > nls   in terminal

// running a node program as an executable
    // 1. Create package.json wile with "bin" section
        // in the project directory, run 
        // > npm init -y  //generates a new package.json file inside of the project directory
        // IMPORTANT 
            // scripts section holds automated mini programs
            // dependencies section records dependencies that our project has, so when we share the program, someone else can automatically install the dependencies
        // can set up a configuration section that lets us run a command in command line and trigger code in our project
            // using "bin" object to set the command keyword

    // 2. Change index.js file permissions
        // run command  > chmod +x index.js  in the project dir
        // gives us permission to run that file as if it were an executable

    // 3. Add comment to index.js file to allow it to be treated like an executable
        // #!/usr/bin/env node
        // this tells our computer that we want to use node to execute this file, isntead of executing it directly

    // 4. link our project
        // in project directory run  > npm link
        // makes our project globally available


// NOTE: this project doesn't work because I could not fix permission problems...... > npm link   did not work. Cannot run as  > nls
// NOTE: also could not get chalk to require..... said it wanted a dynamic import(), but then when I changed it it said I could not use import statement outside a module
// :(
