setStudentAgeApi = (student, age) => {
 
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if(age < 0)
                reject ("Bad Age");
         else
                  resolve(student);
        },
            500);
  
    });
 }

 let student = {student: "Twiringiyimana"};
setStudentAgeApi(student, -5)
.then(message => console.log(message))
.catch(err => console.log(err))