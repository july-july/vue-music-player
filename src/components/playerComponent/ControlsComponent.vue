<template>
  <div>
    <div class="control">
      <button @click="prev" :class="{disabled: disable === true}"><i
        class="fa fa-backward"></i></button>
      <button v-if="!sound" @click="play"><i class="fa fa-play"></i></button>
      <button v-else @click="pause" ><i class="fa fa-pause"></i></button>
      <button @click="next" :class="{'disabled': disable === true}"><i class="fa fa-forward"></i></button>
    </div>
  </div>

</template>

<script>


  export default {
    name: "ControlsComponent",
    data () {
      return {
        disable: false,
        time: ""
      }
    },
    props: ['tracks', 'timer', 'next', 'prev', 'sound'],
    methods: {
      pause() {
        this.$emit('pause')
        this.$store.commit('changeSound', false)
      },

      play() {
        this.$emit('play')
        this.$store.commit('changeSound', true)
      },

    },
    computed: {
      currentPlay() {
        return this.$store.state.currentTrack
      },
    }
  }
</script>
