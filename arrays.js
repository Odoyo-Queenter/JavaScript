// let b = ["mango","Apple"];


// let c = new Array ("Banana", "Kiwi")

// // console.log(c[1]);

// b.push("Orange")
// b.pop()
// b.unshift("Grapes")
// b.shift()

// console.log(b)
// // console.log(b[1]);

// function people(){

// }
// function students(a,_callback){
//     console.log(a)
// }
// students  (26,people())

// c.splice


// OBJECTS

// var people = {
//     name:20,
//     country:'Kenya'
// };
// console.log(people["country"]);
// console.log(people.country);

// var person = new Object(people);
// console.log(person.name)

// person["age"] = 35;
// console.log(person);

// for([key,values] of object.entries(person)){
//     console.log('${key}:${values}');
// }

// // object.freeze(person)
// person['school'] = "Akirachix"
// console.log(person);
// object.seal(person) ;  
// person.name = "Anita"

// person.assign(person,{school:"Akirachix"})
// console.log(person)

// var students = {
//     name:"Anita",
//     country:"Kenya",
//     hobby:function(){
//         console.log('my name is ${this.name} and my hobby is cooking');
//         return "my favorite hobby is baking"
//     }
// }
// console.log(students.country);
// console.log(students.hobby());

var students = {
    name:"Anita",
    country:"Kenya",
    hobby:function(){
        console.log('my name is ${this.name} and my hobby is cooking');
        return "my favorite hobby is baking"
    },
    friends:{
    name:"joy",
    age:23,
    hobby:{
        first:"cooking",
        play:function({
            return "I love Akirachix"
        })
        
    }
    
    }
}
console.log(students.country);
console.log(students.hobby());
console.log(students.friends.name)
console.log(students.friends.name.hobby.first)
