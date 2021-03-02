<template>
  <v-app>
    <nav-drawer v-model="navDrawer" :socials="socials" />
    <v-main>
      <v-app-bar
        class="d-lg-none"
        tag="nav"
        flat
        color="primaryDark"
        prominent
        height="170"
        dark
      >
        <v-app-bar-nav-icon
          @click="navDrawer = !navDrawer"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-fade-transition>
          <v-card
            href="/"
            class="profile pa-2 transparent mr-7 align-self-center"
            flat
            tile
            :ripple="false"
            v-if="isMdAndDown"
            width="500"
          >
            <v-row justify="center">
              <v-col
                cols="12"
                sm="4"
                class="d-flex justify-center justify-sm-end pa-0"
              >
                <v-avatar :size="$vuetify.breakpoint.xs ? 80 : 100">
                  <img src="/images/roy-tanaka.jpg" alt="Roy Tanaka Portrait" />
                </v-avatar>
              </v-col>
              <v-col class="pa-0 d-sm-flex align-center" cols="12" sm="8">
                <v-card-title
                  class="px-3 py-0 py-sm-3 flex-column align-sm-start"
                >
                  <h1 class="font-weight-thin text-h5 text-sm-h4">
                    ROY TANAKA
                  </h1>
                  <h2 class="text-subtitle-1 text-sm-h6">
                    Frontend Web Developer
                  </h2>
                </v-card-title>
              </v-col>
            </v-row>
          </v-card>
        </v-fade-transition>

        <v-spacer></v-spacer>
      </v-app-bar>
      <v-container class="pt-lg-12 px-sm-12" fluid style="max-width: 1024px">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavDrawer from '../components/NavDrawer';

export default {
  components: {
    NavDrawer,
  },
  data: () => ({
    navDrawer: null,
    drawer: false,
    socials: [
      {
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/roytanaka/',
      },
      { icon: 'fab fa-github', link: 'https://github.com/roytanaka/' },
      { icon: 'fab fa-twitter', link: 'https://twitter.com/roytanaka/' },
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
