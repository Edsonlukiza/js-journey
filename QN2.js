/*Write a program that uses console.log to print all the numbers from 1 to 100*/
let i

for (i=1; i<=100; i++)
{
   
if (i%3===1){
    console.log("Fizz")//For numbers divisible by 3, print "Fizz"//
}else if

(i%5===1){
console.log("Buzz")// for numbers divisible by 5 (and not 3), print "Buzz" instead.//

} else{
    console.log(i ,"\n")
}
}