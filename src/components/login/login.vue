<template>
  <div class="login-container">
    <div class="input-field">
      <label>Email</label>
      <input type="email" v-model="user.email" placeholder="Enter your e-mail" required>
    </div>
    <div class="input-field">
      <label>Password</label>
      <input type="password" v-model="user.password" placeholder="Enter your password" required>
    </div>
    <div class="input-field">
      <button type="submit" @click="login" class="login-btn">Login</button>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  export default {
    name: "login",
    data() {
      return {
        user: {
          email: '',
          password: ''
        },

      }
    },
    methods: {
      login() {
        this.$axios.post('login', this.user)
          .then(res => {
            this.$store.commit('setUser', res.data.user);
            Cookies.set('token', res.data.user.api_token);
            this.$router.push('/')
          })
      }
    }
  }
</script>

<style>
  .login-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    font-family: "Roboto", sans-serif;
  }

  .input-field {
    margin: 10px 0;
    text-align: left;
  }

  .input-field input {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.62);
    height: 40px;
    width: 100%;
    color: #fff;
    font-size: 14px;
    text-align: center;

  }

  .input-field label {
    font-size: 13px;
    margin-bottom: 5px;
    display: block;
    text-transform: uppercase;
  }

  .input-field input:focus {
    outline: none;
  }

  .login-btn {
    background: transparent;
    padding: 10px;
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    font-weight: 500;
    display: block;
    width: 240px;
    border: 1px solid rgba(255, 255, 255, 0.42);

  }

  button.login-btn:focus, .login-btn:hover {
    outline: none;
    background: rgba(255, 255, 255, 0.74);
    color: black;
    font-weight: 500;
  }

  button, a, label, input {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    transition: all .5s linear;
  }
</style>
