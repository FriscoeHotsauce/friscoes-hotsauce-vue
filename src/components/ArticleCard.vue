<template>
  <v-card>
  <v-card-title primary-title>
    <h3>{{ title }}</h3>
  </v-card-title>
  <v-card-text>
    {{ description }}
  </v-card-text>
  <v-card-actions>
    <v-btn flat :to=linkUrl>
      Read More
    </v-btn>
  </v-card-actions>
</v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name:'ArticleCard',
  props: { title: String, description: String, linkUrl: String}
})
</script>

