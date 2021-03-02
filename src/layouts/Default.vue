<template>
  <v-app>
    <nav-drawer v-model="navDrawer" />
    <v-main>
      <v-app-bar tag="nav" flat color="white">
        <v-app-bar-nav-icon
          @click.stop="navDrawer = !navDrawer"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-container fluid style="max-width: 90ch" ml-lg-3>
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
  }),
  computed: {
    isHome() {
      return this.$route.path === '/';
    },
  },
};
</script>

<style></style>
