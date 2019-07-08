<template>
    <div>
      <div class="song-img">
        <img :src="tracks[currentPlay].album.image" alt="" class="music-img"
             style="">
      </div>
      <div class="song-info-block">
        <p class="name">{{tracks[currentPlay].name}}</p>
        <p class="artist">{{tracks[currentPlay].artist}}</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "SongInfoComponent",
      props: ['tracks'],
      computed: {
        currentPlay() {
          return this.$store.state.currentTrack
        },
      },
    }
</script>
