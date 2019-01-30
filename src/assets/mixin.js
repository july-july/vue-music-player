// export const mixin = {
//   data() {
//     return{
//       currentPlay: 0
//     }
//   }
// }
import youtube from 'vue-youtube'
export const mixin = {
  methods : {
    player () {
      return this.$refs.youtube.player
    }
  }
}
