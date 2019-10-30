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
          <p>&emsp;The purpose of this site is to be a place to learn about me, Ian Harris. It is not intended to be a resume (although you can find one here), but instead a place where I can go into more detail about my work experience, interests and hobbies as well as showcase projects I have worked on.</p>
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
          <v-flex xs6 md3>
            <v-card>
              <v-card-title>
                <h3>link one</h3>
              </v-card-title>
              <v-card-text>
                <div>
                  <p>link two description</p>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6 md3>
            <v-card>
              <v-card-title>
                <h3>link two</h3>
              </v-card-title>
              <v-card-text>
                <div>
                  <p>link two description</p>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6 md3>
            <v-card>
              <v-card-title>
                <h3>link three</h3>
              </v-card-title>
              <v-card-text>
                <div>
                  <p>link three description</p>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6 md3>
            <v-card>
              <v-card-title>
                <h3>link four</h3>
              </v-card-title>
              <v-card-text>
                <div>
                  <p>link four description</p>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home"
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