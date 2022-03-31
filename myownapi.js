let familys = [{
    fatherName: "Twiringiyimana",
    MotherName:"hesi",
    childrenNumber:4
},
{
    fatherName: "placide",
    MotherName:"cos",
    childrenNumber:5
},
{
    fatherName: "Shema",
    MotherName:"naestro",
    childrenNumber:-6
},
{
    fatherName: "Yves",
    MotherName:"maestro",
    childrenNumber:8
}]

let childrenAverage = familys =>{
    
    let average = (familyNumber, childrenNumber) =>{
         return Math.round(childrenNumber/familyNumber);
    }
    console.log("calculation of average is about starting")
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            
            let familyNumber =0, childrensNumber = 0;
            
            familys.forEach(family => {
                if (family.fatherName === 'Yves') {
                    reject("Yves is not an allowed dad in 2022.")
                }
                if (family.childrenNumber < 0) {
                   return;
                }
                else{
                 
                    childrensNumber += family.childrenNumber;
                    family.childrenNumber++;
                    familyNumber++;
                }

            }); 
            resolve(`The average of Children Number is ${average(familyNumber,childrensNumber)}`);

        }, 1000);
    })

}

childrenAverage(familys)
.then(message => console.log(message))
.catch(error => console.log(error))