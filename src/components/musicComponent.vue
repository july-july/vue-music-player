<template>
  <div class="music-app">
    <div class="player-container">
      <div class="back-player" :style="{backgroundImage:  'url('+ tracks[currentPlay].album.image + ')'}">
      </div>
      <div class="body-player">
        <a href="" class="playlist"><i class="fa fa-bars"></i></a>
        <span class="volume" style="color: white">
            <i class="fa fa-volume-up"></i>
          <input type="range" class="volume-range" v-model="volume" min="0" max="100" step="1"/>
          <i class="fa fa-volume-off" @click="mute"></i>
          </span>
        <p><img :src="tracks[currentPlay].album.image" alt="" class="music-img"
                style="box-shadow: 1px 3px 4px 1px #00000087;"></p>
        <p class="name">{{tracks[currentPlay].name}}</p>
        <p class="artist">{{tracks[currentPlay].artist}}</p>
        <div id="timeline">
          <div class="timing">
            <span id="current-time">
              <span v-if="Math.floor(startTime/60) < 10">0</span>{{Math.floor(startTime/60)}}:<span
              v-if="startTime%60 < 10 ">0</span>{{startTime%60}}</span>
            <span id="total-time">
              <span v-if="Math.floor(tracks[currentPlay].duration/60)<10">0</span>{{Math.floor(tracks[currentPlay].duration/60)}}:<span
              v-if="Math.floor(tracks[currentPlay].duration%60)<10">0</span>{{tracks[currentPlay].duration%60}}</span>
          </div>
          <div class="slider" data-direction="horizontal">
            <div class="progress"
                 :style="{width: parseFloat((startTime/tracks[currentPlay].duration)*100).toFixed(1) + '%'}">
              <div class="pin" id="progress-pin" data-method="rewind"></div>
            </div>
          </div>
        </div>
        <div class="control">
          <button @click="previous" :class="{disabled: disable === true}"><i
            class="fa fa-backward"></i></button>
          <button v-show="!sound" @click="play(0)"><i class="fa fa-play"></i></button>
          <button v-show="sound" @click="pause"><i class="fa fa-pause"></i></button>
          <button @click="next" :class="{'disabled': disable === true}"><i class="fa fa-forward"></i></button>
        </div>
        <div class="options">
          <button :class="{active: repeatOne}" @click="repeatOne= !repeatOne"><img
            src="https://music.yandex.ru/i/DzKyWD6KqIX8_M1MQHEp8piq-s.svg" alt=""></button>
          <button type="button" @click="like" v-show=""><i class="fa fa-heart-o"></i></button>
        </div>
      </div>
      <youtube style="display: none" ref="youtube" :video-id="tracks[currentPlay].youtubeId"></youtube>
    </div>
  </div>
