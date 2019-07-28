<template>
  <div id="app">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App',
    created() {

    }
  }

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Roboto:100');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300');
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

  html, body {
    height: auto;
    max-height: 100vh;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }

  button, a {
    font-family: 'Roboto', sans-serif;
    /*background-image: linear-gradient(to right, #de13bb, #c60eb1, #af08a6, #98049a, #82008e);*/
    padding: 5px 10px;
    color: white;
    border-radius: 20px;

    &:hover {
      text-decoration: none;
      color: white;
      /*background-image: linear-gradient(to right, #82008e, #98049a, #af08a6, #c60eb1, #de13bb);*/
    }

    &:focus {
      outline: none;
    }
  }
  .height-100 {
    height: 100%;
  }
  p {
    margin-bottom: 0;
  }
  @import "assets/scss/index";
</style>
