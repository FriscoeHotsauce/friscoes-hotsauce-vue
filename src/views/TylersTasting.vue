<template>
  <v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>To Tyler and Jolene,</h1>
          <div class="intro-boomer margin">
            <p>{{intro}}</p>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container class="max-width" align-center justify-center>
            <v-layout>
              <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
                <v-item
                  v-for="(step, index) in howTo"
                  :key="step.title"
                  v-slot:default="{active, toggle}"
                >
                  <div>
                    <v-btn :input-value="active" icon @click="toggle">
                      <!-- <v-icon>mdi-record</v-icon> -->
                      <span>{{ index + 1 }}</span>
                    </v-btn>
                  </div>
                </v-item>
                <v-item v-slot:default="{active, toggle}">
                  <div>
                    <v-btn :input-value="active" icon @click="toggle">
                      <!-- <v-icon>mdi-record</v-icon> -->
                      <span>LN</span>
                    </v-btn>
                  </div>
                </v-item>
              </v-item-group>

              <v-flex>
                <v-window v-model="window" class="elevation-1" vertical>
                  <v-window-item v-for="(step, index) in howTo" :key="step.title">
                    <v-card flat>
                      <v-card-text class="height-normalizer">
                        <v-layout align-center mb-4>
                          <v-avatar color="grey" class="mr-4"></v-avatar>
                          <strong class="title">Step {{index+1}}: {{ step.title }}</strong>
                          <v-spacer></v-spacer>
                          <v-btn icon>
                            <v-icon>mdi-account</v-icon>
                          </v-btn>
                        </v-layout>
                        <hr />
                        <p class="margin big-text">{{step.content}}</p>
                        <hr />
                      </v-card-text>
                    </v-card>
                  </v-window-item>
                  <v-window-item>
                    <v-card flat>
                      <v-card-text class="height-normalizer">
                        <v-layout align-center mb-4>
                          <v-avatar color="grey" class="mr-4"></v-avatar>
                          <strong class="title">Last Notes</strong>
                          <v-spacer></v-spacer>
                          <v-btn icon>
                            <v-icon>mdi-account</v-icon>
                          </v-btn>
                        </v-layout>
                        <hr />
                        <div class="margin">
                          <ul>
                            <li v-for="(note, index) in lastNotes" :key="index">{{note}}</li>
                          </ul>
                        </div>
                        <hr />
                      </v-card-text>
                    </v-card>
                  </v-window-item>
                </v-window>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 md5>
          <h2>Box One</h2>
          <br />
          <v-expansion-panel>
            <v-expansion-panel-content v-for="sample in boxOne" :key="sample.title">
              <template v-slot:header>
                <div>
                  <h3>{{ sample.title }}</h3>
                </div>
              </template>
              <v-card>
                <v-card-text class="spacer">
                  <div>
                    <b>Origin:</b>
                    {{ sample.origin }}
                  </div>
                  <br />
                  <div>
                    <b>ABV:</b>
                    {{ sample.abv }}
                  </div>
                  <br />
                  <div>
                    <b>My Notes:</b>
                    {{ sample.summary }}
                  </div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
        <v-flex xs12 md5 offset-md1>
          <h2>Box Two</h2>
          <br />
          <v-expansion-panel>
            <v-expansion-panel-content v-for="sample in boxTwo" :key="sample.title">
              <template v-slot:header>
                <div>
                  <h3>{{ sample.title }}</h3>
                </div>
              </template>
              <v-card>
                <v-card-text class="spacer">
                  <div>
                    <b>Origin:</b>
                    {{ sample.origin }}
                  </div>
                  <br />
                  <div>
                    <b>ABV:</b>
                    {{ sample.abv }}
                  </div>
                  <br />
                  <div>
                    <b>My Notes:</b>
                    {{ sample.summary }}
                  </div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
        <v-flex xs12>
          <!-- add space to bottom of page -->
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<style>
.spacer {
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
}

