<template>
  <div class="content">
      <MusicComponent/>
  </div>
</template>

<script>
  import MusicComponent from '../components/musicComponent'

  export default {
    name: "IndexComponent",
    components: {
      MusicComponent
    },
  }
</script>

<style>
    .content {
      background: transparent;
    }
</style>
