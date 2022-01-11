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

// API data display (Access JSON Data)

let news = fetch('_data/news.json')
.then(response => response.json())
.then(data => console.log(data));

