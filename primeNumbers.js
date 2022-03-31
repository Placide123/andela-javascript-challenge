var oldArray = [5, 9, 63, 29, 45,70,3, 6, 55, 23]
var newArray = [];
function findPrimeNumber(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { 
        return false;
       } 
     }
     return true;
}
for (var i = 0; i < oldArray.length; i++) {
  if (findPrimeNumber(oldArray[i])) {
      newArray.push(oldArray[i])
  }
}

console.log(newArray);