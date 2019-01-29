<template>
    <div>
      <!--<button type="button" v-show="filter_name === ''"  @click="sortByNameDown">Sort Down</button>-->
      <!--<button type="button" v-show="filter_name === true"  @click="sortByNameUp">Sort up</button>-->
      <!--<button type="button"  @click="sortByNameDuration">Sort dur</button>-->
    </div>
</template>

<script>
    export default {
        name: "FilterSong",
      data() {
          return {
            sort_param : 'titleDown',
            filter_name : ''
          }
      },

      methods: {

      },
    }
</script>

<style scoped>

</style>
