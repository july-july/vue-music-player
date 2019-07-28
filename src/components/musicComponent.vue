<template>
  <div class="player-content">
    <div class="blur" :style="{backgroundImage:  'url('+ tracks[currentPlay].album.image + ')'}"></div>
    <div class="player-inner">
      <song-info :tracks="tracks"/>
      <timeline :tracks="tracks" :start="startTime" @seek="seek"/>
      <controls :timer="timer"
                :tracks="tracks"
                :next="next"
                :prev="previous"
                @pause="pause"
                @play="play"
                :sound="soundState"
      />
      <div class="d-flex justify-content-between align-items-center">
        <volume/>
        <options/>
      </div>

    </div>
    <!--<button @click="playlist = !playlist" type="button" class="playlist"><i class="fa fa-bars"></i></button>-->
    <!--    <div class="row align-items-center height-100 position-relative " style="z-index: 2">-->
    <!--      <div class="col-xl-6 d-flex align-items-center">-->
    <!--
         </div>-->
    <!--      <div class="col-xl-2 offset-2 d-flex justify-content-between align-items-center">-->
    <!--        <volume/>-->
    <!--        <options/>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--<user-playlist-->
    <!--:class="{playlist_active : playlist===true}"-->
    <!--:tracks="dynamicTracks"-->
    <!--@current-play="changeCurrentPlay"-->
    <!--@play="play"-->
    <!--:sound="sound"-->
    <!--&gt;</user-playlist>-->
    <youtube class="player-iframe" ref="youtube" :video-id="tracks[currentPlay].youtubeId" v></youtube>

  </div>
</template>

<script>
  import VueYoutube from 'vue-youtube'
  import music from '../api/data'
  import userPlaylist from '../components/userPlaylist'
  import {EventBus} from "../assets/bus";
  import SongInfo from '../components/playerComponent/SongInfoComponent'
  import Volume from '../components/playerComponent/volumeComponent'
  import Timeline from '../components/playerComponent/TimelineComponent'
  import Controls from '../components/playerComponent/ControlsComponent'
  import Options from '../components/playerComponent/OptionsComponent'
  export default {
    components: {
      VueYoutube,
      music,
      userPlaylist,
      SongInfo,
      Volume,
      Timeline,
      Controls,
      Options
    },
    data() {
      return {
        tracks: music,
        playlist: false,
        startTime: 0,
        time: '',
      }
    },
    computed: {
      player () {
        return this.$refs.youtube.player
      },
      currentPlay() {
        return this.$store.state.currentTrack
      },
      soundState() {
        return this.$store.state.sound
      },
    },

    // methods: {
    //   changeCurrentPlay(val) {
    //     this.currentPlay = val
    //     // console.log('hui')
    //     this.play()
    //   },
    methods: {
      timer() {
        this.time = setInterval(() => {
          this.player.getCurrentTime().then((res) => {
            this.startTime = Math.floor(res)
          })
        }, 1000);

      },
      next() {
          const random = this.$store.state.random;
        if (this.currentPlay === this.tracks.length - 1 && !random) {
          this.$store.commit('changeTrack', 0)
        }
        else {
          if (random) {
            const randomNumber = Math.floor(Math.random() * this.tracks.length)
            console.log(randomNumber, 'random')
            this.$store.commit('changeTrack', randomNumber)

          } else {
            this.$store.commit('changeTrack', this.currentPlay + 1)
          }
        }
        this.$store.commit('changeSound', false)
        setTimeout(() => {
          this.play()
        }, 1000)
      },
      previous() {
        const random = this.$store.state.random;
        if (this.currentPlay === 0 && !random) {
          this.$store.commit('changeTrack', this.tracks.length - 1)
        }
        else {
          if (random) {
            const randomNumber = Math.floor(Math.random() * this.tracks.length)
            console.log(randomNumber, 'random')
            this.$store.commit('changeTrack', randomNumber)
          } else {
            this.$store.commit('changeTrack', this.currentPlay - 1)
          }

        }
        this.$store.commit('changeSound', false)
        setTimeout(() => {
          this.play();
        }, 1000)
      },
      seek(a, y) {
        this.player.seekTo(a, y)
        if (this.soundState === false) {
          this.pause()
        }
      },
      pause() {
        this.player.pauseVideo();
        this.$store.commit('changeSound', false)
      },
      play() {
        this.player.playVideo();
        this.timer();
        this.$store.commit('changeSound', true)

      },
    },
    watch: {
      startTime(val) {
        const endTrack = this.tracks[this.currentPlay].duration;
        const repeatOne = this.$store.state.repeatOne;
        if (repeatOne && (val === endTrack)) {
          this.seek(0, true)
        } else if (!repeatOne && (val === endTrack)) {
          this.next();
        }

      }
    }
  }
</script>
