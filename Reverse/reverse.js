//reversing an array without usying built-in methods

const reverseArray = array => {
  let newArr = [];
  for(i = array.length-1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];