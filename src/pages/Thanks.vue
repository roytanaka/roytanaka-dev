<template>
  <Layout>
    <v-row align-content="center">
      <v-col md="10" offset-md="1">
        <v-card class="pa-8 mx-auto" max-width="500">
          <v-card-title class="justify-center">
            <h1 class="text-h4 font-weight-light text-sm-h3">Thank you!</h1>
          </v-card-title>
          <v-card-text class="text-center"
            >Thanks for getting in touch. You'll be hearing from me
            soon.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </Layout>
</template>
<script>
export default {
  metaInfo: {
    title: 'Get in Touch',
  },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [v => !!v || 'Name is required'],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v =>
        /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/i.test(
          v
        ) || 'E-mail must be valid',
    ],
    message: '',
    messageRules: [v => !!v || 'Message is required'],
  }),
  methods: {
    submit() {
      const form = this.$refs.form;
      form.validate();
      this.$nextTick(() => {
        console.log(form);
        if (this.valid) {
          const formData = new FormData(form.$el);
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
          })
            .then(() => {
              this.$router.push({ path: '/thanks' });
            })
            .catch(error => {
              console.error(error);
            });
        }
      });
    },
  },
};
</script>

<style scoped>
.contact {
  border: 5px solid #426a91;
}
</style>
