<template>
  <div class="options">
    <a :class="{active: repeatOne}" @click="changeRepeatOne"><img
      src="https://music.yandex.ru/i/DzKyWD6KqIX8_M1MQHEp8piq-s.svg" alt=""></a>
    <a @click="changeRandom"><img class="filter-white" src="https://music.yandex.ru/i/HNICX1yauAmKAl4GNIcKLa82VLk.svg" alt=""></a>
    <!--<button type="button" @click="like" v-show=""><i class="fa fa-heart-o"></i></button>-->
  </div>
</template>

<script>
  export default {
    name: "OptionsComponent",
    data () {
      return {
        repeatOne: this.$store.state.repeatOne,
      }
    },
    methods: {
      changeRepeatOne () {
        this.$store.commit('changeRepeatOne')
      },
      changeRandom () {
          this.$store.commit('randomOn')
      }

    }
  }
</script>

<style lang="scss">

</style>
