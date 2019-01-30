<template>
  <div class="playlist-container">
    <div class="user-bar">
      <div class="user-name" @click="$router.push('/profile')">
        <span>Admin</span>
      </div>
      <div class="user-avatar"  @click="$router.push('/profile')">
        <img src="https://avatars.yandex.net/get-music-content/34131/70947499.a.3179720-1/200x200" alt="">
      </div>
    </div>
    <div class="playlist-menu">
      <a><h2 class="title-playlist" :class="{'active': active_tab === 'AllMusic'}" @click="changePlaylist('AllMusic')">
        All music</h2></a>
      <a><h2 class="title-playlist" :class="{'active': active_tab === 'Favourites'}"
             @click="changePlaylist('Favourites')">Favourites</h2></a>
      <a><h2 class="title-playlist" :class="{'active': active_tab === 'Artist'}" @click="changePlaylist('Artist')">
        Artist</h2></a>
      <a><h2 class="title-playlist" :class="{'active': active_tab === 'Album'}" @click="changePlaylist('Album')">
        Albums</h2></a>
    </div>
    <playlist-switch :tracks="tracks" :sound="sound"></playlist-switch>
  </div>
</template>
<script>
  import {mixin} from "../assets/mixin";
  import {EventBus} from "../assets/bus";
  import playlistSwitch from './playlistSwitch'

  export default {
    name: "userPlaylist",
    components: {playlistSwitch},
    data() {
      return {
        active_tab: 'AllMusic'
      }
    },
    computed: {
      currentPlay() {
        return this.$store.state.currentTrack
      }
    },
    props: ['tracks', 'sound'],
    methods: {
      playSong(index) {

        this.$store.commit('changeTrack', this.tracks[index].id)
        EventBus.$emit('bla')
      },
      changePlaylist(name) {
        EventBus.$emit('bind-call-tab', name);
        this.active_tab = name
      }
    },

  }
</script>

<!--<style>-->
  <!--.user-bar {-->
    <!--height: 50px;-->
    <!--display: flex;-->
    <!--justify-content: flex-end;-->
    <!--align-items: center;-->
    <!--padding: 20px 10px 0 10px;-->
    <!--background: #000000a3;-->

  <!--}-->
  <!--.playlist-container {-->
    <!--position: absolute;-->
    <!--z-index: 20;-->
    <!--background: rgba(0, 0, 0, 0.75);-->
    <!--width: 100%;-->
    <!--height: 100%;-->
    <!--border-radius: inherit;-->
    <!--left: -100%;-->
    <!--transition: all 0.4s ease-in-out;-->
  <!--}-->

  <!--.playlist_active {-->
    <!--left: 0px;-->
  <!--}-->

  <!--.playlist-menu {-->
    <!--display: flex;-->
    <!--flex-wrap: nowrap;-->
    <!--white-space: nowrap;-->
    <!--justify-content: space-between;-->
    <!--padding-left: 100px;-->
    <!--align-items: center;-->
    <!--overflow-y: scroll;-->
    <!--margin-top: 15px;-->
  <!--}-->

  <!--.playlist-menu ::-webkit-scrollbar {-->
    <!--display: none;-->
  <!--}-->

  <!--.playlist-menu h2 {-->
    <!--font-size: 13px;-->
    <!--font-weight: 100;-->
    <!--transition: font-size .3s linear;-->

  <!--}-->

  <!--.playlist-menu a {-->
    <!--margin-right: 10px;-->
    <!--margin-left: 10px;-->

  <!--}-->

  <!--.playlist-menu a:last-of-type {-->
    <!--padding-right: 120px;-->
  <!--}-->

  <!--.playlist-menu h2.active {-->
    <!--font-size: 20px;-->
    <!--color: #fff;-->

  <!--}-->

  <!--.title-playlist {-->
    <!--color: #d2d2d2;-->
    <!--font-weight: 100;-->
    <!--margin-top: 0px;-->
    <!--margin-bottom: 0;-->
  <!--}-->

  <!--.user-avatar {-->
    <!--width: 30px;-->
    <!--height: 30px;-->
    <!--overflow: hidden;-->
    <!--border-radius: 50%;-->
    <!--margin: 0 10px 0 7px;-->
  <!--}-->
  <!--.user-avatar img {-->
    <!--width: 100%;-->
    <!--height: 100%;-->
    <!--object-fit: cover;-->
    <!--object-position: center;-->
  <!--}-->
  <!--.user-name {-->
    <!--font-size: 11px;-->
    <!--color: rgba(238, 238, 238, 0.6);-->
    <!--font-weight: 400;-->
  <!--}-->
  <!--.user-name span {-->
    <!--max-width: 70px;-->
    <!--white-space: nowrap;-->
    <!--overflow: hidden;-->
    <!--text-overflow: ellipsis;-->
    <!--display: block;-->
  <!--}-->
<!--</style>-->
