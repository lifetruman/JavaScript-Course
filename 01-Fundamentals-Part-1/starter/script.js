/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);


let firstName = "Matilda";
let first = "jonas";

let firstNamePerson;
let first_name_person;

console.log(firstName);
console.log(firstName);
console.log(firstName);
// Variable name conventions (변수 이름 규칙)
let jonas_matilda = "JM";
let $new = 27;
let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let country = "South of Korea";
let continent = "Asia";
let population = 51780000;

console.log(country);
console.log(continent);
console.log(population);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); // boolean data type --> string data type (dynamic typing)

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

/*
// challenge
// let population = 51780000;

let language;

language = "korea";
const country = "South of Korea";
const continent = "Asia";
const isIsland = false;

let population = 51;
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  "million people speak" +
  language;

console.log(description);
*/

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
/*
let age = 30;
age = 31; // let

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Schomedtmann"; //이렇게 선언해도 console에는 정상적으로 뜬다. 이유는 global object에 자동적으로 javascript property(속성)을 생성하기 때문이다. 그래도 꼭 변수를 선연해줘야한다.
console.log(lastName);
*/

/*
// Math operators (산술 연산자)
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 은 2의 3승이다. 2 * 2 * 2 = 8

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operator (할당연산자)
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // 46 > 19 ...true
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5); //right to left 였다면 -라는 결과값이 나왔겠지만 left to right이기때문에 우리가 아는 값이 나온다.

let x, y;
x = y = 25 - 10 - 5; // 연산자의 우선순위대로라면 우선순위가 높은 25 - 10 - 5 = 10 -> 10의 값이 = 연산자를 통해서 오측에서 좌측으로 결합되는데 그럼 y = 10 -> 10의 값도 = 연산자를 통해서 x로 결합하게 된다. x = 10
console.log(x, y);

//평균 나이값 구하기
const averageAgeTest = ageJonas + ageSarah / 2; //이렇게 해버리면 연산자 우선순위에 의해서 나누기가 더하기보다 우선순위이기 때문에 ageSarah를 먼저 2 나누고 ageJonas를 더한 value(값)이 나온다. --> 19/2 = 9.5 --> 46 + 9.5 = 55.5
const averageAge = (ageJonas + ageSarah) / 2; // ()의 우선순위가 제일 높기때문에 먼저 계산 후 2를 나눈다.
console.log(ageJonas, ageSarah);
console.log(averageAgeTest);
console.log(averageAge);
*/

//Coding Challenge #1
/*
Mark and Jhon are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implements both versions)
3. Create a boolean variable 'markHigherBMI'
containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.

*/
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

// const BMI = weight / (height * height);

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);
