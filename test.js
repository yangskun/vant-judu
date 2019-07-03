function Student(name, age) {
  this.name = name
  this.age = age
}

Student.prototype.say = function() {
  console.log(this.name + ',加油！')
}

let stu1 = new Student('Tom', 81)
let stu2 = new Student('AMD', 18)

console.log(stu1.say())
console.log(stu2.say())

let s1 = Symbol()
console.log(typeof s1)
