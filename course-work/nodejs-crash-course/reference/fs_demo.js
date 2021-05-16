const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, 'test'), {}, err => {
  if (err) throw err;
  console.log('folder created');
});

// Create and write to file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', err => {
  if (err) throw err;
  console.log('file written');
});

// File append
fs.appendFile(
  path.join(__dirname, 'test', 'hello.txt'),
  'i love nodejs',
  err => {
    if (err) throw err;
    console.log('file appended');
  }
);

// Read file
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// rename file
fs.rename(
  path.join(__dirname, 'test', 'hello.txt'),
  path.join(__dirname, 'test', 'helloworld.txt'),
  err => {
    if (err) throw err;
    console.log('file renamed');
  }
);
