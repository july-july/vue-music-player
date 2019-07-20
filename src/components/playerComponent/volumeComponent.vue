<template>
  <div>
      <span class="volume" style="color: white">
        <button class="mute" @click="mute">
         <i class="fa fa-volume-up"></i>
        </button>
        <div class="range-container">
          <div class="volume-value" :style="{width: volume + 'px'}"></div>
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
    position: relative;
    .range-container {
      position: relative;
      transform: rotate(-90deg);
      top: -67px;
      left: -68px;
      overflow: hidden;

      .volume-value {
        position: absolute;
        height: 100%;
        left: 0;
        background-image: linear-gradient(to right, #de13bb, #c60eb1, #af08a6, #98049a, #82008e);
      }
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
      border-radius: 10px;
      display: flex;
      justify-content: center;
      width: 100px;
      height: 14px;
      input[type='range'] {
        width: 100px;
        height: 14px;
        opacity: 0;
        background: transparent;
        position: relative;
        z-index: 1111;
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
