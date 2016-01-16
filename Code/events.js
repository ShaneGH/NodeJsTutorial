var events = require("events");

var eventEmitter = new events.EventEmitter();

eventEmitter.on("somethingHappened", function (){
  // do something
});

emitter.emit("somethingHappened");

// functions
emitter.addListener("event", function(){});
emitter.on("event", function(){});  // same thing
emitter.once("event", function (){});
emitter.removeListener("event", function(){});  // removes first listener only
emitter.removeAllListeners("event");  // "event" is optional
emitter.setMaxListeners(n); // a warning is printed by defaulif there are more than 10 listeners. Change number to whatever
emitter.listeners("event"); // array of listeners
emitter.emit("event", {},{},{},{}); // other args are event args

// static functions
events.EventEmitter.listenerCount(emitter, "event");

// default evnts: the emitter has 2 events which it will trigger
emitter.on("newListener", function(){});  // same thing
emitter.on("removeListener", function(){});  // same thing
