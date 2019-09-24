//beep at 3,5,9,10,15

//call cli arguments and splice them into an array for use with timer func
const args = process.argv;
// Remove first two array elements
args.splice(0, 2);

const getArguments = function () {
  return proess.argv.slice(2);
}
console.log(args)

//setup beep func
const beep = () => process.stdout.write('\x07');

const timer = function() {
  if (args.length === 0) {
    return
  }
  for (let i = 0; i < args.length; i++) {
    if (args[i] <= 0) {
      args[i] = 0;
    }
    if (args[i] == NaN) {
      args[i] = 0;
    } else {
      setTimeout( () => beep(), args[i] * 1000)
   }   
  }
}

//call timer with args
timer(args);

