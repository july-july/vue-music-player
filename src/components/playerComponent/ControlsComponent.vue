<template>
  <div class="control">
    <button @click="previous" :class="{disabled: disable === true}"><i
      class="fa fa-backward"></i></button>
    <button v-show="!sound" @click="play"><i class="fa fa-play"></i></button>
    <button v-show="sound" @click="pause"><i class="fa fa-pause"></i></button>
    <button @click="next" :class="{'disabled': disable === true}"><i class="fa fa-forward"></i></button>
  </div>
</template>

<script>
    export default {
        name: "ControlsComponent"
    }
</script>

<style scoped lang="scss">
    .control {
      button {
        background-image: none;
        background: transparent;
        border: none;
        i {
          background:-moz-linear-gradient(right, #de13bb, #c60eb1, #af08a6, #98049a, #82008e);
          background: -webkit-linear-gradient(right, #de13bb, #c60eb1, #af08a6, #98049a, #82008e);
          background: linear-gradient(to right, #de13bb, #c60eb1, #af08a6, #98049a, #82008e);
          -webkit-background-clip: text;
          -moz-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color:transparent;
        }
      }
    }
</style>
