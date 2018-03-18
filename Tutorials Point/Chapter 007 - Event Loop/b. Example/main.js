// Import events module as an instance (events)
const events = require('events');

// Create on eventEmitter object
const eventEmitter = new events.EventEmitter();

// Create event handler function
const connectHandler = function connected() {
	console.log('connection successful.');			// Displayed 1st
	
	// Fire the data_received event
	eventEmitter.emit('data_received');					// Fire 2

}

// Bind connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', () => {			
	console.log('data received successfully.');	// Displayed 2nd
});

// Fire the connection event
eventEmitter.emit('connection');							// Fire 1			

console.log("Program Ended.");								// Fire 3 - Displayed 3rd

