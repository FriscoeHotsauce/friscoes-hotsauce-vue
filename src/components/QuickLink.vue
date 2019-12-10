<template>
  <v-card>
    <v-card-title>
      <h2>{{ title }}</h2>
    </v-card-title>
    <v-card-text>
      <div>
        <p>{{ description }}</p>
      </div>
      <div>
        <v-btn :href="linkUrl" target="_blank" outlined>Check it out</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "QuickLink",
  props: { title: String, description: String, linkUrl: String }
});
</script>