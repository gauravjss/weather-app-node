console.log('Starting App');

// This is a callback registered to be fired after 2 seconds, non blocking rest of the program.
setTimeout(()=>{
    console.log('Inside Callback');
},2000);

// This timeout function would be executed after Finishing Up
setTimeout(()=>{
    console.log('Zero Timeout Callback');
},0);

console.log('Finishing Up');