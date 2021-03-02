<template>
  <v-footer absolute padless class="mt-5 transparent">
    <v-card dark tile flat>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
        pariatur enim, qui culpa recusandae neque maiores sunt rem non,
        laboriosam nisi ab molestiae incidunt soluta atque. Pariatur doloremque
        in dolore!
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
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
