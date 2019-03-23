<template>
  <div>
    <div class="control">
      <button @click="previous" :class="{disabled: disable === true}"><i
        class="fa fa-backward"></i></button>
      <button v-show="!sound" @click="play"><i class="fa fa-play"></i></button>
      <button v-show="sound" @click="pause" ><i class="fa fa-pause"></i></button>
      <button @click="next" :class="{'disabled': disable === true}"><i class="fa fa-forward"></i></button>
    </div>
    <div id="timeline">
      <div class="timing">
            <span id="current-time">
              <span v-if="Math.floor(startTime/60) < 10">0</span>{{Math.floor(startTime/60)}}:<span
              v-if="startTime%60 < 10 ">0</span>{{startTime%60}}</span>
        <span id="total-time">
              <span v-if="Math.floor(tracks[currentPlay].duration/60)<10">0</span>{{Math.floor(tracks[currentPlay].duration/60)}}:<span
          v-if="Math.floor(tracks[currentPlay].duration%60)<10">0</span>{{tracks[currentPlay].duration%60}}</span>
      </div>
      <div class="timer-line">
        <div class="progress-line" :style="{'width': (startTime/tracks[currentPlay].duration)*100 + '%'}"></div>
        <input type="range" min="0" :max="tracks[currentPlay].duration" step="1" @change="seek(startTime, true)"
               v-model="startTime"/>
      </div>
    </div>
  </div>

</template>

<script>
  import youtube from 'vue-youtube';
  import {mixin} from "../../assets/mixin";

  export default {
    name: "ControlsComponent",
    components: {
      youtube
    },
    data () {
      return {
        sound: false,
        disable: false,
        startTime: 0,
        time: ""
      }
    },
    props: ['tracks', 'currentPlay'],
    mixins: [mixin],
    // computed:{
    //   this.player()
    // },
    methods: {
      pause() {
        this.sound = false;
        this.player.pauseVideo()
      },
      // changeSort() {
      //   this.sorts = this.sorts === 'asc' ? 'desc' : 'asc'
      // },
      play() {
        this.sound = true;
        this.player.playVideo()
        this.timer()
      },
      next() {
            if (this.currentPlay === this.tracks.length - 1) {
              this.$store.commit('changeTrack', 0)
              window.clearInterval(this.time)
            }
            else {
              console.log(this.tracks.length - 1, this.currentPlay);
              this.$store.commit('changeTrack', this.currentPlay + 1)
              window.clearInterval(this.time)
              // this.disable = true
            }
            this.sound = false;
            this.timer();
            this.startTime = 0;
            setTimeout(() => {
              // this.disable = false
              this.play()
            }, 1000)
          },
      previous() {
            if (this.currentPlay === 0) {
              this.$store.commit('changeTrack', this.tracks.length - 1)
              // this.currentPlay = this.tracks.length - 1 замена выше!
            }
            else {
              this.$store.commit('changeTrack', this.currentPlay - 1)
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
      seek(a, y) {
        this.player.seekTo(a, y)
        if (this.sound === false) {
          this.pause()
        }
      },
      timer() {
        this.time = setInterval(() => {
          this.startTime++
          if (this.startTime === this.tracks[this.currentPlay].duration && this.$store.state.repeatOne !== true) {
            this.next();
          }
          if (this.startTime === this.tracks[this.currentPlay].duration && this.$store.state.repeatOne === true) {
            this.startTime = 0;
            this.player.seekTo(0, true);

          }
          if (this.startTime === this.tracks[this.currentPlay].duration || this.sound === false) {
            window.clearInterval(this.time)
            console.log('stop')
          }
        }, 1000);

      },
    }
  }
</script>

<style scoped lang="scss">
  .timer-line {
    top: -12px;
    position: absolute;
    width: 100%;
    height: 6px;
    background: white;
  }

  .progress-line {
    height: 6px;
    position: relative;
    background-image: linear-gradient(to right, #de13bb, #c60eb1, #af08a6, #98049a, #82008e);
    z-index: 1;
  }

  #timeline {
    width: 100%;
    position: absolute;
    top: 4px;
    .timing {
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 0 10px;
      color: white;
      font-size: 12px;
      position: absolute;
      top: -33px;
    }
    input[type='range'] {
      position: absolute;
      left: 0;
      width: 100%;
      -webkit-appearance: none;
      height: 6px;
      top: 0;
      cursor: grab;
      background: transparent;
      z-index: 11;
      &:focus {
        outline: none;
      }
      &::-webkit-slider-thumb {
        background: transparent !important;
        height: 1px;
        -webkit-appearance: none;
        width: 1px;
      }
    }
  }
  .control {
    button {
      background-image: none;
      background: transparent;
      border: none;
      i {
        /*background: -moz-linear-gradient(right, #de13bb, #c60eb1, #af08a6, #98049a, #82008e);*/
        /*background: -webkit-linear-gradient(right, #de13bb, #c60eb1, #af08a6, #98049a, #82008e);*/
        /*background: linear-gradient(to right, #de13bb, #c60eb1, #af08a6, #98049a, #82008e);*/
        /*-webkit-background-clip: text;*/
        /*-moz-background-clip: text;*/
        /*background-clip: text;*/
        /*-webkit-text-fill-color: transparent;*/
        color: #fff;
      }
    }
  }
</style>
