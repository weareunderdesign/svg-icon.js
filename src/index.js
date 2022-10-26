#!/usr/bin/env node

const { exec } = require("child_process");

// install @rainbow/svg-icon.js package as dependency
exec("npm install --save @rainbowapp/svg-icon.js", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`${stderr}`);
    return;
  }
  console.log(`${stdout}`);

  // install degit package as dev-dependency
  exec("npm install -g degit", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`${stderr}`);
      return;
    }
    console.log(`${stdout}`);

    // download the template structure of @rainbow/svg-icon.js
    exec("degit rnbwdev/svg-icon-template --force", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`${stderr}`);
        return;
      }
      console.log(`${stdout}`);
    });
  });
});

