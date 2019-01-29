<template>
  <div class="auth player-content">
    <div class="auth-back"></div>
    <div class="auth-header">
      <a :class="{'active' : auth==='login'}" @click="changeAuth('login')">Login</a>
      <a :class="{'active' : auth==='signUp'}" @click="changeAuth('signUp')">SignUp</a>
    </div>
    <div class="auth-container">
      <sign-switch></sign-switch>
    </div>


  </div>
</template>

<script>
  import signSwitch from './signSwitch'
  import {EventBus} from "../../assets/bus";

  export default {
    name: "AuthComponent",
    components: {signSwitch},
    data() {
      return {
        auth: 'login'
      }
    },
    methods: {
      changeAuth(sign) {
        EventBus.$emit('bind-call-auth', sign);
        this.auth = sign
      }
    }
  }
</script>

<style>
  .auth {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    flex-direction: column;

  }
  .auth-container {
    color: white;
    background: rgba(255, 255, 255, 0.16);
    height: 350px;
    border: .5px solid rgba(255, 255, 255, 0.45);
    width: 278px;
    margin: 30px 10px;
    position: relative;
  }
  .auth-header {
    color: white;
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: 100;
    position: relative;
  }
  .auth-back{
    background: url("https://png.pngtree.com/element_origin_min_pic/16/07/06/15577cb2218b1b9.jpg");
    background-size: 297%;
    position: absolute;
    z-index: 0;
    width: 100%;
    filter: blur(3px);
    height: 100%;
  }
  .auth-header a{
    padding: 10px;
    border-bottom: 1px solid transparent;
    transition: all .5s linear;
  }
  .auth-header a.active {
    border-bottom: 1px solid rgba(255, 255, 255, 0.67);
  }
</style>
