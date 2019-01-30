<template>
  <div class="content">
    <header-component/>
    <ContentComponent/>
  </div>
</template>

<script>
  import HeaderComponent from '././MainComponents/Header';
  import ContentComponent from '././MainComponents/ContentComponent';

  export default {
    name: "IndexComponent",
    components: {
      HeaderComponent, ContentComponent
    },
  }
</script>

<style scoped>
    .content {
      background: white;
    }
</style>