</template>
<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  .playlist {
    position: absolute;
    z-index: 1111;
    top: 35px;
    color: white;
    left: 0;
  }

  .heart {
    color: #ff0000a1;
  }

  input[type=range] {
    -webkit-appearance: none;
    width: 0;
    opacity: 0;
  }

  .volume .fa.fa-volume-off {
    opacity: 0;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #808080;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  input[type=range]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4px;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #808080;
  }

  .volume {
    position: absolute;
    top: 35px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    right: 0;
    flex-direction: row-reverse;
    transition: width .5s linear;
  }

  .volume:hover input {
    width: 70px;
    opacity: 1;
  }

  .volume:hover .fa.fa-volume-off {
    opacity: 1;
  }

  /*.volume:hover  input.volume-range,input.volume-range:hover  {*/
  /*display: block;*/
  /*}*/
  .music-img {
    width: 200px;
    height: 200px;
  }

  .disabled {
    user-select: none;
    pointer-events: none;
    opacity: 0.5;
  }

  * {
    transition: all .8s ease-in-out;
  }

  .progress {
    transition: width 0.4s linear;
  }

  p {
    margin: 10px;
  }

  .name {
    font-size: 14px;
    color: #eee;
    margin-bottom: 4px;
    text-transform: capitalize;
  }

  .artist {
    font-size: 12px;
    color: #bcbcbc;
    text-transform: capitalize;
  }

  .back-player {
    background-repeat: no-repeat !important;
    background-size: cover !important;
    filter: blur(2px) brightness(34%);
    background-position: center;
  }

  .control {
    padding-top: 20px;
  }

  .options {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .options .active {
    background: #000;
    border-radius: 50%;
    filter: invert(1);
  }

  .options img {
    width: 20px;
    height: 20px;
  }

  .options button {
    background: transparent;
    box-shadow: none;
    outline: 0;
    border: none;
    color: #fff;
    font-size: 16px;
    border-radius: 50%;
    width: 32px;
    height: 30px;
    text-align: center;
    display: flex;
    margin: 0 11px;
  }

  .control button {
    background: transparent;
    box-shadow: none;
    outline: 0;
    border: none;
    color: #fff;
    font-size: 16px;
  }

  div#timeline {
    position: relative;
    margin: 0 auto;
    width: 92.5%;
  }

  .timing {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
  }

  .timing span {
    color: #eee;
    font-size: 11px;
  }

  div#timeline div.slider {
    background-color: gray;
    border-radius: 2px;
    cursor: pointer;
    height: 2px;
    position: relative;
    width: 100%;
  }

  div#timeline div.slider div.progress {
    background-color: #e74c3c;
    height: 100%;
    pointer-events: none;
    position: absolute;
    width: 0;
  }

  div#timeline div.slider div.progress div.pin {
    background-color: white;
    border-radius: 8px;
    height: 8px;
    position: absolute;
    pointer-events: all;
    right: -5px;
    top: -3px;
    width: 8px;
    -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.32);
    -moz-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.32);
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.32);
    -webkit-transition: transform 0.25s ease;
    -moz-transition: transform 0.25s ease;
    -ms-transition: transform 0.25s ease;
    -o-transition: transform 0.25s ease;
    transition: transform 0.25s ease;
  }

  div#timeline div.slider div.progress div.pin:active {
    -moz-transform: scale(1.5);
    -o-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }

  .back-player {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    border-radius: 37px;
  }

  .player-container {
    width: 305px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 673px;
    position: relative;
    align-items: center;
    border: 3px solid #101010;
    border-radius: 36px;
    /*overflow: hidden;*/

  }

  .player-container:before {
    /*background-image: url('http://aramvardanyan.me/myapp/assets/icons/iphone_x.png');*/
    content: '';
    position: absolute;
    z-index: 4;
    width: 444px;
    height: 787px;
    background-size: 100%;
    background-repeat: no-repeat;
    display: block;
    pointer-events: none;
  }

  .body-player {
    position: relative;
    z-index: 10;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .music-app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72vh;
  }
</style>
<script>
  import axios from 'axios'
  import VueYoutube from 'vue-youtube'
  import music from '../api/data'

  export default {
    components: {
      axios, VueYoutube, music
    },
    computed: {
      player() {
        return this.$refs.youtube.player
      }
    },
    watch: {
      volume: function () {
        this.player.setVolume(this.volume)
      }
    },
    data() {
      return {
        startTime: 0,
        repeatOne: false,
        tracks: music,
        sound: false,
        currentPlay: 9,
        disable: false,
        time: "",
        volume: 50,
        favourites: []
      }
    },
    methods: {
      mute() {
        if (this.volume === 0) {
          this.volume = 50
        }
        else {
          this.volume = 0
        }
      },
      pause() {
        this.sound = false;
        this.player.pauseVideo()

      },
      play() {
        this.sound = true;
        this.player.playVideo();
        this.timer()
      },
      timer() {
        this.time = setInterval(() => {
          this.startTime++
          if (this.startTime === this.tracks[this.currentPlay].duration && this.repeatOne !== true) {
            this.next();
          }
          if (this.startTime === this.tracks[this.currentPlay].duration && this.repeatOne === true) {
            this.startTime = 0;
            this.player.seekTo(0, true);

          }
          if (this.startTime === this.tracks[this.currentPlay].duration || this.sound === false) {
            window.clearInterval(this.time)
            console.log('stop')
          }
        }, 1000);

      },
      previous() {
        if (this.currentPlay === 0) {
          this.currentPlay = this.tracks.length - 1
        }
        else {
          this.currentPlay--;
        }
        this.sound = false;
        this.disable = true
        window.clearInterval(this.time)
        setTimeout(() => {
          this.startTime = 0
          this.play();
          this.disable = false
        }, 1000)
      },
      next() {
        if (this.currentPlay === this.tracks.length - 1) {
          this.currentPlay = 0
          window.clearInterval(this.time)
        }
        else {
          console.log(this.tracks.length - 1, this.currentPlay);
          this.currentPlay++;
          window.clearInterval(this.time)
          this.disable = true
        }
        this.sound = false;
        this.timer();
        this.startTime = 0;
        setTimeout(() => {
          this.disable = false
          this.play()
        }, 1000)
      },
      like() {
        this.favourites.push(
          this.tracks[this.currentPlay]
        )
        const parseFav = JSON.stringify(this.favourites);
        localStorage.setItem('fav', parseFav)
        // this.favourites = localStorage.fav
        console.log(this.favourites)
      }
    },
  }
</script>
