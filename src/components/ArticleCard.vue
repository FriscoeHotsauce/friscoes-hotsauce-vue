<template>
  <v-card height="100%" class="card-outer">
    <v-card-title primary-title>
      <h3>{{ title }}</h3>
    </v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions>
      <v-btn bottom flat :to="linkUrl">Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ArticleCard",
  props: { title: String, description: String, linkUrl: String },
});
</script>

<style scoped>
.card-outter {
  position: relative;
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>