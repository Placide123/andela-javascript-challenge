function palindrome(p){
    let revervedword=p.split('').reverse().join('');
    if(p === revervedword)
    return true;
    else
    return false;

}
console.log(palindrome('omo'))
