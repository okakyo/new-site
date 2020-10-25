<template>
  <article-grid :toc="article.toc" :page-slug="article.slug">
    <template v-slot:LeftSide>
      <article-window :article="article" />
    </template>
    <template v-slot:RightSide>
      <v-card> sample </v-card>
    </template>
  </article-grid>
</template>

<script>
// import { defineComponent } from '@nuxtjs/composition-api';
import ArticleGrid from '@/components/molecules/girds/ArticleGrid.vue'
import ArticleWindow from '@/components/templates/blog/ArticleWindow.vue'
export default {
  name: 'IntroductionPages',
  components: {
    ArticleGrid,
    ArticleWindow,
  },
  props: {},
  async asyncData({ $content, params }) {
    const pageId = params.id
    const article = await $content('blog', pageId).fetch()
    return {
      article,
    }
  },
  head() {
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: "Okakyo's Blog",
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content:
            'https://okakyo-new-portfolio.netlify.app' + this.$router.path,
        },
        { hid: 'og:title', property: 'og:title', content: "Okakyo's Blog" },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://okakyo-new-portfolio.netlify.app/img/ogp.png',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@31415O_Kyo' },
      ],
    }
  },
}
</script>

<style>
/* Font Awesome hatena bookmark */
.fa-hatena:before {
  content: 'B!';
  font-family: Verdana;
  font-weight: bold;
  width: 100%;
  margin-bottom: 5%;
}
</style>
