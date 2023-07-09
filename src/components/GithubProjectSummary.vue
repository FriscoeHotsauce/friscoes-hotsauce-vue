<template>
  <v-card>
    <v-card-title>
      <h2>
        {{index + 1}}.
        <a :href="linkUrl" target="_blank">{{ name }}</a>
      </h2>
    </v-card-title>
    <v-card-text>
      <div>
        <strong>Owner:</strong>
        {{ owner }}
      </div>
      <div>
        <v-icon>mdi-star</v-icon>
        <strong>Stars:</strong>
        {{ stars }}
      </div>
      <div>
        <strong>Description:</strong>
        {{description}}
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "GithubProjectSummary",
  props: {
    index: Number,
    name: String,
    owner: String,
    description: String,
    linkUrl: String,
    stars: Number
  }
});
</script>