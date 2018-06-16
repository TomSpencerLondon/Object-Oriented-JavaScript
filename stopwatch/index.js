// Stop Watch object 
// Constant sw = new StopWatch();
// duration - property
// reset, start, stop - methods 

// duration = 0 to start 
// start once (error if started a second time)
// stop (error if twice in a row)
// stopwatch.duration = 19 seconds
// // reset to go back to zero seconds 


function StopWatch(){
  let startTime, endTime, running, duration = 0;

  this.start = function(){
    if(running)
      throw new Error('Stop Watch has already started');

    running = true;

    startTime = new Date();

  };
  this.stop = function(){

    if(!running)
      throw new Error('Stop Watch has already stopped'); 

    running = false; 

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime())/ 1000;
    duration += seconds
  };

  this.reset = function(){
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function(){ return duration; }
  })

}
