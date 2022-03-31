function inplaceArray(p){
    let myRev=[];
    for(let i=p.length-1;i>=0;i--){
        myRev.push(p[i]);
    }


return myRev;
}

console.log(inplaceArray([1,2,3,4,5,6]));