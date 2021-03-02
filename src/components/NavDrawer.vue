<template>
  <v-navigation-drawer color="secondaryDark" width="400" :value="value" app>
    <v-card class="transparent mt-12" flat tile>
      <v-row justify="center">
        <v-avatar size="200">
          <img
            src="/images/roy-tanaka.jpg"
            alt="Roy TanFrontend Developeraka"
          />
        </v-avatar>
      </v-row>
      <v-card-title class="justify-center">
        <h1 class="profile profile-name">ROY TANAKA</h1>
        <h2 class="profile profile-title">Frontend Web Developer</h2>
      </v-card-title>
      <v-card-text class="text-center">
        <v-btn
          v-for="social in socials"
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
      </v-card-text>
    </v-card>
    <v-card flat tile class="transparent px-12">
      <v-card-title class="profile">
        Skills
      </v-card-title>
      <v-card-text>
        <v-progress-linear
          class="mb-1"
          color="primaryLight"
          height="28"
          v-for="skill in skills"
          :key="skill.name"
          :value="skill.score"
        >
          <template
            ><div class="ml-3 mr-auto">{{ skill.name }}</div></template
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
  },
  data: () => ({
    socials: [
      {
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/roytanaka/',
      },
      { icon: 'fab fa-github', link: 'https://github.com/roytanaka/' },
      { icon: 'fab fa-twitter', link: 'https://twitter.com/roytanaka/' },
    ],
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
.profile {
  color: white;
}
.profile-name {
  font-weight: 100;
  font-size: 2.5rem;
}
.profile-title {
  font-family: 'Roboto Condensed';
  font-weight: 300;
}
.v-progress-linear {
  transition: 1s ease-in-out;
}
</style>
