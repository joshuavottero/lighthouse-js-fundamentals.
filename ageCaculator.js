function ageCalculator(name, birthDay, currentDay){
  let age = currentDay - birthDay;
  return name + " is " + age + " years old.";
}
console.log(ageCalculator("joshua", 1998, 2021));
// "Suzie is 32 years old."