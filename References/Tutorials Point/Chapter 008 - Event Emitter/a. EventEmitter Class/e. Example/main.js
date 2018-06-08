// Import events module: create instance of events into (events)
const events = require('events');

// Create an eventEmitter object through eventEmitter Class (eventEmitter)
const eventEmitter = new events.EventEmitter();

// Listener #1
const listener_1 = function listener_1() {
	console.log('listener_1 executed.');
}

// Listener #2
const listener_2 = function listener_2() {
	console.log('listener_2 executed.');
}

// Bind connection event with the listener_1 function
eventEmitter.addListener('connection', listener_1);
// Bind connection event with the listener_2 function
eventEmitter.on('connection', listener_2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event.");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listener_1 function
eventEmitter.removeListener('connection', listener_1);
console.log("Listener_1 will not listen now.");

// Fire the connection event
eventEmitter.emit("connection");

eventListeners = require("events"). EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListeners + " Listener(s) listening to connection event");

// End program
console.log("Program Ended.");
