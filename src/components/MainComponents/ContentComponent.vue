<template>
    <div class="container main-content position-relative">
      <all-music></all-music>
    <MusicComponent/>
    </div>
</template>

<script>
  import MusicComponent from '../musicComponent'
  import UserPlaylist from "../userPlaylist";
  import AllMusic from "../PlaylistSwitch/AllMusic";
    export default {
        name: "ContentComponent",
      components: {
        AllMusic,
        UserPlaylist,
        MusicComponent
      }
    }
</script>

<style scoped lang="scss">
    .main-content {
      background: rgba(0, 0, 0, 0.81);
      min-height: 90vh;
    }
</style>
