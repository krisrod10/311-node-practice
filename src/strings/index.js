const split = (str, delim) => {
  // write code for strings.split
  for(let i = 0; i<str.length; i++){
    let words = delim.str.split('');
    console.log(words);
  }
}


const pairs = (str) => {
  // write code for strings.pairs
  for(let i = 0; i<str.length; i++){
    let newpairs = str.fromEntries();
    console.log(newpairs);
  }
}

const reverse = (str) => {
  // write code for strings.reverse

for(let i = 0; i<str.length; i++){
  let reversed = str.reverse();
  console.log(reversed);
}
}

module.exports = {
  split,
  pairs,
  reverse
}