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
/*
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);
*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

// template literal을 쓸때 사용하는 것은 `` 이 기호이다.
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`hi`);
console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
*/

/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`${century} 세기`);
*/
/*
//Coding Challenge #2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIJohn > BMIMark) {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} else {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
*/

/*
//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log("10" - "4" - "3" - 2 + "5");
*/

/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas")); //빈 string이 아닌 string은 모두 true값이다.
console.log(Boolean({})); //empty object 빈 객체
console.log(Boolean(""));

// const money = 0; // 0은 number이기만 if, else statement condition의 logical context(논리적 문맥)에서는 이 괄호 ()안에 있으면 javascript에서는 임의의 값을 boolean으로 강제 변환된다.
// 0은 falsy값이다.
const money = 100; // truthy의 경우
if (money) {
  // --> false일때
  console.log("true: Don't spend it all ;)"); // true값을 띄워주고
} else {
  console.log("false: You should get a job!"); // flase값을 띄워준다.
}

let height = 0; //값을 정의하지 않은 경우는 falsy = false (5 falsy values: 0, '', undefined, null, NaN)
if (height) {
  console.log("YAY! Height is defined"); // 높이가 정의되었다.
} else {
  console.log("Height is UNDEFINED"); // 높이가 정의되지않았다.
}
*/

const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite); //입력한 값은 string이다.
console.log(typeof favourite);

if (favourite === 23) {
  // 23 === 23
  // --> ===연산자를 사용하면 타입을 변환시킬 수 없기 때문에 false로 값이 나오지 않는다.
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");