.big-text {
  font-size: 125%;
}
.margin {
  font-family: Helvetica, Arial, sans-serif;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.max-width {
  max-width: 90%;
  min-width: 70%;
}

.height-normalizer {
  min-height: 230px;
}

.intro-boomer {
  font-size: 120%;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: function() {
    return {
      window: 0,
      intro:
        "I couldn’t think of a good way to format an introduction / tasting guide to whisky that could be easily printed out with your gift, so I decided to do what I’m good at and put it into a web page. I’ve included two Glencairn glasses which are designed for this type of thing, and I hope you two sit down and enjoy this together. If you end up enjoying this experience I’ve also included the 33 glasses of whiskey book, something that has helped me keep track of my favorite whiskeys. Below is a quick guide on how to taste whiskey, as well as an in-depth description of each of the samples.",
      howTo: [
        {
          title: "Observe",
          content:
            "Most whiskeys give away a lot based on look, for example Aberlour has a slight red tint that comes from it being aged in Sherry wine casks. Usually, darker whiskeys will have a more intense or concentrated flavor."
        },
        {
          title: "Smell",
          content:
            "Don’t stick your nose all the way into the glass, simply hover it over the top. Whiskey is a lot stronger than wine, so getting too close can overwhelm your sense of smell."
        },
        {
          title: "Sip and Savor",
          content:
            "Take in just enough whiskey to coat the tongue, swish it around a bit, and let your palate adjust before swallowing. Each sample has something different to offer, so take your time identifying the different flavors."
        },
        {
          title: "Let it finish",
          content:
            "A big part of tasting whiskey is the after taste (often referred to as “linger”), many leave an interesting flavor behind that can vary wildly, so give it a minute to breath before getting back at it."
        }
      ],
      lastNotes: [
        "Serve at room temperature, or slightly below",
        'It’s okay to add a drop or two of water, which will "open up" the flavors',
        "Take a big swig of water between samples to clear your palate",
        "Pouring over ice is fine but will quickly dilute smaller samples and their flavor profile"
      ],
      boxOne: [
        {
          title: "Aberlour 12",
          origin: "Scottish Highlands",
          abv: "40%",
          summary:
            "A smooth, gentle introduction to the world of scotch that has some of the peaty and wood notes you might expect, but is much more sweet and mellow."
        },
        {
          title: "Glenfarclas 12",
          origin: "Scottish Highlands",
          abv: "43%",
          summary:
            "From the same region as Aberlour, but has a much more up-front flavors. It has some raisin or dark fruit flavors up front, and has quite a lot of tannins and oak flavors that linger. This one benefits from a drop of water to help reduce some of that initial sting, but try it without water first to see what I mean!"
        },
        {
          title: "Bowmore 12",
          origin: "Scottish Islay",
          abv: "40%",
          summary:
            "An aggressively smoky whisky, this has a lot of peat that scotland is known for. I included this one explicitly for that reason. You will either really like or hate this one, but it’s an interesting experience either way."
        }
      ],
      boxTwo: [
        {
          title: "1835 Single Barrel Bourbon",
          origin: "Texas",
          abv: "50%",
          summary:
            "This is a HOT whiskey clocking in at 50% ABV. Bourbon is at least 51% corn, so it has a bit of a corn-syrup sweetness to it, but also has a lot of tannins and charred oak that gives it a certain “spiciness”. Might also benefit from a bit of water to cool down that heat, but I really like bourbon for all of the flavors it brings, and this bottle is a good example of that"
        },
        {
          title: "Bainbridge - Battle Point Organic Wheat Whiskey",
          origin: "Washington",
          abv: "43%",
          summary:
            "Similar to bourbon, wheat whiskeys are at least 51% wheat. This whiskey has similar flavors to the 1835 bourbon, but is a lot less aggressive and instead has some of the rasin / dark fruit flavors that some of the Scotches have as it was also aged in sherry barrels."
        },
        {
          title: "Nikka Coffey Malt Whisky",
          origin: "Japan",
          abv: "45%",
          summary:
            "This is a rare treat that I only break out for special occasions. It’s easily the most smooth whisky in the lineup (and the most expensive!). This is a very sweet, vanilla / caramel whisky with some oaky hints. It’s distilled in a “coffey” still (so there are no coffee beans used) and uses malted barley, similar to scotch."
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