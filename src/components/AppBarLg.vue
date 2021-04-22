<template>
  <div class="d-none d-lg-flex">
    <v-app-bar tag="nav" flat color="transparent" height="54">
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/resume" tile color="accent" text aria-label="resumé"
          >Resume</v-btn
        >
        <v-btn to="/projects" color="accent" tile text>Projects</v-btn>
        <v-btn to="/contact" color="accent" tile text>Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.theme--light.v-btn--active:before,
.theme--light.v-btn--active:hover:before {
  opacity: 1;
  height: 2px;
  top: unset;
  bottom: 0;
}
</style>
