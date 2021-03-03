<template>
  <Layout>
    <v-card flat tile>
      <v-card-title class="text-h4">
        Resume
      </v-card-title>
      <v-card-text class="resume" v-html="$page.resume.edges[0].node.content">
      </v-card-text>
    </v-card>
  </Layout>
</template>
<page-query>
query GetResume {
  resume: allResume (limit: 1){
    edges {
      node {
        id
        content
      }
    }
  }
}
</page-query>
<script></script>

<style>
.resume {
  font-size: 1rem;
  line-height: 1.4;
}
.resume h2 {
  text-transform: uppercase;
  color: #426a91;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
}
h3,
h4 {
  margin-top: 0.5rem;
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
</style>
