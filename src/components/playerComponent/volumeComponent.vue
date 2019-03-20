<template>
  <div>
      <span class="volume" style="color: white">
        <button class="mute" @click="mute">
         <i class="fa fa-volume-up"></i>
        </button>
        <div class="range-container">

          <div>
             <div class="volume-thumb" :style="{'bottom': (volume/(100-11))*100 + '%'}"></div>
          <div class="volume-line" :style="{'height': (volume/100)*100 + '%'}"></div>
          </div>
 <input type="range" class="volume-range" v-model="volume" min="0" max="100" step="1" orient="vertical"/>
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
        console.log(this.volume)
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
    flex-direction: column-reverse;
    input {
      -webkit-appearance: slider-vertical;
    }
    .range-container {
      position: absolute;
    }
    .mute {
      background: transparent;
      border: none;
    }
    .mute + .range-container {
      opacity: 1;
      visibility: visible;
      transition: opacity .5s ease-in-out;
      bottom: 55px;
      z-index: 12;
      background: rgb(53, 53, 53);
      width: 10px;
      padding: 12px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      input[type='range'][orient='vertical'] {
        width: 4px;
        background: transparent;
        position: relative;
        z-index: 1111;
        &::-webkit-slider-runnable-track {
          -webkit-appearance: none;
          background: transparent;
          width: 8px;
          border-radius: 10px;
          box-shadow: 0 0 0 2px #3D3D4A;
        }
        &::-webkit-slider-thumb {
          width: 30px;
          height: 30px;
          opacity: 0;
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
    .volume-thumb{
      width: 15px;
      height: 15px;
      background: white;
      border: 2px solid #eee;
      position: absolute;
      border-radius: 50%;
      margin: 0 auto;
    }
    .volume-line {
      background-image: linear-gradient(to right, #de13bb, #c60eb1, #af08a6, #98049a, #82008e);
      width: 7px;
      position: absolute;
      left: -1px;
      bottom: 0;
      border-radius: 10px;
    }
  }
</style>
