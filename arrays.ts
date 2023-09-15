//Arrays
//exciplicit type 

let array1: number[] = [5, 6, 7,];//correct syntax
console.log(array1[1]);//correct syntax
 console.log(array1);
let array2: Array<number> = [1, 2, 3,];//alternative correct syntax
let array3 : number[] = [];//correct syntax to define an empty array

//let array4: number[] = new number[2];//error

let array5: Array<string> = [];
array5.push("Alhamdulillah");//dynamically adding
//array5.pop();
array5.shift();
console.log(array5);
//pop(),shift(), these methods not have a any arguments

let dishes: string[] = ["pizza","Burger","shami kabab","malai boti"];
//dishes = ["zingers"];
//dishes.push("fries");//to add elements in last of an array 
//dishes.pop();//to remove elements in last of an array
//dishes.shift();//to remove elements in start if an array
dishes.unshift("roll");//to add elements in start of ab array
console.log(dishes);
//let prices = [750,200,120,160]

//jese hm simply variable ko same type mn diff value dety hn 
let y = "d";
y="w";
console.log(y);
