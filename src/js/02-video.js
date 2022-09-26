import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import metodStorage from './localstorage';
const iFrameRef = document.querySelector('iframe');
const VIDEO_TIME_KEY = 'videoplayer-current-time';
const player = new Player(iFrameRef);

player.setCurrentTime(metodStorage.load(VIDEO_TIME_KEY, 0));

player.on(
  'timeupdate',
  throttle(function () {
    player.getCurrentTime().then(function (seconds) {
      metodStorage.save(VIDEO_TIME_KEY, seconds);
    });
  }, 1000)
);
