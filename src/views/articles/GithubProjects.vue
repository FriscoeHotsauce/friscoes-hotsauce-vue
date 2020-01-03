<template>
  <v-container>
    <h1>Github Repo Search</h1>
    <div>{{ descriptionText }}</div>
    <!-- <p>{{ languages }}</p> -->
    <v-autocomplete :items="languages" label="Languages" @change="findReposByLanguage"></v-autocomplete>
    <div v-if="displayError">
      {{ errorMessage }}
      <div>
        <v-btn text flat small color="error" @click="closeErrors()">close</v-btn>
      </div>
    </div>
    <div v-if="loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <v-layout row wrap>
      <v-flex md12 v-for="project in results" :key="project.linkUrl" class="spacer">
        <GithubProjectSummary
          :index="project.ranking"
          :name="project.projectName"
          :owner="project.ownerName"
          :description="project.description"
          :linkUrl="project.linkUrl"
          :stars="project.stars"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import GithubProjectSummary from "../../components/GithubProjectSummary.vue";

export default Vue.extend({
  data: function() {
    return {
      results: [] as GithubSummary[],
      languages: [] as string[],
      errorMessage: "" as string,
      displayError: false,
      loading: false,
      descriptionText:
        "A quick demonstration using the AXIOS rest client to pull the most popular Github projects by language."
    };
  },
  //use the lifecycle hook of "mounted" to load in a list of languages from github when this component is loaded
  mounted: function() {
    axios
      .get("https://api.github.com/languages")
      .then(
        response =>
          (this.languages = response.data.map((language: any) => language.name))
      )
      .catch(error => {
        this.errorMessage =
          "An error occurred fetching the list of languages from the Github API";
        this.displayError = true;
      });
  },
  components: {
    GithubProjectSummary
  },
  methods: {
    findReposByLanguage: function(language: string) {
      //some languages use special characters (i.e. C#); encode them with AXIOS so the URI works correctly
      let encodedLanguage: string = encodeURIComponent(language);
      //clear the results area so the loading spinner is the only thing on screen
      this.results = [] as GithubSummary[];
      this.displayError = false;
      this.loading = true;

      axios
        .get(
          "https://api.github.com/search/repositories?q=language:" +
            encodedLanguage +
            "&sort=stars&order=desc"
        )
        .then(response => {
          //if we have results...
          if (response.data.items.length && response.data.items.length != 0) {
            this.results = response.data.items
              .slice(0, 5) //grab the first 5 items, pre-sorted
              .map((repo: any, index: number) => {
                //map only the values we want to display to a defined object
                return <GithubSummary>{
                  ranking: index,
                  projectName: repo.name,
                  ownerName: repo.owner.login,
                  description: repo.description,
                  linkUrl: repo.html_url,
                  stars: repo.stargazers_count
                };
              });
          } else {
            //Display a message if there are no results; github recognizes some languages that don't have any repositories (or public repositories anyway)
            this.errorMessage = "No results returned for language " + language;
            this.displayError = true;
          }
        })
        .catch(error => {
          this.errorMessage =
            "An error occurred pulling repositories for the language " +
            language;
          this.displayError = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    closeErrors: function() {
      this.displayError = false;
    }
  }
});

//A helper interface to uniformly map items we want to display
interface GithubSummary {
  ranking: number;
  projectName: string;
  ownerName: string;
  description: string;
  linkUrl: string;
  stars: number;
}
</script>

<style>
.spacer {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
