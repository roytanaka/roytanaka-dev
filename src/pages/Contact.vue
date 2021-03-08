<template>
  <Layout>
    <v-row align-content="center">
      <v-col md="10" offset-md="1">
        <v-card class="pa-8 mx-auto" max-width="500">
          <v-card-title class="justify-center">
            <h1 class="text-h4 font-weight-light text-sm-h3">Get in touch</h1>
          </v-card-title>
          <v-card-text class="text-center">
            <v-form
              netlify
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="submit"
              id="contactForm"
              name="contact"
            >
              <input type="hidden" name="form-name" value="contact" />
              <v-text-field
                name="name"
                v-model.trim="name"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                name="email"
                v-model.trim="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-textarea
                outlined
                name="message"
                label="Message"
                :rules="messageRules"
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              type="submit"
              form="contactForm"
              tile
              block
              color="primary"
              :disabled="!valid"
            >
              Submit
            </v-btn>
          </v-card-actions>
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
