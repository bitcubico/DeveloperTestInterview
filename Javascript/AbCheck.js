/**
AB Check
Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a 
and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result 
in true because there is exactly three characters between a and b). Otherwise return the string false.
*/

let Indices = [];

function ABCheck(data) { 
  let response = false;
  FillIndices(data)

  for(let i = 0; i < Indices.length; i++) {
    const bIndex = Indices[i] + 4;
    if(bIndex < data.length && data[bIndex] >= 0) {
      response = true;
      break;
    }
  }

  return response;
}

function FillIndices(data) {
  for (let i = 0; i < data.length; i++) {
    if(data[i] === 'a')
      Indices.push(i);
  }
}
   
// keep this function call here 
console.log(ABCheck(readline()));