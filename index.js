const userOne = {
  firstName: "Bog",
  age: 27,
  admin: false
};

// first eg
userOne.age = 30;

console.log(userOne); 

// second eg
const sports = ["tennis", "golf", "volleyball"];

console.log(sports);

sports.push("test");
console.log(sports);

console.log(sports.indexOf("test"));  
console.log(sports.indexOf("superman")); 

//eg 3
const student = {
  name: "Marie",
  age: 20,
  courses: []
};

student.age = 21;
student.grade = "A";

student.courses.push("Math", "Physics", "Chemistry");

const physicsIndex = student.courses.indexOf("Physics");

const firstTwoCourses = student.courses.slice(0, 2);

console.log(student);           
console.log(physicsIndex);      
console.log(firstTwoCourses);  
//ex 4
class User {
  constructor(firstName, lastName, age, email, admin = false) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
      this.admin = admin;
  }

  getUserInfo() {
      return `Full Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
  }

  setAge(newAge) {
      this.age = newAge;
  }
}

const user = new User("Alice", "Smith", 25, "alice.smith@example.com");

console.log(user.getUserInfo()); 
user.setAge(26);
console.log(user.getUserInfo()); 
