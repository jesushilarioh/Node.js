console.log("Starting app");    // Print 1st (in Call Stack)


setTimeout(() => { // print 4th (from Code Api -> Callback Queue -> Event Loop)
    console.log("Inside of callback"); 
}, 2000);

setTimeout(() => { // print 3rd (from Code Api -> Callback Queue -> Event Loop)
    console.log("Second setTimeout");   
}, 0);

console.log("Finishing Up");    // print 2nd (in Call Stack) [main function ended]