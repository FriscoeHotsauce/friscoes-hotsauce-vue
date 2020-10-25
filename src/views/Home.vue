<template>
  <v-container>
    <br />
    <v-card>
      <v-card-title>
        <h1>Welcome!</h1>
      </v-card-title>
    </v-card>
    <br />
    <v-card>
      <v-card-title>
        <h2>About this site</h2>
      </v-card-title>
      <v-card-text>
        <div>
          <p>
            &emsp;The purpose of this site is to be a place to learn about me,
            Ian Harris. It is not intended to be a resume (although you can find
            one here), but instead a place where I can go into more detail about
            my work experience, interests and hobbies as well as showcase
            projects I have worked on.
          </p>
        </div>
      </v-card-text>
    </v-card>
    <br />
    <v-card>
      <v-card-title>
        <h3>Quick Links</h3>
      </v-card-title>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 v-for="link in links" :key="link.title">
            <QuickLink :title="link.title" :description="link.description" :linkUrl="link.linkUrl" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Vue from "vue";
import QuickLink from "../components/QuickLink.vue";
export default {
  name: "Home",
  data: function() {
    return {
      links: [
        {
          title: "Github",
          description: "Check out the code for my projects",
          linkUrl: "https://github.com/FriscoeHotsauce"
        },
        {
          title: "LinkedIn",
          description: "Check out my professional profile",
          linkUrl: "https://www.linkedin.com/in/ian-harris-02384182/"
        },
        {
          title: "Itch.io",
          description: "Check out games I've worked on in my free time",
          linkUrl: "https://friscoehotsauce.itch.io/"
        }
      ]
    };
  },
  components: {
    QuickLink
  }
};
</script>

<style>
h1 {
  font-size: 250%;
}

.center-spacer {
  background-color: #e0e0e0;
  padding-top: 10px;
  padding-bottom: 10px;
}
.spacer {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>