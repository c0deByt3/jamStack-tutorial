// import 'dotenv/config';
// import express from 'express';

import {dotEnv} from '../node_modules/dotenv/config.js';

//  Good vibe options

const vibes = [
    "...and you are awesome!",
    "...have a wonderful day!",
    "...and you've got this!",
    '...and so is this puppy!'
];

// Select a random vibe

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// Display random vibe in browser

document.querySelector(".vibe").append(vibe);

//  Display puppy picture if puppy vibe

if (vibe.includes('puppy')) {
    var changeElem = document.getElementsByClassName('love');
    changeElem[0].innerHTML = '<img alt="puppy sitting" height="300" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/French_bulldog_puppy_fawn.jpg">';
};

var apiKey = process.env.API_KEY;

console.log(apiKey);

// API data display (Access JSON Data) - inrenal JSON file

// let news = fetch('./info/news.json')
// .then(response => response.json())
// .then(data => console.log(data));

// API data from remote source

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=au&' +
//           'apiKey=e9627a1ddb32469e8294a6a16b01a958';

var url = `https://api.thenewsapi.com/v1/news/top?locale=au&language=en&api_token=${process.env.API_KEY}`;

var req = new Request(url);

// Request info

var dataReq = fetch(req)
    .then(function(response) {
        return response.json();
    });

// Handle info once returned

var newsTitle = document.getElementById('news').getElementsByTagName('a');
var newsDesc = document.getElementById('news').getElementsByClassName('desc');

var jsonData = dataReq.then(function(result) {
    for (let i in result.data) {
        let newsStory = result.data[Math.floor(Math.random() * Math.floor(result.data.length))];
        console.log(newsStory);
        newsTitle[0].innerHTML = newsStory.title;
        newsTitle[0].setAttribute("href", newsStory.url);
        newsTitle[0].setAttribute("target", "_blank");
        newsDesc[0].innerHTML = newsStory.description;
    }
});
