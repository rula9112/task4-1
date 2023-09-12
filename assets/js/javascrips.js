/********   A   ******** */
var myArrey = [4 , 7 ,7,6 , 7 ,9 ,10 , 22 , 83 , 45];
var sum = 0;

myArrey.forEach(i => {
    if( i % 2 == 0){
        sum += i
    }
});
document.writeln(sum);
console.log(sum);
var sum = 0;


for (i=0 ; i < myArrey.length ; i++){
  
    if(i < 5 ){
        sum += myArrey[i];  
    }
 
}
console.log(sum);
document.write(sum);


/******** end  A   ******** */
/********   B   ******** */
const userInfo  = {name:"Rula" , number:"0955555555" , age:23 , email:"user.2000@gmail.com"}
console.log(userInfo);
console.log(userInfo.name , userInfo.number , userInfo.age , userInfo.email);


