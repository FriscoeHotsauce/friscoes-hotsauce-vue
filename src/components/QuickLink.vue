<template>
  <v-card class="flexcard" height="100%">
    <v-card-title>
      <h2>{{ title }}</h2>
    </v-card-title>
    <v-card-text>
      <div>
        <p>{{ description }}</p>
      </div>
    </v-card-text>
    <v-spacer class="grow"></v-spacer>
    <v-card-actions>
      <v-btn :href="linkUrl" target="_blank" flat>Check it out</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "QuickLink",
  props: { title: String, description: String, linkUrl: String }
});
</script>

<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>