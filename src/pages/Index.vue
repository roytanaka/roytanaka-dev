<template>
  <Layout>
    <div class="text-center mt-12 mx-auto">
      <h1 class="hero-text hero-text--h1 text-uppercase">Welcome</h1>
      <h2 class="hero-text hero-text--description">
        I'm a Frontend Developer experienced in building dynamic web apps
        focused on user experience
      </h2>
      <v-btn color="accent" class="mt-12" to="/resume" tile outlined large
        >Resume</v-btn
      >
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Roy’s Resume',
  },
};
</script>

<style>
.hero-text {
  color: white;
  font-weight: 300;
}

.hero-text--h1 {
  font-size: 3.5rem;
}
.hero-text--description {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  max-width: 18rem;
  margin: 0 auto;
}

@media (min-width: 960px) {
  .hero-text--h1 {
    font-size: 6rem;
  }
  .hero-text--description {
    font-size: 1.6rem;
    max-width: 31rem;
  }
}
</style>
