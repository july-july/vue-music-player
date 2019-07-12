<template>
  <div class="player-content">
    <div class="blur" :style="{backgroundImage:  'url('+ tracks[currentPlay].album.image + ')'}"></div>
    <div class="player-inner">
      <song-info :tracks="tracks"/>
      <timeline :tracks="tracks"  :start="startTime"/>
      <controls :timer="timer"
                :tracks="tracks"
                :next="next"
                :prev="previous"
                @pause="pause"
                @play="play"
                :sound="soundState"

      />
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
    <youtube class="d-none" ref="youtube" :video-id="tracks[currentPlay].youtubeId" v></youtube>

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
    data() {
      return {
//        repeatOne: false,
        tracks: music,
        playlist: false,
        startTime: 0,
        time: '',
      }
    },
    // methods: {
    //   seek(a, y) {
    //     this.player.seekTo(a, y)
    //     if (this.sound === false) {
    //       this.pause()
    //     }
    //   },
    //   changeCurrentPlay(val) {
    //     this.currentPlay = val
    //     // console.log('hui')
    //     this.play()
    //   },
    //   like() {
    //     this.favourites.push(
    //       this.tracks[this.currentPlay]
    //     )
    //     const parseFav = JSON.stringify(this.favourites);
    //     localStorage.setItem('fav', parseFav)
    //     // this.favourites = localStorage.fav
    //     console.log(this.favourites)
    //   },
    methods: {
      timer() {
        this.time = setInterval(() => {
          this.player.getCurrentTime().then((res) => {
            this.startTime = Math.floor(res)
          })

          if (this.startTime === this.tracks[this.currentPlay].duration) {
            this.next();
          }
          if (this.startTime === this.tracks[this.currentPlay].duration ) {
            this.startTime = 0;
            this.player.seekTo(0, true);

          }
          if (this.startTime === this.tracks[this.currentPlay].duration || this.soundState === false) {
            window.clearInterval(this.time)
            console.log('stop')
          }
        }, 1000);

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
      pause() {
        this.player.pauseVideo();
      },
      play() {
        this.player.playVideo();
        this.timer();

      },
    },
  }
</script>
