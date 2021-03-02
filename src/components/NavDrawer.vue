<template>
  <v-navigation-drawer color="primaryDark" width="400" :value="value" app>
    <v-card flat tile class="transparent">
      <v-card-title primary-title>
        hello
      </v-card-title>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
};
</script>

<style></style>
