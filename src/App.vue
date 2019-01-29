<template>
  <div id="app">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <div class="music-app">
      <div class="player-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

import Cookie from 'js-cookie'
  export default {
    name: 'App',
    created() {

    }
  }

</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Roboto:100');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300');


  html, body {
    height: auto;
    max-height: 100vh;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
  button,a{
    font-family: 'Roboto', sans-serif;
  }
  .music-app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92vh;
  }

  .player-container {
    width: 305px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 673px;
    position: relative;
    align-items: center;
    border: 3px solid #101010;
    border-radius: 36px;
    overflow: hidden;
    background: #ffffff9c;

  }

  .player-container:before {
    /*background-image: url('http://aramvardanyan.me/myapp/assets/icons/iphone_x.png');*/
    content: '';
    position: absolute;
    z-index: 4;
    width: 444px;
    height: 787px;
    background-size: 100%;
    background-repeat: no-repeat;
    display: block;
    pointer-events: none;
  }

  .player-container .player-content {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }
</style>
