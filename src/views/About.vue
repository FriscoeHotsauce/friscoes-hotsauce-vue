<template>
  <v-container grid-list-md>
    <!-- <div class="about">
      <h1>About Me</h1>
    </div>
    <hr/>
    <br/> -->
    <v-layout row wrap>
      <v-flex xs5>
        <h2>Work History</h2>
        <br/>
        <div>
          <h3>Iowa State University - <i>Software Development Intern</i></h3>
          <h4>February 2016 - December 2017</h4>
          <br/>
          <p>&emsp;{{ iowaStateContent }}</p>
        </div>
        <br/>
        <div >
          <h3>Spring Venture Group - <i>Software Engineer I</i></h3>
          <h4>January 2018 - May 2019</h4>
          <br/>
          <p>&emsp;{{ svgOneContent }}</p>
        </div>
        <br/>
        <div>
          <h3>Spring Venture Group - <i>Software Engineer II</i></h3>
          <h4>May 2019 - Present</h4>
          <br/>
          <p>&emsp;{{ svgTwoContent }}</p>
        </div>
      </v-flex>
      <v-flex xs1>
      </v-flex>
      <v-flex xs5>
        <h2>Education</h2>
        <br/>
        <div>
          <h3>Iowa State University - <i>Bachelors of Science</i></h3>
          <h4>Software Engineering - December 2017</h4>
          <br/>
          <p>&emsp; <span v-html="isuEducationContent"></span></p>
        </div>
        <br/>
        <div>
          <h3>Überconf X</h3>
          <h4>July 15-19th 2019</h4>
          <br/>
          <p>&emsp; {{uberconfEducationContent}}</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
  .spacer {
    margin-top: 5px;
    margin-right: 20px;
    margin-bottom: 5px;
    margin-left: 5px;
  }
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: function(){
    return {
      iowaStateContent:"This position was an extremely valuable one that introduced me to the world of enterprise software. My traditional schooling lacked a lot of important curriculum about web frameworks, build tools, testing, and user interfaces, all of which I got experience with during my time working at Iowa State. I worked part time during the school year, and full time during the summers where I was able to work on administrative tools used by faculty and staff at Iowa State.",
      svgOneContent:"Thanks to my experience at Iowa State, I was able to hit the ground running at Spring Venture group. Within a few short months, I was already tackling projects by myself, and would continue to do so for the next year and some change. The first year was a struggle of rapid change and development where the company experienced growing pains after doubling their employee count, and tripling development staff. This provided me an opportunity to stand out and take charge on several important projects, which would see me promoted in May of 2019.",
      svgTwoContent:"After being promoted in 2019, I continued to work on important company initiatives such as delivering a tool to help our agents underwrite clients; the first UI tool SVG had built in-house. I also continued to work on projects where I had a lot of autonomy, in particular projects that required a lot of research and design such as optimizing data syncing with Salesforce. It’s hard to say what will happen in the future, but I’m sure I’ll still be working on projects with a degree of autonomy, and continuing to work with my team to deliver more features for our UI tools.",
      isuEducationContent:"My time at Iowa State was important for my growth as a human being, as college usually is. I struggled in my first few years to reach my academic goals, but that struggle allowed me to finally realize <i>how</i> to learn. I also learned a lot from the fraternity I joined, Kappa Sigma, that helped me get a realistic view of the world by interacting with so many different types of individuals. Overall, my time at ISU was a positive one that I look back on fondly, but I find myself more interested in what comes next as I eagerly await the future.",
      uberconfEducationContent: "Überconf is a conference put on by No Fluff, Just Stuff (NFJS), and was held in Denver Colorado. Spring Venture Group sent me and 3 of my peers to attend and soak up as much info as we could. During the conference I got to attend a full day workshop on Vue (which inspired an overhaul of my personal website), and got to experience the world of development outside of my current job. The conference was pretty rigorous and we were in seminars for most of the days we attended. I took this opportunity to go to as many talks about architecture as possible, since my team at the time was without an architect. Overall, it was a good chance to absorb and learn about the industry as a whole."
    }
  }
})
</script>