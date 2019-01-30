<template>
    <div class="container main-content position-relative">
    <MusicComponent/>
    </div>
</template>

<script>
  import MusicComponent from '../musicComponent'
    export default {
        name: "ContentComponent",
      components: {
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
