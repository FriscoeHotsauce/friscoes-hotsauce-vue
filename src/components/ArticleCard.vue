<template>
  <v-card class="flexcard" height="100%">
    <v-card-title primary-title>
      <h3>{{ title }}</h3>
    </v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-spacer class="grow"></v-spacer>
    <v-card-actions>
      <v-btn flat :to="linkUrl">Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ArticleCard",
  props: { title: String, description: String, linkUrl: String }
});
</script>

<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>