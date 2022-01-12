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

// API data display (Access JSON Data) - inrenal JSON file

// let news = fetch('./info/news.json')
// .then(response => response.json())
// .then(data => console.log(data));

// API data from remote source

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=au&' +
          'apiKey=e9627a1ddb32469e8294a6a16b01a958';

var req = new Request(url);

// Request info

var dataReq = fetch(req)
    .then(function(response) {
        return response.json();
    });

// Handle info once returned

var randomNews = document.getElementById('news').getElementsByTagName('a');

var jsonData = dataReq.then(function(result) {
    for (let i in result.articles) {
        let newsStory = result.articles[Math.floor(Math.random() * Math.floor(result.articles.length))];
        console.log(newsStory);
        randomNews[0].innerHTML = newsStory.title;
        randomNews[0].setAttribute("href", newsStory.url);
        randomNews[0].setAttribute("target", "_blank");
    }
})

