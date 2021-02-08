let Teacher = {
  name: "hira hasan",
  age: 29,
  printInfo: function (...params) {
    console.log(this.name);
    console.log(arguments);
    console.log(params);
  },
};

Teacher.printInfo();

let Student = {
  name: "Samsu Ahmed",
  age: 30,
};

console.log("From apply.........");
Teacher.printInfo.apply(Student, [
  "Explicit param as an array  ",
  "Apply vs call in different in argument passing style",
]);

console.log("From call...........");
Teacher.printInfo.call(Student, "ah ha re", "marattok");

console.log("Calling from bind.....");
let bindAction = Teacher.printInfo.bind(Student, "ah ha re", "marattok");
bindAction();
