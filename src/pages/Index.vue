<template>
  <Layout>
    <h1 class="text-h4 mb-3">Resume</h1>
    <v-card>
      <v-card-text class="pa-8">
        <v-card
          flat
          class="mb-3"
          v-for="item in $page.sections.edges"
          :key="item.node.id"
        >
          <v-card-text>
            <h3 id="scrolling-techniques-4">
              {{ item.node.title }}
            </h3>
            <br />
            <span class="px-xs-5">{{ item.node.subtitle }}</span
            ><br />
            <span class="px-xs-5">Date: {{ item.node.date }} </span>
            <div v-html="item.node.content"></div>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </Layout>
</template>

<page-query>
 query GetSections {
  sections: allSections (filter: {published: {eq: true}}){
    edges {
      node {
        id
        date
        title
        order
        subtitle
        content
        description
      }
    }
  }
}
</page-query>

<script></script>

<style></style>
