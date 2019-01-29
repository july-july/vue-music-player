<template>
  <div>
    <dynamic-component :is="active_tab" :tracks="tracks" :sound="sound"></dynamic-component>
  </div>
</template>

<script>
  import AllMusic from '../components/PlaylistSwitch/AllMusic'
  import Favourites from '../components/PlaylistSwitch/Favourites'
  import Artist from '../components/PlaylistSwitch/ArtistList'
  import Album from '../components/PlaylistSwitch/AlbumList'
  import {EventBus} from "../assets/bus";



  export default {
    name: "playlistSwitch",
    components: {Favourites, AllMusic, Album, Artist},
    props: ['tracks', 'sound'],
    data () {
      return {
        active_tab: "AllMusic"
      }
    },
    mounted() {
      EventBus.$on('bind-call-tab', (name) => {
        this.active_tab = name
      })
    }
  }
</script>

<style scoped>

</style>
