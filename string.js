const name ="CodeRoar-92";
const num = 1145 //Don't do this.This is not the best way.
//console.log(name + num + "value" )

//The best way is that given below.
//console.log(`My name is ${name } and number is ${num}`) //This string interpolation

 
//Use The toUpperCase Method and also you can use lower case methode
//console.log(`My name is ${name.toUpperCase()} and number is ${num}`)

//The best way to declear a string 
let myName = new String('CodeRoar-92');
//console.log(myName); 


//Now to access the Key of the string
//console.log(myName[0])

//To acess the prototype
//console.log(myName.__proto__)
//console.log(myName.length)
//console.log(myName.toUpperCase());
//console.log(myName)//Here string is the primitive data type and it is stack memory its original value does not change only value of copy change.But in case of Stack memory the refernce are called and the original value also change.

//which character on the 5th postion.
//console.log(myName.charAt(5));


//For checking of index of chaaracter
//console.log(myName.indexOf('-'));
//console.log(myName.substring(0,3))//In this methode we got the part of string 
//Slice method is also same.
//
console.log(myName.slice(0,10))//But in Slice method you can also give negative values for reverse of string but in substring it is not possible.
//let newNameIs = new String('    Programming makes life interesting        ');
//console.log(newNameIs.trim());
//Trim method neglect the strating and endding white spaces and it is important one
//Replace Method
//console.log(newNameIs.trim());//Without replace method
//console.log(newNameIs.replace('interesting','easy').trim())//Replace Methode and also use trim method


//let url = new String('coderoar92%20@gmail.com')
//console.log(url.replace('%20', '-'))

//Include Methode => Yani ya part mari string ma ha ya nahi
//console.log(newNameIs.includes('Programming'))//it returns boolean value



//+++++++++++++++++++++++ new+++++++++++++++==
const balance = new Number(100);
//console.log(balance.toString().length);
//console.log(balance.toFixed(2))//This method is to commenly used 

const n1 = new Number(123.9855)
//console.log(n1.toPrecision(4)) //Use vey careFully Precision

const hunderds = new Number(10000000000)
//console.log(hunderds.toLocaleString('en-IN')); //OutPut is 10,000,000,000


//++++++++++++++++++  Math   +++++++++++++++++++
// console.log(Math);

// console.log(Math.abs(-4));//Only Changes negative sign
// console.log(Math.abs(4));
// console.log(Math.round(4.87));
// console.log(Math.ceil(4.4));//It contain the high value
// console.log(Math.floor(4.9));//It contain the small value. Use mostly used the round not ceil or floor
// console.log(Math.min(4,3,2,6,4,5,2));//To find the minimum value in the array
// console.log(Math.max(34,23,12,65,90,))//Find the maximum value in the array


// console.log(Math.random());
// console.log(Math.random()*10 +1);

// const min = 10;
// const max =20;
// console.log(Math.floor(Math.random() *(max-min+1) + min )) ;




// console.log((Math.random() * 10) +1);

// const min = new Number(10);
// const max = new  Number(20);
// console.log(Math.floor((Math.random() *(max-min +1) +min))); //Important formula


//++++++++++++++++++ Dates ++++++++++++++++++++
// const myDate = new Date;
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//Now we declare the date

//const myCreatedDate =new Date(2034,2,4);
//console.log(myCreatedDate.toString());

 //++++++++++++++++ To Array +++++++++++++++++
 
//  const arr = [1,3,4,5,6,5]
//  console.log(arr[2])

// const Heros = ["Batman","Superman","IronMan","SpiderMan","Professor","Berlin"]
// console.log(Heros)

const arr1 = new Array(1,2,3,4,5,);
arr1.push(6);
console.log(arr1)//Add something at the end of the array
arr1.pop();//Need no argument.
console.log(arr1)
arr1.unshift(9);
console.log(arr1)//Add something at the start of the array
arr1.shift();
console.log(arr1)//Same like of the pop to remove the something from start.
console.log(arr1.includes(4));//To check the that thing is in my array
console.log(arr1.indexOf(4));//To check the index of anything in the array
const newArray = new Array("Mola Ali","Mola Hussain","Khalid Bin Waleed","Mehmood Gaznivi") 
console.log(newArray.join());//it converts the array into string.
 