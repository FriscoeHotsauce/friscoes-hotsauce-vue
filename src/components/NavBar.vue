<template>
  <div>
    <template>
      <v-toolbar>
        <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
          <v-btn v-for="item in linkItems" :key="item.title" :to="item.route" flat>{{ item.title }}</v-btn>
          <v-btn href="/December2019Resume.pdf" target="_blank" flat>Resume</v-btn>
        </v-toolbar-items>
        <v-menu v-if="$vuetify.breakpoint.smAndDown">
          <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-for="item in linkItems" :key="item.title" :to="item.route">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
        <!-- <div>{{ $route.path | Crumbify }}</div> -->
        <v-breadcrumbs v-if="$vuetify.breakpoint.smAndDown" :items="crumbify($route.path)"></v-breadcrumbs>
      </v-toolbar>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavBar",
  data: function() {
    return {
      linkItems: [
        { title: "Home", route: "/home" },
        { title: "About", route: "/about" },
        { title: "Development", route: "/development" },
        { title: "Articles", route: "/articles" }
        // { title: "Resume", route: "/resume" }
      ]
    };
  },
  methods: {
    crumbify: function(path: string) {
      var result: any = [];
      var pathArray = path.split("/");
      pathArray.forEach((item: string, index) => {
        //skip index 0; it's always just a blank string because paths start with a '/', and split creates an entry for that
        if (index != 0) {
          var route: string = "";
          //the way slicing works, you need to add 1 to the current index, the end parameter is exclusive i.e. (1,1) won't select any items, where (1,2) will select the item at index 1 only
          pathArray.slice(1, index + 1).forEach(path => {
            route += "/" + path;
          });
          result.push({
            text: item.charAt(0).toUpperCase() + item.slice(1),
            disabled: index == pathArray.length - 1, //disable breadcrumb for the current page
            href: route
          });
        }
      });
      return result;
    }
  }
});
</script>

<style>
</style>

