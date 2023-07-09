<template>
  <v-container class="max-width" align-center justify-center>
    <v-layout>
      <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
        <v-item v-for="section in sections" :key="section.title" v-slot:default="{active, toggle}">
          <div>
            <v-btn :input-value="active" icon @click="toggle">
              <!-- <v-icon>mdi-record</v-icon> -->
              <span>{{section.title | FirstLetter}}</span>
            </v-btn>
          </div>
        </v-item>
      </v-item-group>

      <v-flex>
        <v-window v-model="window" class="elevation-1" vertical>
          <v-window-item v-for="section in sections" :key="section.title">
            <v-card flat>
              <v-card-text>
                <v-layout align-center mb-4>
                  <v-avatar color="grey" class="mr-4"></v-avatar>
                  <strong class="title">{{ section.title }}</strong>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </v-layout>
                <hr />
                <p
                  v-for="paragraph in section.paragraphs"
                  :key="paragraph"
                  class="margin"
                >{{ paragraph }}</p>
                <hr />
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.margin {
  font-family: Helvetica, Arial, sans-serif;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.max-width {
  max-width: 850px;
}
</style>



<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: function() {
    return {
      window: 0,
      sections: [
        {
          title: "Introduction",
          paragraphs: [
            "I decided to refresh my memory on the Fire Emblem franchise by playing the original North American release of the GBA title, The Binding Blade. It’s the game that introduced me to the franchise, and I’ve been a fan ever since. Going into Three Houses, I didn’t have much in the way of expectation. I had avoided a lot of the media around the game to go in with a clean slate. Overall, I feel like the game is moving the franchise in a good direction, but has several odd design choices that hold it back from being best in class; but I also can’t seem to stop playing it."
          ]
        },
        {
          title: "Difficulty",
          paragraphs: [
            "Previous games, in particular the first title, had a reputation of being rather tough and I usually played through them on the Normal difficulty; a healthy challenge in the older games. One of the first things I noticed about Three Houses is that the game is not particularly challenging. I never really had a problem with the battles, and for the first dozen hours or so just chalked it up to being eased into the game. I quickly realized though, that it wasn’t an accident, within a few missions my units were sprinting down the battlefield, clearing enemies with ease.",
            "Simply put, I was not having fun, and decided to restart the game on the Hard difficulty;  I mention this because it really affected my enjoyment of the game in a positive way. Missions on Hard are time gated so you can’t repeat them, strengths and weaknesses between units have been sharpened, and I actually had some tense nail-biting moments where I couldn’t keep an ally alive, or I barely saved one of my units. If you have experience with the franchise, or you’ve played games like XCOM, I would recommend starting on the Hard difficulty. You can turn the difficulty down if it’s too much, but you can’t turn the difficulty up if you’re not feeling challenged."
          ]
        },
        {
          title: "Story",
          paragraphs: []
        }
      ]
    };
  },
  filters: {
    FirstLetter(value: string) {
      return value.substring(0, 2);
    }
  }
});
</script>
