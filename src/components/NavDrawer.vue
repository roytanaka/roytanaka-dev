<template>
  <v-navigation-drawer
    tag="aside"
    dark
    color="primaryDark"
    width="320"
    :value="value"
    @input="$emit('input', $event)"
    app
  >
    <v-btn
      class="ma-1 d-block ml-auto d-lg-none"
      icon
      large
      @click="$emit('input', !value)"
      ><v-icon>fa-times</v-icon></v-btn
    >
    <v-card
      href="/"
      class="profile transparent mt-5 py-3 d-none d-lg-block"
      flat
      tile
      :ripple="false"
    >
      <v-row justify="center">
        <v-avatar size="200">
          <img
            src="/images/roy-tanaka.jpg"
            alt="Roy Tanaka's portait, looking off to the right"
          />
        </v-avatar>
      </v-row>
      <v-card-title class="justify-center mt-4">
        <h1 class="profile profile-name">ROY TANAKA</h1>
        <h2 class="profile profile-title">Frontend Web Developer</h2>
      </v-card-title>
    </v-card>
    <v-card flat tile class="transparent d-md-none d-lg-block">
      <v-card-actions class="justify-center">
        <v-btn
          v-for="social in socials"
          :title="social.title"
          :key="social.icon"
          class="mx-2 white--text"
          icon
          :href="social.link"
          target="_blank"
        >
          <v-icon size="24px">
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-list class="d-lg-none">
      <v-list-item link to="/resume">
        <v-list-item-content>
          <v-list-item-title class="text-center mr-5">Resume</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/projects">
        <v-list-item-content>
          <v-list-item-title class="text-center mr-5"
            >Projects</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/contact">
        <v-list-item-content>
          <v-list-item-title class="text-center mr-5"
            >Contact</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card flat tile class="transparent px-12">
      <v-card-title class="profile">
        Skills
      </v-card-title>
      <v-card-text>
        <v-progress-linear
          light
          class="mb-1"
          color="primaryLight"
          height="28"
          v-for="skill in skills"
          :key="skill.name"
          :value="skill.score"
          :aria-label="`${skill.name} ${skill.score}% score`"
        >
          <template
            ><div class="ml-3 mr-auto font-weight-medium">
              {{ skill.name }}
            </div></template
          >
        </v-progress-linear>
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: Boolean,
    socials: Array,
  },
  data: () => ({
    skills: [
      { name: 'JavaScript (ES6+)', score: 0 },
      { name: 'Vue.js', score: 0 },
      { name: 'Node.js', score: 0 },
      { name: 'React', score: 0 },
      { name: 'HTML', score: 0 },
      { name: 'CSS', score: 0 },
      { name: 'Git', score: 0 },
      { name: 'SQL (MySQL)', score: 0 },
      { name: 'RESTful API', score: 0 },
      { name: 'Photoshop', score: 0 },
      { name: 'Illustrator', score: 0 },
      { name: 'Attention to detail', score: 0 },
      { name: 'Public speaking', score: 0 },
      { name: 'Critical thinking', score: 0 },
    ],
  }),
  created() {
    setTimeout(() => {
      this.skills = [
        { name: 'JavaScript (ES6+)', score: 90 },
        { name: 'Vue.js', score: 80 },
        { name: 'Node.js', score: 75 },
        { name: 'React', score: 60 },
        { name: 'HTML', score: 92 },
        { name: 'CSS', score: 80 },
        { name: 'Git', score: 75 },
        { name: 'SQL (MySQL)', score: 55 },
        { name: 'RESTful API', score: 75 },
        { name: 'Photoshop', score: 80 },
        { name: 'Illustrator', score: 80 },
        { name: 'Attention to detail', score: 90 },
        { name: 'Public speaking', score: 85 },
        { name: 'Critical thinking', score: 90 },
      ];
    }, 500);
  },
};
</script>

<style scoped>
.v-progress-linear {
  transition: 1s ease-out;
}
</style>
