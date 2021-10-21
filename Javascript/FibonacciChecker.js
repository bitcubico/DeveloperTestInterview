/**
Fibonacci Checker
Have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. 
This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. 
The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.
*/

let serie = [0,1];

function FibonacciChecker(num) { 
  return ExistNumInFibonacciSerie(num, 1) ? 'yes' : 'no';
}

function ExistNumInFibonacciSerie(num, limit) {
  const nextFibo = serie[limit] + serie[limit - 1];
  serie.push(nextFibo);

  if(nextFibo > num)
    return false;
  else {
    if (nextFibo !== num)
      return ExistNumInFibonacciSerie(num, limit + 1);
    
    return true;
  }
}
   
// keep this function call here 
console.log(FibonacciChecker(readline()));