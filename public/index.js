// Stop Watch object 
// Constant sw = new StopWatch();
// duration - property
// reset, start, stop - methods 

// duration = 0 to start 
// start once (error if started a second time)
// stop (error if twice in a row)
// stopwatch.duration = 19 seconds
// // reset to go back to zero seconds 

// //Constructor Function
// function Circle(radius){
// this.radius = radius; 
//   this.draw = function(){
//   console.log("Draw!!")
//   };
// }

// const another = new Circle(5);
// another.draw()



// function Watch(){
//   this.duration = 0; 
//   // let timing = false;

//   // this.start = function(){
//   //   timing = true;
//   //   if(timing == true){
//   //     console.log("hello")
//   //     // timer();
//   //   }
//   //   console.log(this.duration);
//   // }
// }
//   const timer = new Watch(); 


  // this.stop = function(){

  // }

  // let timer = function(){
  //   setTimeout(
  //       function(){
  //          this.duration +=1;
  //       }, 1000);
  // }
  
// }




// Getters and Setters 

// function Circle(radius){
//   this.radius = radius;

//   let defaultLocation = {x: 0, y: 0};

//   this.getDefaultLocation = function(){
//     return defaultLocation;
//   }

//   this.draw = function(){
//     console.log("draw");
//   };

//   Object.defineProperty(this, 'defaultLocation', {
//     get: function(){
//       return defaultLocation;
//     }, 
//     set: function(value){
//       if(!value.x || value.y)
//         throw new Error('Invalid Location');

//       defaultLocation = value;
//     }
//   })
// }

// const circle = new Circle(10);

// circle.draw();



// // Back to the Constructor Function

// function Circle(radius){

// this.radius = radius; 

// let defaultLocation = {x: 0, y: 0};

// let computeOptimumLocation = function(){
//   console.log("This is computeOptimumLocation")
// }

// this.draw = function(){
//     console.log("Draw!!")
//     computeOptimumLocation();
//   };
// }

// const circle = new Circle(10);

// circle.location = { x: 1, y: 2};

// for (let key in circle){
//   if(typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }

// if('radius' in circle)
// console.log('Circle has a radius.');


// // // Value versus reference types

// // // let x = {value: 10}; 
// // // let y = x; 

// // // x.value = 20;

// // let number = {value: 10}; 

// // function increase(number){
// //   number.value ++;
// // }

// // increase(number);
// // console.log(number.value);

// // // // Constructor Function
// // function Circle(radius){
// //   this.radius = radius; 
// //   this.draw = function(){
// //     console.log("Draw!!")
// //   };
// // }

// // const another = new Circle(5);
// // another.draw()


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