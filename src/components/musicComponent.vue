<template>
  <div class="player-content container-fluid">
    <!--<div class="back-player" :style="{backgroundImage:  'url('+ tracks[currentPlay].album.image + ')'}">-->
    <!--</div>-->
    <!--<button @click="playlist = !playlist" type="button" class="playlist"><i class="fa fa-bars"></i></button>-->
    <div class="row align-items-center height-100 position-relative " style="z-index: 2">
        <controls :tracks="tracks" :current-play="currentPlay"/>
      <div class="col-xl-6 d-flex align-items-center">
        <song-info :tracks="tracks" :current-play="currentPlay"/>
      </div>
      <!--<div class="col-xl-6">-->
        <volume/>
        <!--<options/>-->
      <!--</div>-->
    </div>
    <div class="blur" :style="{backgroundImage: 'url(' + tracks[currentPlay].album.image + ')'}"></div>


    <!--<user-playlist-->
    <!--:class="{playlist_active : playlist===true}"-->
    <!--:tracks="dynamicTracks"-->
    <!--@current-play="changeCurrentPlay"-->
    <!--@play="play"-->
    <!--:sound="sound"-->
    <!--&gt;</user-playlist>-->
    <youtube style="display: none" ref="youtube" :video-id="tracks[currentPlay].youtubeId" v-on=""></youtube>

  </div>
</template>

<style scoped lang="scss">
  .player-content {
    height: 75px;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .blur {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    filter: blur(12px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    z-index: 1;
  }
</style>

<script>
  import axios from 'axios'
  import VueYoutube from 'vue-youtube'
  import music from '../api/data'
  import userPlaylist from '../components/userPlaylist'
  import {EventBus} from "../assets/bus";
  import {orderBy} from 'lodash'
  import SongInfo from '../components/playerComponent/SongInfoComponent'
  import Volume from '../components/playerComponent/volumeComponent'
  import Timeline from '../components/playerComponent/TimelineComponent'
  import Controls from '../components/playerComponent/ControlsComponent'
  import Options from '../components/playerComponent/OptionsComponent'

  export default {
    components: {
      axios, VueYoutube, music, userPlaylist, SongInfo, Volume, Timeline, Controls, Options
    },
    computed: {
      // player: function (){
      //   return this.$refs.youtube.player
      // },
      currentPlay() {
        return this.$store.state.currentTrack
      },
      dynamicTracks() {
        return orderBy(this.tracks, ['name'], [this.sorts])
      },
    },

    data() {
      return {
        repeatOne: false,
        tracks: music,
        // sound: false,
        // currentPlay: 16,

        favourites: [],
        playlist: false,
        sorts: 'asc'
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
    //   timer() {
    //     this.time = setInterval(() => {
    //       this.startTime++
    //       if (this.startTime === this.tracks[this.currentPlay].duration && this.repeatOne !== true) {
    //         this.next();
    //       }
    //       if (this.startTime === this.tracks[this.currentPlay].duration && this.repeatOne === true) {
    //         this.startTime = 0;
    //         this.player.seekTo(0, true);
    //
    //       }
    //       if (this.startTime === this.tracks[this.currentPlay].duration || this.sound === false) {
    //         window.clearInterval(this.time)
    //         console.log('stop')
    //       }
    //     }, 1000);
    //
    //   },
    // },
    // mounted() {
    //   EventBus.$on('bla', () => {
    //     setTimeout(() => {
    //       window.clearInterval(this.time)
    //       this.play()
    //       this.startTime = 0
    //     }, 1)
    //   })
    // }
  }
</script>
