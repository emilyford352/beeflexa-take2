/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            BEEF: [
                'I dare you to say beef one more time',
                'Beef, shmeef',
                'Beefy Eevee',
                'Duncan's beef',
                'Kibble and beef',
                'What kind of beef?',
                'BEEEEF',
                'beefy dudes',
                'beef stroganoff',
                'Say beef again please',
                'Beef beef beef beef beef beef beef beef beef',
                'Beefy baby',
                'Christmas Beef',
                'Beef love',
                'Two beefs walk into a bar, one says beef the other says beef',
                'Beef some more',
                'Beef me baby, one more time',
                'Beef it up',
                'Beefy',
                'I love to beef you',
                'Let me beef that',
                'Beef me up Scotty',
                'Toilet beef',
                'Pig beef',
                'Eevee then evolved into beef',
                'Dunky, Eevee and Beefy',
                'Eevee likes beef',
                'Why did one beef cross the beef?'
            ],
            SKILL_NAME: 'Space Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'Just say beef....',
            HELP_REPROMPT: 'What can I beef you with?',
            STOP_MESSAGE: 'Bye, beefy!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('Beef');
    },
    'GetNewFactIntent': function () {
        this.emit('Beef');
    },
    'Beef': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('BEEF');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        this.emit(':tell', randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};