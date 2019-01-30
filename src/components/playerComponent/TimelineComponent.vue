<template>
  <div id="timeline">
    <div class="timing">
            <span id="current-time">
              <span v-if="Math.floor(startTime/60) < 10">0</span>{{Math.floor(startTime/60)}}:<span
              v-if="startTime%60 < 10 ">0</span>{{startTime%60}}</span>
      <span id="total-time">
              <span v-if="Math.floor(tracks[currentPlay].duration/60)<10">0</span>{{Math.floor(tracks[currentPlay].duration/60)}}:<span
        v-if="Math.floor(tracks[currentPlay].duration%60)<10">0</span>{{tracks[currentPlay].duration%60}}</span>
    </div>
    <input type="range" min="0" :max="tracks[currentPlay].duration" step="1" @change="seek(startTime, true)" v-model="startTime"/>
  </div>
</template>

<script>
    export default {
        name: "TimelineComponent"
    }
</script>

<style scoped>

</style>
