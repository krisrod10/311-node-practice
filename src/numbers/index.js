const isEven = (num) => {
  // write code for numbers.isEven
  
  if(num % 2 == 0) {
    //console.log("The number is even.")
    return true
}else {
  return false
  //console.log("The number is odd.");
}
}
isEven();

const sum = (arr) => {
  // write code for numbers.sum
let array = [];
for(let i=o; i<array.length; i++){
  sum+array[i];
  console.log(sum);
}
}
sum();
const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
 let sum = arr.length.pop();
  for(var i=j; i<arr.length; i++){
    if(target < arr[i]) 
         return;
    sum.push(arr[i]);
   arr.pop(); 
   return sum
}
}
comboSum();

module.exports = {
  isEven,
  sum,
  comboSum
}
