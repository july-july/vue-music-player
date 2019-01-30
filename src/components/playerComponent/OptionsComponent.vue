<template>
  <div class="options">
    <button :class="{active: repeatOne}" @click="repeatOne= !repeatOne"><img
      src="https://music.yandex.ru/i/DzKyWD6KqIX8_M1MQHEp8piq-s.svg" alt=""></button>
    <button type="button" @click="like" v-show=""><i class="fa fa-heart-o"></i></button>
  </div>
</template>

<script>
    export default {
        name: "OptionsComponent"
    }
</script>

<style scoped>

</style>
