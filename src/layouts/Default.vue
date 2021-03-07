<template>
  <v-app>
    <nav-drawer v-model="navDrawer" :socials="socials" />
    <v-main :class="{ fullPage: isHome }" style="max-width: 1920px">
      <app-bar-md class="d-lg-none" v-model="navDrawer"></app-bar-md>
      <app-bar-lg></app-bar-lg>
      <v-container
        class="pt-lg-12 px-sm-12 mb-16"
        fluid
        style="max-width: 900px"
      >
        <slot />
      </v-container>
      <Footer v-if="!isHome" />
    </v-main>
  </v-app>
</template>

<script>
import NavDrawer from '../components/NavDrawer';
import Footer from '../components/Footer';
import AppBarMd from '../components/AppBarMd';
import AppBarLg from '../components/AppBarLg';

export default {
  components: {
    NavDrawer,
    Footer,
    AppBarMd,
    AppBarLg,
  },
  data: () => ({
    navDrawer: null,
    drawer: false,
    socials: [
      {
        title: 'LinkedIn',
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/roytanaka/',
      },
      {
        title: 'GitHub',
        icon: 'fab fa-github',
        link: 'https://github.com/roytanaka/',
      },
      {
        title: 'Twitter',
        icon: 'fab fa-twitter',
        link: 'https://twitter.com/roytanaka/',
      },
    ],
  }),
  computed: {
    isHome() {
      return this.$route.path === '/';
    },
    isMdAndDown() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
  },
};
</script>

<style>
.fullPage {
  background: url(/images/background-image.jpg) no-repeat center center fixed;
  background-color: #464646;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.profile.v-card--link:focus::before {
  opacity: 0;
}
.profile-name {
  font-weight: 100;
  font-size: 2.5rem;
}
.profile-title {
  font-family: 'Roboto Condensed';
  font-size: 1.5rem;
  font-weight: 300;
}
</style>
