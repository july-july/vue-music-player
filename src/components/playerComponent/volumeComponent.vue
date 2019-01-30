<template>
    <div>
      <span class="volume" style="color: white">
      <i class="fa fa-volume-up"></i>
      <input type="range" class="volume-range" v-model="volume" min="0" max="100" step="1"/>
      <i class="fa fa-volume-off" @click="mute"></i>
      </span>
      <!--<youtube  ref="youtube"></youtube>-->
    </div>
</template>

<script>
  import VueYoutube from 'vue-youtube'
  // import {mixin} from '../../assets/mixin'
    export default {
      name: "volumeComponent",
      data () {
        return {
          volume: 50
        }
      },
      // mixins: [mixin],
      props: ['player'],
      components: {
        VueYoutube
      },
      computed: {
        player () {
          return this.$refs.youtube.player
        }
      },
      watch: {
        volume: function () {
          this.player.setVolume(this.volume)
          console.log(this.volume)
        }
      },
      methods : {
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

<style scoped>

</style>
