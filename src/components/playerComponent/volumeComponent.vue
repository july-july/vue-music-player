<template>
  <div>
      <span class="volume" style="color: white">
        <button class="mute" @click="mute">
         <i class="fa fa-volume-up"></i>
        </button>
        <div class="range-container">
          <input type="range" class="volume-range" v-model="volume" min="0" max="100" step="1"/>
        </div>
      </span>
  </div>
</template>

<script>
  import {mixin} from '../../assets/mixin'

  export default {
    name: "volumeComponent",
    data() {
      return {
        volume: 50
      }
    },
    mixins: [mixin],
    watch: {
      volume: function () {
        this.player.setVolume(this.volume)
      }
    },
    methods: {
      mute() {
        if (this.volume === 0) {
          this.volume = 50
        }
        else {
          this.volume = 0
        }
      },
    }
  }
</script>

<style lang="scss">
  .volume {
    color: white;
    display: flex;
    align-items: center;
    /*flex-direction: column-reverse;*/
    input {
      /*-webkit-appearance: slider-vertical;*/
    }
    .range-container {
      /*position: absolute;*/
    }
    .mute {
      background: transparent;
      border: none;
    }
    .mute + .range-container {
      opacity: 0;
      visibility: hidden;
      transition: opacity .5s ease-in-out;
      bottom: 55px;
      z-index: 12;
      background: rgb(53, 53, 53);
      width: 64px;
      padding: 12px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      input[type='range'] {
        width: 54px;
        background: transparent;
        position: relative;
        z-index: 1111;
        &::-webkit-slider-runnable-track {
          -webkit-appearance: none;
          background: transparent;
          width: 54px;
          border-radius: 10px;
          box-shadow: 0 0 0 2px #3D3D4A;
        }
        &::-webkit-slider-thumb {
          width: 30px;
          height: 30px;
          opacity: 1;
          border-radius: 50%;
          background-color: red;
        }
      }
      &:hover {
        visibility: visible;
        opacity: 1;
      }
    }
    .mute:hover + .range-container {
      opacity: 1;
      visibility: visible;
    }
  }
</style>
