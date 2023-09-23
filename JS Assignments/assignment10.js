//Assignment No 10

//Q1

var st={name:'Muneeb',age:23,stu_Id:456}

var show='Name: '+st.name+'\n'+'Age: '+st.age+'\n'+'Student_Id: '+st.stu_Id;
alert(show);

//Q2

var st={name:'Muneeb',age:15}

if(st.age<20){
    alert('You are eligible for Module A class,')
}
else{
    alert('Not Eligible')
}

//Q3


var studentOne = {
    Student_Name: "Zia Khan",
    Student_ID: "J30052425300",
    Subject_HTML: 80,
    Student_CSS: 90,
    Student_JAVASCRIPT: 90,
    Student_BOOTSTRAP: 70,
    Total_Marks: 400,
};

var studentTwo = {
    Student_Name: "Zia Khan",
    Student_ID: "J30052425300",
    Subject_HTML: 60,
    Student_CSS: 70,
    Student_JAVASCRIPT: 65,
    Student_BOOTSTRAP: 85,
    Total_Marks: 400,
};

var totalMarks1 =
    studentOne.Subject_HTML +
    studentOne.Student_CSS +
    studentOne.Student_JAVASCRIPT +
    studentOne.Student_BOOTSTRAP;

var totalMarks2 =
    studentTwo.Subject_HTML +
    studentTwo.Student_CSS +
    studentTwo.Student_JAVASCRIPT +
    studentTwo.Student_BOOTSTRAP;

var per1=(totalMarks1 / studentOne.Total_Marks)*100
var per2=(totalMarks2 / studentTwo.Total_Marks)*100

    if(per1>per2){
    console.log("Student_One is eligible for a scholarship.");
}
    else{
    console.log("Student_One is not eligible for a scholarship.");
}

//Q4

var arr = [
    { name: 'Asher', age: 22 },
    { name: 'Zubair', age: 20 },
    { name: 'Kashif', age: 23 },
    { name: 'Wasif', age: 17 },
    { name: 'Hanzala', age: 28 }];

arr[2] = { name: 'Siddiq', age: 23 };


arr.push({ name: 'Umair', age: 23 });

arr.shift();


    for (let i = 0; i < arr.length; i++) {
    arr[i].createdAt = new Date();}

console.log(arr);

//Q5

var arr = [
    { name: 'Asher', age: 22 },
    { name: 'Zubair', age: 20 },
    { name: 'Kashif', age: 23 },
    { name: 'Wasif', age: 17 },
    { name: 'Hanzala', age: 28 }];

var filteredNames = [];

for (var i = 0; i < arr.length; i++) {
    var person = arr[i];
    if (person.age >= 18 && person.age <= 28 && person.name.includes('f')) {
    filteredNames.push(person.name);}
}

var resultString = filteredNames;

console.log(resultString);

//Q6

var students = [
    {
        _id: 'std1',
        name: 'Bill Gates',
        age: 30
    },
    {
        _id: 'std2',
        name: 'Steve Jobs',
        age: 30
    },
    {
        _id: 'std3',
        name: 'Suzanne Collins',
        age: 30
    }
];

var courses = [
    {
        name: 'Maths',
        std_id: ['std3', 'std1']
    },
    {
        name: 'Computer Science',
        std_id: ['std3', 'std2']
    },
    {
        name: 'Commerce',
        std_id: ['std1']
    },
];

var result = [];

for(var i=0; i<students.length; i++){
    var student=students[i]
    var studentCourse=[]

for(var j=0; j<courses.length; j++){
    var course=courses[j]
    if(course.std_id.includes(student._id)){
        studentCourse.push(course.name)
    
}
    }
result.push({
        studentName: student.name,
        studentId: student._id,
        courses: studentCourse
    });
}

console.log(result);
