<template>
  <v-app>
    <NavBar/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Home from './views/Home'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    Home, NavBar
  },
  data () {
    return {
      //
    }
  }
}
</script>
