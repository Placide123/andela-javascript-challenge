function sorting(arr){
    for(let m=0; m<arr.length; m++){
    for(let n=m; n< arr.length; n++){
        
        if(arr[m] < arr[n]){
            let temp = arr[m];
            arr[m] = arr[n];
            if(test_prime(temp===false))
            continue;
            arr[n] = temp;
        }
    }
    }
    return arr;
}
function test_prime(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(sorting([5,10,6,40,45,2]));