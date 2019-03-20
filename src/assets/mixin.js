// export const mixin = {
//   data() {
//     return{
//       currentPlay: 0
//     }
//   }
// }
import youtube from 'vue-youtube'
export const mixin = {
  components: {
    youtube
  },
  computed : {
    player () {
      return this.$parent.$refs.youtube.player
    }
  }
}
