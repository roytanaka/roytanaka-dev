<template>
  <v-app-bar tag="nav" flat color="primaryDark" prominent height="170" dark>
    <v-app-bar-nav-icon
      @click="$emit('input', !value)"
      aria-label="Open navigation menu"
    ></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-slide-y-transition>
      <v-card
        href="/"
        class="profile pa-2 transparent mr-7 align-self-center"
        flat
        tile
        :ripple="false"
        width="500"
      >
        <v-row justify="center">
          <v-col
            cols="12"
            sm="4"
            class="d-flex justify-center justify-sm-end pa-0"
          >
            <v-avatar size="100">
              <img src="/images/roy-tanaka.jpg" alt="Roy Tanaka Portrait" />
            </v-avatar>
          </v-col>
          <v-col class="pa-0 d-sm-flex align-center" cols="12" sm="8">
            <v-card-title class="px-3 py-0 py-sm-3 flex-column align-sm-start">
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
    </v-slide-y-transition>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
};
</script>

<style></style>
