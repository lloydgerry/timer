const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

//setup beep func
const beep = () => process.stdout.write('\x07');

// on any input from stdin (standard input), output a "." to stdout
const action = process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  };
  if (key === '\u0062') {
    console.log("beep");
    beep();
  };
  if ((key === '\u0030') || (key === '\u0031') || (key === '\u0032') || (key === '\u0033') || (key === '\u0034') || (key === '\u0035') || (key === '\u0036') || (key === '\u0037') || (key === '\u0038') || (key === '\u0039'))  {
    console.log(`setting timer for ${key} seconds`);
    setTimeout( () => beep(), [key] * 1000);
  };

});

console.log('after callback');

// const timer = function() {
//    for (let i = 0; i < .length; i++) {
//     setTimeout( () => beep(), [i] * 1000)
//    }
// }