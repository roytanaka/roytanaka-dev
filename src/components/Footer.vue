<template>
  <v-footer fixed padless class="mt-5 transparent">
    <v-card width="100%" dark tile flat color="secondaryDark">
      <v-divider></v-divider>

      <v-card-text class="text-center">
        {{ new Date().getFullYear() }} — <strong>Roy Tanaka</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  components: {},
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram',
    ],
  }),
};
</script>
