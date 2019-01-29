<template>

    <dynamic-component :is="auth"></dynamic-component>

</template>

<script>
  import login from './login'
  import signUp from './signUp'
  import {EventBus} from "../../assets/bus";

  export default {
    name: "signSwitch",
    components: {login, signUp},
    data() {
      return {
        auth: 'login'
      }
    },
    mounted() {
      EventBus.$on('bind-call-auth', (sign) => {
        this.auth = sign
      })
    }
  }
</script>
