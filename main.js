const vibes = [
    "...and you are awesome!",
    "...have a wonderful day!",
    "...and you've got this!",
    '...and so is this puppy!'
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);

if (vibe.includes('puppy')) {
    var changeElem = document.getElementsByClassName('love');
    changeElem[0].innerHTML = '<img alt="puppy sitting" height="300" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/French_bulldog_puppy_fawn.jpg">';
};

