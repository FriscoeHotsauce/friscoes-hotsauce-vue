<template>
  <v-container>
    <h1>GMTK2020 Game Jam - Buildifactory</h1>
    <br />
    <h2>About</h2>
    <br />
    <div>
      Buildifactory was my submission to the
      <a href="https://itch.io/jam/gmtk-2020"
        >Game Maker’s Toolkit (GMTK) 2020 Game Jam
      </a>
      hosted on Itch.io.
      {{ descriptionText }}
    </div>
    <br />
    <h2>Play</h2>
    <br />
    <div>
      WebGL build coming soon, in the mean time, check out my
      <a href="https://friscoehotsauce.itch.io/buildifactory"
        >Itch.io page about it</a
      >
    </div>
  </v-container>
</template>

<style scoped>
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: function () {
    return {
      descriptionText:
        "Contestants had 48 hours over the weekend to develop and submit a game. I’ve dabbled with video games, specifically Unity, since my sophomore year in college and this is the first game I’ve actually completed. This was a particularly fun experience because it forced me to skip a lot of the steps I usually do like create an elaborate design documentation. Instead it’s all about rapid prototyping and I’m proud to say that when my prototype was finished I had something that was pretty fun. The game didn’t win any awards or anything but it definitely taught me a lot and helped me fill a gap in my Unity knowledge about UI. And at the end of the day it’s a project I’m proud of and I’d be honored if you played it.",
    };
  },
});
</script>