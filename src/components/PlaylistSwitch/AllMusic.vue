<template>
  <div class="all-music">
    <!--<button type="button" @click="mut">button</button>-->
    <filter-song :tracks="tracks"></filter-song>
    <ul class="playlist-ul">
      <li class="playlist-item" :class="{song_active : currentPlay === tracks[index].id}"
          v-for="(item, index) in tracks" :key="index" @click="playSong(index)">
        <img :src="item.album.image" alt="" class="playlist-album">
        <p>
          <span class="song-name">{{item.name}}</span>
          <span class="artist-name">{{item.artist}}</span>
        </p>
        <p v-show="currentPlay === tracks[index].id">
          <svg xmlns="http://www.w3.org/2000/svg" class="equilizer" :class="{stop_song : sound === false}"
               viewBox="0 0 128 128">
            <g>
              <rect class="bar" transform="translate(0,0)" y="15"></rect>
              <rect class="bar" transform="translate(25,0)" y="15"></rect>
              <rect class="bar" transform="translate(50,0)" y="15"></rect>
              <rect class="bar" transform="translate(75,0)" y="15"></rect>
              <rect class="bar" transform="translate(100,0)" y="15"></rect>
            </g>
          </svg>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {EventBus} from "../../assets/bus";
  import FilterSong from "../FilterSong";

  export default {
    name: "AllMusic",
    components: {FilterSong},
    props: ['tracks', 'sound'],
    computed: {
      currentPlay() {
        return this.$store.state.currentTrack
      }
    },
    methods: {
      playSong(index) {
        this.$store.commit('changeTrack', this.tracks[index].id)
        EventBus.$emit('bla')
        console.log(this.tracks[index].id)
      },
    },
  }
</script>

<style>
  /*.playlist-ul {*/
    /*list-style: none;*/
    /*padding: 10px;*/
    /*text-align: left;*/
    /*overflow-y: scroll;*/
    /*height: 540px;*/
  /*}*/

  /*.playlist-ul a {*/
    /*text-decoration: none;*/
  /*}*/

  /*.playlist-item {*/
    /*color: #d2d2d2;*/
    /*padding: 5px 10px;*/
    /*height: 40px;*/
    /*display: -webkit-box;*/
    /*display: -ms-flexbox;*/
    /*display: flex;*/
    /*-webkit-box-align: center;*/
    /*-ms-flex-align: center;*/
    /*align-items: center;*/
    /*border-bottom: 1px solid #ffffff36;*/
  /*}*/

  /*.playlist-item:last-of-type {*/
    /*border-bottom: none;*/
  /*}*/

  /*.playlist-album {*/
    /*width: 40px;*/
    /*height: 40px;*/
  /*}*/

  /*.song-name {*/
    /*display: block;*/
    /*font-size: 13px;*/
    /*width: 170px;*/
    /*white-space: nowrap;*/
    /*text-overflow: ellipsis;*/
    /*overflow: hidden;*/
  /*}*/

  /*.song_active {*/
    /*background: rgba(110, 138, 241, 0.17);*/
    /*border: none;*/
    /*pointer-events: none;*/
  /*}*/

  /*.artist-name {*/
    /*font-size: 11px;*/
  /*}*/


  /*::-webkit-scrollbar {*/
    /*width: 0px;*/
    /*background: transparent;*/
  /*}*/

  /*.equilizer {*/
    /*height: 20px;*/
    /*width: 20px;*/
    /*transform: rotate(180deg);*/
  /*}*/

  /*.bar {*/
    /*fill: rgba(255, 255, 255, 0.61);*/
    /*width: 18px;*/
    /*animation: equalize 10s 0s ease-in infinite;*/
  /*}*/

  /*.stop_song .bar {*/
    /*animation: none;*/
    /*height: 20px;*/
  /*}*/

  /*.bar:nth-child(1) {*/
    /*animation-delay: -1.9s;*/
  /*}*/

  /*.bar:nth-child(2) {*/
    /*animation-delay: -2s;*/
  /*}*/

  /*.bar:nth-child(3) {*/
    /*animation-delay: -2.3s;*/
  /*}*/

  /*.bar:nth-child(4) {*/
    /*animation-delay: -2.4s;*/
  /*}*/

  /*.bar:nth-child(5) {*/
    /*animation-delay: -2.1s;*/
  /*}*/
  /*@keyframes equalize {*/
    /*0% {*/
      /*height: 60px;*/
    /*}*/
    /*4% {*/
      /*height: 50px;*/
    /*}*/
    /*8% {*/
      /*height: 40px;*/
    /*}*/
    /*12% {*/
      /*height: 30px;*/
    /*}*/
    /*16% {*/
      /*height: 20px;*/
    /*}*/
    /*20% {*/
      /*height: 30px;*/
    /*}*/
    /*24% {*/
      /*height: 40px;*/
    /*}*/
    /*28% {*/
      /*height: 10px;*/
    /*}*/
    /*32% {*/
      /*height: 40px;*/
    /*}*/
    /*36% {*/
      /*height: 60px;*/
    /*}*/
    /*40% {*/
      /*height: 20px;*/
    /*}*/
    /*44% {*/
      /*height: 40px;*/
    /*}*/
    /*48% {*/
      /*height: 70px;*/
    /*}*/
    /*52% {*/
      /*height: 30px;*/
    /*}*/
    /*56% {*/
      /*height: 10px;*/
    /*}*/
    /*60% {*/
      /*height: 30px;*/
    /*}*/
    /*64% {*/
      /*height: 50px;*/
    /*}*/
    /*68% {*/
      /*height: 60px;*/
    /*}*/
    /*72% {*/
      /*height: 70px;*/
    /*}*/
    /*76% {*/
      /*height: 80px;*/
    /*}*/
    /*80% {*/
      /*height: 70px;*/
    /*}*/
    /*84% {*/
      /*height: 60px;*/
    /*}*/
    /*88% {*/
      /*height: 50px;*/
    /*}*/
    /*92% {*/
      /*height: 60px;*/
    /*}*/
    /*96% {*/
      /*height: 70px;*/
    /*}*/
    /*100% {*/
      /*height: 40px;*/
    /*}*/
  /*}*/
</style>
