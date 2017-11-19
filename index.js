'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Beef';

var unirest = require('unirest');

var theEvent;
var theContext;

var funny_sayings = [
    "I dare you to say beef one more time",
    "Beef, shmeef",
    "Beefy Eevee",
    "Duncan's beef",
    "Kibble and beef",
    "What kind of beef?",
    "BEEEEF",
    "beefy dudes",
    "beef stroganoff",
    "Say beef again please",
    "Beef beef beef beef beef beef beef beef beef",
    "Beefy baby",
    "Christmas Beef",
    "Beef love",
    "Two beefs walk into a bar, one says beef the other says beef",
    "Beef some more",
    "Beef me baby, one more time",
    "Beef it up",
    "Beefy",
    "I love to beef you",
    "Let me beef that",
    "Beef me up Scotty",
    "Toilet beef",
    "Pig beef",
    "Eevee then evolved into beef",
    "Dunky, Eevee and Beefy",
    "Eevee likes beef",
    "Why did one beef cross the beef?"
];

var jokeIntro = ". And now for the joke of the day. ";

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    theEvent = event;
    theContext = context;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', "Beef", SKILL_NAME)
    },
    'Beef': function () {
            var joke = funny_sayings[Math.floor(Math.random() * funny_sayings.length)];
                var reply = joke;
                this.emit(':tell',reply, SKILL_NAME);
    },
    'HelpIntent': function () {
        var speechOutput = "I am here to say stuff about beef. I dare you to say beef.";
        var reprompt = "Beef???";
        this.emit(':ask', speechOutput, reprompt);
    },

    'Unhandled': function () {
        this.emit(':tell', 'Bye, beef!!');
    }
};