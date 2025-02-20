//Create an array of numbers and find the sum using the reduce method.
let arr=[1,2,3,4,5,6,7,8,9,10]
const add=()=>{
let sum=0
arr.map((i)=>{
sum+=i
})
return sum;
}
console.log(`sum of numbers in array is : ${arr.reduce(add)}`);

//Write a function to filter even numbers from an array.
console.log(`The given array is : ${arr}`);
let even=arr.filter((i)=>{
    return i%2==0;

})
console.log(`The numbers which are even are :${even}`);

//Could you create an object representing a book and display its properties?
 let book={
    name:"java",
    price:20,
    category:"technology"
 }
 console.log(book)
 console.log(`Type of object is : ${typeof(book)}`);

 //Add methods to an object to perform specific tasks.
 let books={
    name:"java",
    price:20,
    category:"technology",
    BuyCheck: function() {
        return this.name + " " + this.price + " "+this.category;
      }
 }
 console.log(books.BuyCheck())
 
 
