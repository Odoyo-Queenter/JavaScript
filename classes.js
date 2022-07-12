class Student{
    constractor(name, age, school){
        this.name= name
        this.age= age
        this.school = school
        this.hobby=  function(){
            return "I love cooking"
        }

    }
}
// Student.prototype.country= "Kenya"
Student.prototype.country = function(){
    return "I love my country"
}


var firstStudent = new Students ("Cudra",19,"Akirachix")
console.log(firstStudent.age);
console.log(firstStudent.country())


function Students(name,age,school){
    this.name= name
    this.age= age
    this.school= school
    this.hobby= function(){
        return "I love cooking"
    }
}
var secondStudents

var names = ["chiri","zipporah","shamim"]
var [conslate,...others]= names
console.log(conslate);
console.log(others);

let a = [{name:"Anita",age:20},
{name:"Jose", age:10},
{name:"Chiri",age:30}]

let c = a.map(x=>{
    return x.age
})
console.log(c);

let f = a.filter(b=>{
    return b.age<30
})
console.log(f);

let d = a.find(e=>{
    return e.age<=30 
})
console.log(d)