<template>
  <article-grid :toc="article.toc" :page-slug="article.slug">
    <template v-slot:LeftSide>
      <article-window :article="article" />
    </template>
    <template v-slot:RightSide>
      <side-window :article-list="articleList" />
    </template>
  </article-grid>
</template>

<script lang="ts">
// import { defineComponent } from '@nuxtjs/composition-api';
import ArticleGrid from '@/components/molecules/girds/ArticleGrid.vue'
import ArticleWindow from '@/components/templates/blog/ArticleWindow.vue'
import SideWindow from '@/components/templates/blog/SideWindow.vue'
export default {
  name: 'IntroductionPages',
  components: {
    ArticleGrid,
    ArticleWindow,
    SideWindow,
  },
  async asyncData({ $content, params }) {
    const pageId = params.id
    const article = await $content('blog', pageId).fetch()
    const articleList = await $content('blog')
      .only(['title', 'description', 'tags', 'isOpen', 'path', 'thumbnail'])
      .limit(8)
      .where({ isOpen: true })
      .fetch()
    return {
      article,
      articleList,
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
