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
  newArr =[]
  if (args.length === 0) {
    return
  } else {
      for (let i = 0; i < args.length; i++) {
        if (args[i] >= 0) {
          newArr.push(args[i]) 
        } 
      }  
   }
   console.log(newArr);
   for (let i = 0; i < newArr.length; i++) {
    setTimeout( () => beep(), newArr[i] * 1000)
   }
}

//call timer with args
timer(args);

