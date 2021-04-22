<template>
  <Layout>
    <v-card tag="article" flat tile>
      <v-card-title>
        Recent Projects
      </v-card-title>
      <v-card-text class="resume">
        <section v-for="project in projects" :key="project.title">
          <h3>{{ project.title }}</h3>
          <h4>{{ project.role }} | {{ project.dates }}</h4>
          <p>{{ project.description }}</p>
          <h4>
            Tech Stack:
            <span class="font-weight-regular">{{
              project.stack.join(', ')
            }}</span>
          </h4>
        </section>
      </v-card-text>
    </v-card>
  </Layout>
</template>
<script>
import { projects } from '@/data/projects.yml';

export default {
  metaInfo: {
    title: 'Recent Projects',
  },
  data: () => ({
    projects,
  }),
};
</script>

<style>
.resume {
  font-size: 1rem;
  line-height: 1.6;
}
.resume h2 {
  text-transform: uppercase;
  color: #426a91;
  margin-top: 0.8rem;
  margin-bottom: 0.1rem;
}
h3 {
  color: #426a91;
  margin-top: 0.8rem;
}

h4 {
  margin-top: 0.2rem;
}
.company-description {
  font-weight: 400;
  font-size: 0.9rem;
  margin-left: 0.2rem;
}

.resume .language-text {
  display: block;
  background-color: unset;
  color: #426a91;
  padding: 0;
}

.multiline-text {
  white-space: pre;
}
</style>
