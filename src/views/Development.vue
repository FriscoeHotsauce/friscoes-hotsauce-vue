<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs11 md5>
        <h2>Languages</h2>
        <br />
        <v-expansion-panel expand inset>
          <v-expansion-panel-content v-for="language in languages" :key="language.title">
            <template v-slot:header>
              <div>
                <h3>{{ language.title }}</h3>
              </div>
            </template>
            <v-card>
              <v-card-text class="spacer">{{ language.content }}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs1 md1>
        <!-- spacing -->
      </v-flex>
      <v-flex xs11 md5>
        <h2>Frameworks</h2>
        <br />
        <v-expansion-panel expand inset>
          <v-expansion-panel-content v-for="framework in frameworks" :key="framework.title">
            <template v-slot:header>
              <div>
                <h3>{{ framework.title }}</h3>
              </div>
            </template>
            <v-card>
              <v-card-text class="spacer">{{ framework.content }}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs1 md1>
        <!-- spacing -->
      </v-flex>
      <v-flex xs11 md5>
        <br />
        <h2>Build and Source Tools</h2>
        <br />
        <v-expansion-panel expand inset>
          <v-expansion-panel-content v-for="tool in buildTools" :key="tool.title">
            <template v-slot:header>
              <div>
                <h3>{{ tool.title }}</h3>
              </div>
            </template>
            <v-card>
              <v-card-text class="spacer">{{ tool.content }}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs1 md1>
        <!-- spacing -->
      </v-flex>
      <v-flex xs11 md5>
        <br />
        <h2>Diagnostic Tools</h2>
        <br />
        <v-expansion-panel expand inset>
          <v-expansion-panel-content v-for="tool in diagnosticTools" :key="tool.title">
            <template v-slot:header>
              <div>
                <h3>{{ tool.title }}</h3>
              </div>
            </template>
            <v-card>
              <v-card-text class="spacer">{{ tool.content }}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs1 md1>
        <!-- spacing -->
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: function() {
    return {
      languages: [
        {
          title:"Kotlin",
          content:"Our team at SVG uses Kotlin for all of our back-end projects, and it’s been a very pleasant language to use. The collection streams are a huge time saver, data classes are a huge boilerplate reducer, and the built in concurrency makes our apps more efficient."
        },
        {
          title: "Java",
          content:
            "The language I have the most classical training and work experience with. I've been working with Java since 2010."
        },
        {
          title: "Groovy",
          content:
            "I've used Groovy in several supporting roles such as gradle build definitions, but most commonly for testing of all types (unit, integration, and end-to-end)."
        },
        {
          title: "C#",
          content:
            "The language I do almost all of my personal projects in. It's the programming language used by Unity, which is where I  have the most experience with it."
        },
        {
          title: "Javascript",
          content:
            "You simply can't avoid it if you're doing anything involving a web page, I've used it for work and personal projects several times."
        },
        {
          title: "Typescript",
          content:
            "A more strict sibling of Javascript, I've used it during my time with Angular 8 and liked it well enough to use it whenever possible."
        },
        {
          title: "Rust",
          content:
            "Like C but with a compiler that doesn't suck. I like Rust a lot, but the support for the language is a little too light at the moment; I look forward to using it in the future."
        }
      ],
      frameworks: [
        {
          title: "Spring-Boot",
          content:
            "The most popular Java based web framework, I have been working with Spring Boot consistently since 2016. It’s pretty heavyweight, but a solid, reliable platform for web development."
        },
        {
          title: "Angular",
          content:
            "A front-end framework that uses Typescript, rx/js, and the Redux state pattern to build web based applications. We used this framework at Spring Venture Group to build tools that helped agents. It’s a very heavy and very opinionated framework, I prefer Vue for smaller web projects."
        },
        {
          title: "Vue",
          content:
            "This website is built using Vue! A front-end framework that is quick to put up, and offers component-level customization. I got a first taste of Vue at Uberconf, and have been a fan since. I use Vue for personal projects, and hope to find a good use case for it at work."
        },
        {
          title:"Mockk",
          content:"Kotlin’s mock-k testing framework is absolutely top notch. I think it’s better than Mockito and Spock. In combination with Jupiter it’s the easiest framework to set up, the mocking tools are incredibly powerful, and the syntax is a breeze."
        },
        {
          title: "Mockito",
          content:
            "A testing framework for Java that allows developers to mock behaviour of dependencies when writing unit tests. I got a huge dose of Mockito when I was working at Iowa State where we didn’t deploy as often, so unit tests were critical for making sure our deployments worked."
        },
        {
          title: "JUnit",
          content:
            "A core testing framework for Java that makes it easy to run tests and write assertions. When used in combination with Mockito, I am able to test units of code more concisely. "
        },
        {
          title: "Spock",
          content:
            'A testing framework that uses Groovy; We used this extensively at Spring Venture Group for testing. It has an easily readable "Given, When, Then" notation that automatically generates human readable test reports. Spock also provides powerful tools for iterating over several similar unit tests with different parameters. It’s my favorite framework to write tests in for JVM languages.'
        }
      ],
      buildTools: [
        {
          title: "Git",
          content:
            "The ultimate code versioning tool. I know Git very well. I have taken the time to learn the Git command line and am comfortable resolving merge conflicts without the need for visual tools, though I prefer IntelliJ’s merge resolution tools."
        },
        {
          title: "Docker",
          content:
            'The #1 choice for building containers, all of our applications at Spring Venture Group build into docker containers. Our earlier projects required a more intimate knowledge of Docker, so I picked it up in my first year or so. I’ve gone on to do some personal projects with Docker, including hosting a dedicated server for the game "Don’t Starve Together".'
        },
        {
          title:"AWS CDK",
          content:"Amazon’s updated replacement for Cloud Formation, our DevOps team at Spring Venture Group opened up the CDK to the development teams and I was able to provision new applications, the necessary permissions and roles, Kinesis and S3 resources for a new application I worked on."
        },
        {
          title:"AWS Kinesis",
          content:"I’ve used Kinesis in both a producer and consumer context, and provisioned the necessary resources with the AWS CDK. It’s a powerful tool, with a lot of ecosystem-specific setup, which can be challenging. I also did a proof of concept with it before the Spring Framework open source libraries caught up, and am familiar with the intricacies of Sharding and message publishing."
        },
        {
          title: "AWS CodePipeline",
          content:
            "Spring Venture Group moved away from Jenkins while I was working there, and instead began to use CodePipeline for its close integration with ECS (where our code is hosted)."
        },
        {
          title: "Jenkins",
          content:
            "I’ve used Jenkins as a user, and have also helped develop a DSL for Jenkins at Best Buy. I’m impressed by its extensibility, but the official support leaves something to be desired. It requires significant knowledge and investment to use, but is very powerful when leveraged properly."
        }
      ],
      diagnosticTools: [
        {
          title: "Insomnia",
          content: "Insomnia is effectively a newer, sexier Postman. I use it to test out new endpoints locally, update configurations in staging environments, and test calls to 3rd party APIs to suss out any quirks before I begin development."
        },
        {
          title: "Splunk",
          content:
            "The behemoth log aggregator, trend analyzer, system monitor, on-call delegator, and everything else. We used Splunk for all of those things at SVG. Splunk is big, slow, and mighty powerful."
        },
        {
          title: "Graylog",
          content:
            "A no-frills logging aggregator that I really liked using. We used it at SVG before moving to splunk. It’s quick, the layout is easy to use and utilitarian. It’s not as pretty as splunk, but also much faster."
        },
        {
          title: "AWS Cloudwatch",
          content:
            "We used AWS Cloudwatch Logs to monitor our applications and debug issues that were specific to the container. Tools like Graylog and Splunk only aggregate the logs you tell them to aggregate, and Cloudwatch just has a dump of everything that happens inside your docker container. Includes the terrible AWS user interface for no added fee!"
        },
        {
          title: "Logging Utilities",
          content:
            "Again, tools like Graylog and Splunk only aggregate the logs you tell them to aggregate. I have experience working with and configuring log appenders via logback files, and logging frameworks like SLF4J (Simple Logging Facade for Java)."
        }
      ]
    };
  }
});
</script>

<style>
.spacer {
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
}
</style>