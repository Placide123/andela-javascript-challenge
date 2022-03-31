let setStudentAgeApi = (student, age) => {  //async code below
    console.log("1. Starting ..")
    setTimeout(() => { student.age = age; console.log("2. Api Processing")}, 500);
    console.log("3. Done ..")
  
 }
 
 let student = {name: "Eric"};

 setStudentAgeApi(student, -1);
 console.log(student)
       

