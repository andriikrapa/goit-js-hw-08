import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(savePlayerCurrentTime, 1000));

function savePlayerCurrentTime(e) {
    localStorage.setItem("videoplayer-current-time", e.seconds);
    console.log(e.seconds);
};

let playerCurrentTime = localStorage.getItem("videoplayer-current-time")
console.log(playerCurrentTime);

player.setCurrentTime(playerCurrentTime);

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });