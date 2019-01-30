<template>
    <div class="d-flex align-items-center justify-content-between pl-2">
      <p><img :src="tracks[currentPlay].album.image" alt="" class="music-img"
              style="box-shadow: 1px 3px 4px 1px #00000087;"></p>
      <div class="song-info-block">
        <p class="name">{{tracks[currentPlay].name}}</p>
        <p class="artist">{{tracks[currentPlay].artist}}</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "SongInfoComponent",
      props: ['tracks', 'current-play'],
    }
</script>

<style scoped lang="scss">
    .music-img {
      width: 60px;
    }
  .song-info-block {
    color: white;
    font-size: 13px;
    padding-left: 10px;
    .name {
      font-weight: bold;
    }
    .artist, .name {
      text-transform: capitalize;
    }
  }
</style>
