<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 v-for="article in things" :key="article.title">
        <ArticleCard
          :title="article.title"
          :description="article.description"
          :linkUrl="article.linkUrl"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ArticleCard from "../components/ArticleCard.vue";

export default Vue.extend({
  data: function() {
    return {
      things: [
        // {
        //   title: "10 reasons why Uberconf is a waste of money",
        //   description:
        //     "A scathing review about the inexperience and drastic disparity involved in a conference that is a lot younger than they'd like you to believe",
        //   linkUrl: "/articles/uber-conf-bad"
        // },
        // {
        //   title: "10 reasons why you should send your developers to Uberconf",
        //   description:
        //     "A glowing review about the life lessons and helpful insights gained from attending a professional conference",
        //   linkUrl: "/articles/uber-conf-good"
        // },
        // {
        //   title: "Example Article",
        //   description: "Showing off some cool things you can do with Vue",
        //   linkUrl: "/articles/example-article"
        // },
        {
          title: "Tyler & Jolene's Whisk(e)y Tastings",
          description:
            "A Whisk(e)y guide for a friend's wedding, including details about each sample.",
          linkUrl: "/tasting"
        },
        {
          title: "Github Repo Search",
          description:
            "A brief coding challenge using the AXIOS rest client to pull the most popular projects from Github by language.",
          linkUrl: "/articles/github-projects"
        }
      ]
    };
  },
  components: {
    ArticleCard
  }
});
</script>
