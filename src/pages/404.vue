<template>
  <Layout>
    <v-row class="four-o-four" align-content="center">
      <v-col md="10" offset-md="1">
        <v-card tile class="pa-8">
          <v-row justify="center">
            <v-col cols="8" sm="4" class="d-flex justify-center">
              <v-img src="/images/Nibs_Emoji.gif" />
            </v-col>
            <v-col cols="12" md="7">
              <v-card-text class="text-center">
                <h1 class="text-sm-h1 text-h2">Oops!</h1>
                <h3 class="text-sm-h4 text-h5">Nothing to see here.</h3>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'four oh four',
  },
};
</script>

<style scoped>
.four-o-four {
  min-height: 50vh;
}
</style>
