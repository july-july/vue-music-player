<template>
  <div class="music-app">
    <div class="player-container">
      <div class="back-player" :style="{backgroundImage:  'url('+ tracks[currentPlay].album.image + ')'}">
      </div>
      <div class="body-player">
        <p><img :src="tracks[currentPlay].album.image" alt="" style="box-shadow: 1px 3px 4px 1px #00000087;"></p>
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
          <button @click="previous" :disabled="currentPlay === 0" :class="{disabled: disable === true}"><i class="fa fa-backward"></i></button>
          <button v-show="!sound" @click="play(0)"><i class="fa fa-play"></i></button>
          <button v-show="sound" @click="pause"><i class="fa fa-pause"></i></button>
          <button @click="next" :class="{'disabled': disable === true}"><i class="fa fa-forward"></i></button>
        </div>
        <div class="options">
          <button type="button" :class="{active: repeatAll}" @click="repeatAll= !repeatAll"><img
            src="https://music.yandex.ru/i/4R0VzZL0pY_3om_7d20vPfnoGsw.svg" alt=""></button>
          <button :class="{active: repeatOne}" @click="repeatOne= !repeatOne"><img
            src="https://music.yandex.ru/i/DzKyWD6KqIX8_M1MQHEp8piq-s.svg" alt=""></button>
          <button :class="{active: mixAll}"><img src="https://music.yandex.ru/i/f_ASOJaXjrN-HNGmz95LN4221Zw.svg" alt="">
          </button>
        </div>
      </div>
      <youtube style="display: none" ref="youtube" :video-id="tracks[currentPlay].youtubeId"></youtube>
    </div>
  </div>
</template>
<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');
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

  export default {
    components: {
      axios, VueYoutube
    },
    computed: {
      player() {
        return this.$refs.youtube.player
      }
    },
    data() {
      return {
        startTime: 0,
        music: [],
        repeatAll: false,
        repeatOne: false,
        mixAll: false,
        tracks: [
          {
            id: 0,
            name: "Nicotine",
            artist: 'Panic! at the disco',
            album:
              {
                title: 'Too Weird to Live, Too Rare to Die!',
                image: "https://avatars.yandex.net/get-music-content/34131/7f53bab3.a.1593740-1/200x200",
              }
            ,
            youtubeId: "LkBxcmxWKAA",
            duration: 197,
            rating: "",
            year: "2013"

          },
          {
            id: 1,
            name: "Death of a Bachelor",
            artist: 'Panic! at the disco',
            album:
              {
                title: 'Death of a Bachelor',
                image: "https://avatars.yandex.net/get-music-content/34131/70947499.a.3179720-1/200x200",
              }
            ,
            youtubeId: "R03cqGg40GU",
            duration: 212,
            rating: "",
            year: "2015"

          },
          {
            id: 2,
            name: "Emperor's New Clothes",
            artist: 'Panic! at the disco',
            album:
              {
                title: 'Death of a Bachelor',
                image: "https://avatars.yandex.net/get-music-content/34131/70947499.a.3179720-1/200x200",
              }
            ,
            youtubeId: "7qFF2v8VsaA",
            duration: 219,
            rating: "",
            year: "2015"

          },
          {
            id: 3,
            name: "LA Devotee",
            artist: 'Panic! at the disco',
            album:
              {
                title: 'Death of a Bachelor',
                image: "https://avatars.yandex.net/get-music-content/34131/70947499.a.3179720-1/200x200",
              }
            ,
            youtubeId: "r5dNcKTcnPA",
            duration: 245,
            rating: "",
            year: "2015"

          },
          {
            id: 4,
            name: "Waiting So Long",
            artist: 'NBSPLV',
            album:
              {
                title: 'Black Tape',
                image: "https://avatars.yandex.net/get-music-content/119639/31cd079e.a.4881523-1/200x200",
              }
            ,
            youtubeId: "Tgg7LNso_rs",
            duration: 198,
            rating: "",
            year: "2017"

          },
          {
            id: 5,
            name: "High Hopes",
            artist: 'Panic! At The Disco',
            album:
              {
                title: 'Pray For A Wiked',
                image: "https://avatars.yandex.net/get-music-content/139444/67ca7282.a.5489472-1/200x200",
              }
            ,
            youtubeId: "IPXIgEAGe4U",
            duration: 197,
            rating: "",
            year: "2018"

          },
          {
            id: 6,
            name: "Nothing Will Be Bigger Than Us",
            artist: 'Hurts',
            album:
              {
                title: 'Surrender',
                image: "https://avatars.yandex.net/get-music-content/63210/5d49936a.a.2990574-1/200x200",
              }
            ,
            youtubeId: "6_eVOzxZrdE",
            duration: 243,
            rating: "",
            year: "2018"

          },
          {
            id: 7,
            name: "Weeds",
            artist: 'Marina And The Diamonds',
            album:
              {
                title: 'Froot',
                image: "https://avatars.yandex.net/get-music-content/38044/db75aa5e.a.2579105-1/200x200",
              }
            ,
            youtubeId: "ZlE2WQCGGZo",
            duration: 248,
            rating: "",
            year: "2015"

          },
          {
            id: 8,
            name: "Nico and the Niners",
            artist: 'Twenty One Pilots',
            album:
              {
                title: 'Froot',
                image: "https://avatars.yandex.net/get-music-content/176019/68569b6f.a.5838243-1/200x200",
              }
            ,
            youtubeId: "hMAPyGoqQVw",
            duration: 263,
            rating: "",
            year: "2018"

          },
        ],
        sound: false,
        currentPlay: 3,
        disable: false

      }
    },
    methods: {
      async pause() {
        this.sound = false;
        this.player.pauseVideo()

      },
      play() {
        this.sound = true;
        this.player.playVideo();
        this.timer()
      },
      timer() {
        let time = setInterval(() => {
          if(this.currentPlay === this.tracks.length){
            this.pause()
            window.clearInterval(time)
            this.startTime=0

          }
          this.startTime++
          if (this.startTime === this.tracks[this.currentPlay].duration && this.repeatOne !== true) {
            this.next();
          }
          if(this.startTime === this.tracks[this.currentPlay].duration && this.repeatOne === true){
            this.startTime= 0;
            this.player.seekTo(0,true);

          }
          if (this.startTime === this.tracks[this.currentPlay].duration || this.sound === false) {
            window.clearInterval(time)
            console.log('stop')
          }
        }, 1000);

      },
      previous() {
        this.currentPlay--;
        this.sound = false;
        this.disable=true
        this.timer()
        setTimeout(() => {
          this.startTime = 0
          this.play();
          this.disable=false
        }, 1000)
      },
      next() {
        if(this.mixAll === true) {
          // this.currentPlay ===
        }
        else{
          console.log(this.tracks.length-1, this.currentPlay);
          if(this.currentPlay === this.tracks.length-1 && this.repeatAll === true)  {
            this.currentPlay = 0
          }
          else{
            this.currentPlay++;
            this.disable=true
          }
        }
        this.sound = false;
        this.timer();
        this.startTime = 0;
        setTimeout(() => {
          this.disable=false
          this.play()
        }, 1000)
      },
    },
  }
</script>
