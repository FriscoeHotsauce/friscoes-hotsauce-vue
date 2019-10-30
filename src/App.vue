<template>
  <v-app>
    <NavBar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import Vuetify from "vuetify/lib";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    Home,
    NavBar
  },
  data() {
    return {
      //
    };
  }
};
</script>
