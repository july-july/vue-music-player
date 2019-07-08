<template>
  <div>
    <div class="control">
      <button @click="previous" :class="{disabled: disable === true}"><i
        class="fa fa-backward"></i></button>
      <button v-show="!sound" @click="play"><i class="fa fa-play"></i></button>
      <button v-show="sound" @click="pause" ><i class="fa fa-pause"></i></button>
      <button @click="next" :class="{'disabled': disable === true}"><i class="fa fa-forward"></i></button>
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
    props: ['tracks'],
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
    },
    computed: {
      currentPlay() {
        return this.$store.state.currentTrack
      },
    }
  }
</script>
