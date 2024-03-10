//Stack (Premitive)=>{int,char,string,boolean,bigint,symbol}, Heap(Non-primitive) =>{Array,objects,}
//In Stack Memory => Jo be variable declare kya ha is ki copy milti ha.You Found copy of original value.
//In Heap Memory => You found Refernce of original value.Jo be change kara ga wo original value ma be change ho ga.

//Stack Example
 let myNameIs = "CodeRoar-92";
 let anotherNameIs = myNameIs;
  anotherNameIs ="CodeLove-92"
//Key Notes is that In Stack memory only copy the original value then change the original value for second time but the original for the first time is remain same. 
 //console.log(anotherNameIs);
 //console.log(myNameIs)


 //Heap Example
 let userOne ={
    email :"user@123",
    id:12345
 }

let userTwo =userOne;
userTwo.email ="newEmail@gmail.com";
console.log(userOne.email)
console.log(userTwo.email);
//In Heap memory the we deal with refernce of the object when we change the refernce then both values of the objects are changed.
