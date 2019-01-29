<template>
      <div class="login-container">
        <div class="input-field">
          <label for="">Username</label>
          <input type="text" v-model="form.name">
        </div>
        <div class="input-field">
          <label for="">Email</label>
          <input type="email" v-model="form.email">
        </div>
        <div class="input-field">
          <label for="">Passwors</label>
          <input type="password" v-model="form.password">
        </div>
        <div class="input-field">
          <button type="submit" @click="signUp" class="login-btn">Sing Up</button>
        </div>
      </div>
</template>

<script>
  import Cookies from 'js-cookie'
    export default {
        name: "signUp",
      data() {
          return {
            form : {
              name: "",
              email: '',
              password: ''
            }
          }
      },
      methods: {
          signUp() {
            this.$axios.post('client', this.form)
              .then(res => {
                Cookies.set('token', res.data['api_token'], {expires: 365});
                this.$store.commit('setUser', res.data)
                // this.$router.push('/')
              })
          },
      }
    }
</script>

<style scoped>

</style>
