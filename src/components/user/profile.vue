<template>
  <div class="player-content profile">
    <div class="profile-back">

    </div>
    <div class="profile-head">
      <div class="user-info">
        <span>Admin</span>
        <span>user@user.ru</span>
      </div>
      <div class="user-img">
        <img src="https://avatars.yandex.net/get-music-content/34131/70947499.a.3179720-1/200x200" alt="">
      </div>
    </div>
    <div class="profile-body">
      <ul class="menu">
        <li>AllMusic</li>
        <li>Favourites</li>
        <li>Artists</li>
        <li>Albums</li>
        <li>Player</li>
        <li>Settings</li>
      </ul>
      <ul class="user-settings">
        <li>
          <button type="button" @click="signOut" class="sign-out-btn">
            Sign out
          </button>
          <button type="button" @click="getUser">fdfdsfdsfds</button>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  export default {
    name: "plofile",
    data() {
      return {
          user_info: ''
      }
    },
    computed: {

    },
    methods : {
      signOut () {
        this.$store.commit('setUser', null)
        Cookies.remove('token');
        this.$router.push('/login')
      },
      getUser () {
        this.$axios.post('login')
          .then(res => {
            this.user_info = this.$store.state.user
          })


        console.log()
      }
    }
  }
</script>

<style>
.profile-back {
  background-image: linear-gradient(to right, #002359, #022b69, #05347a, #0a3d8b, #0e469d);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  filter: blur(6px);
}
.profile-body, .profile-head{
  z-index: 1;
}
  .sign-out-btn{
    background: transparent;
    padding: 10px;
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    font-weight: 300;
    display: block;
    width: 240px;
    border: 1px solid rgba(255, 255, 255, 0.42);
    margin: 0 auto;
  }
  .profile {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start !important;
    /*background-image: linear-gradient(to right, #002359, #022b69, #05347a, #0a3d8b, #0e469d);*/
  }

  .profile-head {
    height: 160px;
    /*background-image: linear-gradient(to right, #002359, #022b69, #05347a, #0a3d8b, #0e469d);*/
    width: 100%;
    display: flex;
    justify-content: center;
    color: #eee;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid rgba(244, 244, 244, 0.36);
  }

  .user-img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }

  .user-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .user-info {
    font-weight: 300;
    width: 180px;
    text-align: left;
  }

  .user-info span {
    display: block;
    font-size: 12px;
  }

  .user-info span:first-of-type {
    font-size: 14px;
  }

  .profile-body {
    width: 100%;

  }

  .profile-body ul.menu, .user-settings {
    list-style: none;
    margin: 0;
    color: white;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(244, 244, 244, 0.36);
  }
.menu{
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
  .user-settings {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding-left: 0;
  }

  .profile-body li {
    padding: 20px 0;
    text-align: left;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 300;
  }
</style>
