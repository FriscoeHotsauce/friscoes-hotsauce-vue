<template>
  <v-app>
    <NavBar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Vue from "vue";
import Home from "./views/Home";
import Vuetify from "vuetify/lib";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {
      //
    };
  }
};
</script>
