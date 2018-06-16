// Value versus reference types

// let x = {value: 10}; 
// let y = x; 

// x.value = 20;

let number = {value: 10}; 

function increase(number){
  number.value ++;
}

increase(number);
console.log(number.value);

// // Constructor Function
// function Circle(radius){
//   this.radius = radius; 
//   this.draw = function(){
//     console.log("Draw!!")
//   };
// }

// const another = new Circle(5);
// another.draw()


// Factory Function

// function createCircle(radius){
//   return{
//     radius, 
//     draw: function(){
//       console.log("draw!!")
//     }
//   };
// }

// const circle = createCircle(5);
// circle.draw()



// Object Literal
// const circle = {
//   radius: 1, 
//   location: {
//     x: 1, 
//     y:1
//   }, 
//   draw: function(){
//     console.log("draw");
//   }
// }; 

// circle.draw();