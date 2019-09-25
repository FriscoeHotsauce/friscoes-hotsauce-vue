<template>
  <v-toolbar>
    <v-toolbar-items>
      <v-btn flat to="/home"> Home </v-btn> <!-- using `to` here automatically flags the button as selected if you are on that route, that's hella dope -->
      <v-btn flat to="/about"> About </v-btn>
      <v-btn flat to="/dev"> Development </v-btn>
      <v-btn flat to ="/articles">Articles</v-btn>
      <v-btn flat> 
        <div>Resume</div>
        <div><sub>&nbsp; (coming soon!)</sub></div>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name:"NavBar"
})
</script>

<style>
</style>

