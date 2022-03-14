import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(savePlayerCurrentTime, 1000));

function savePlayerCurrentTime(e) {
    if (e.seconds === e.duration) {
        localStorage.removeItem("videoplayer-current-time");
        return;
    }
    localStorage.setItem("videoplayer-current-time", e.seconds);
};

let playerCurrentTime = localStorage.getItem("videoplayer-current-time")

player.setCurrentTime(playerCurrentTime);