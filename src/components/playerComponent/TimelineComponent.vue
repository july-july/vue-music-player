<template>
  <div id="timeline">
    <div class="timing">
            <span id="current-time">
              <span v-if="Math.floor(start/60) < 10">0</span>{{Math.floor(start/60)}}:<span
              v-if="start%60 < 10 ">0</span>{{start%60}}</span>
      <span id="total-time">
              <span v-if="Math.floor(tracks[currentPlay].duration/60)<10">0</span>{{Math.floor(tracks[currentPlay].duration/60)}}:<span
        v-if="Math.floor(tracks[currentPlay].duration%60)<10">0</span>{{tracks[currentPlay].duration%60}}</span>
    </div>
    <div class="timer-line">
      <div class="progress-line" :style="{'width': (start/tracks[currentPlay].duration)*100 + '%'}"></div>
      <input type="range" min="0" :max="tracks[currentPlay].duration" step="1" @change="seekTime(currentSeconds)"
             v-model="currentSeconds"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TimelineComponent",
    data() {
      return {
        time: "",
        currentSeconds: null
      }
    },
    props: ['tracks', 'start'],
    computed: {
      currentPlay() {
        return this.$store.state.currentTrack
      },
    },
    methods: {
      seekTime(seconds) {
        this.currentSeconds = seconds;
        this.$emit('seek', this.currentSeconds)
      },
    }
  }
</script>

<style lang="scss">
  .timer-line {
  /*  top: -12px;*/
    position: relative;
    width: 100%;
    height: 3px;
    background: white;
  }

  .progress-line {
    height: 3px;
    position: relative;
    background-image: linear-gradient(to right, #de13bb, #c60eb1, #af08a6, #98049a, #82008e);
    z-index: 1;
  }

  #timeline {
   margin-top: 20px;
    margin-bottom: 20px;
    .timing {
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
       -webkit-box-pack: justify;
       -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 0 10px;
      color: white;
      font-size: 12px;
      margin-bottom: 10px;
     /* position: absolute;
      top: -33px;*/
    }
    input[type='range'] {
      position: absolute;
      left: 0;
      width: 100%;
       -webkit-appearance: none;
      height: 3px;
      top: 0;
      cursor: grab;
      background: transparent;
      z-index: 11;
      &:focus {
        outline: none;
      }
      &::-webkit-slider-thumb {
        /*background: transparent !important;*/
        height: 1px;
         -webkit-appearance: none;
        width: 1px;
      }
    }
  }
</style>
