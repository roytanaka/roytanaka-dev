<template>
  <Layout>
    <v-card tag="article" flat tile>
      <v-card-text class="resume">
        <section>
          <h2>Profile</h2>
          <p>{{ resume.profile }}</p>
        </section>
        <section v-for="(experience, key) in resume.experiences" :key="key">
          <h2>{{ key }}</h2>
          <div v-for="(work, i) in experience" :key="i">
            <h3>
              {{ work.company }}
              <span class="company-description">{{
                work.companyDescription
              }}</span>
            </h3>
            <div v-for="position in work.position" :key="position.title">
              <h4>{{ position.title }} | {{ position.dates }}</h4>
              <ul>
                <li v-for="(point, i) in position.responsibilities" :key="i">
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2>Education</h2>
          <div v-for="school in resume.education" :key="school.institution">
            <h3>{{ school.institution }} | {{ school.dates }}</h3>
            <p class="multiline-text">{{ school.description }}</p>
          </div>
        </section>
        <section>
          <h2>Interests</h2>
          <ul>
            <li v-for="interest in resume.interests" :key="interest">
              {{ interest }}
            </li>
          </ul>
        </section>
      </v-card-text>
    </v-card>
  </Layout>
</template>
<script>
import { resume } from '@/data/resume.yml';

export default {
  metaInfo: {
    title: 'Roy’s Resume',
  },
  data: () => ({
    resume,
  }),
};
</script>

<style>
.resume {
  font-size: 1rem;
  line-height: 1.6;
}
.resume h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 800;
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
