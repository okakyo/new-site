<template>
  <article-grid :toc="article.toc" :page-slug="article.slug">
    <template v-slot:LeftSide>
      <article-window :article="article" />
    </template>
  </article-grid>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ArticleGrid from '@/components/molecules/girds/ArticleGrid.vue'
import IndexGrid from '@/components/molecules/girds/IndexGrid.vue'
import ArticleWindow from '@/components/templates/blog/ArticleWindow.vue'

export default defineComponent({
  name: 'IntroductionPages',
  components: {
    ArticleGrid,
    IndexGrid,
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
})
</script>

<style>
.nuxt-content {
  padding: 5%;
  padding-top: 3%;
}
.nuxt-content p {
  padding: 0.75em;
  line-height: 1.8em;
  white-space: pre-wrap;
}
.nuxt-content ul {
  margin-bottom: 1.5em;
}
.nuxt-content li {
  line-height: 2em;
  margin-block-end: 0.5em;
}
.nuxt-content code {
  box-shadow: none;
}
.nuxt-content pre {
  margin: 0.5rem 0;
  box-shadow: none;
}
.nuxt-content code::before {
  content: '';
}
.nuxt-content img {
  max-width: 90%;
  margin: 0.5rem;
}
.nuxt-content h2 {
  margin-bottom: 0.75em;
  padding: 0.5em; /* 文字周りの余白 */
  color: #010101; /* 文字色 */
  background: #eaf3ff; /* 背景色 */
}
.nuxt-content h3 {
  padding: 0.25em 0.5em; /* 上下 左右の余白 */
  margin-bottom: 0.75em;
  color: #494949; /* 文字色 */
  background: transparent; /* 背景透明に */
  border-left: solid 5px #7db4e6; /* 左線 */
}
.v-application code {
  background-color: initial;
  padding: initial;
  font-size: initial;
}

/* Font Awesome hatena bookmark */
.fa-hatena:before {
  content: 'B!';
  font-family: Verdana;
  font-weight: bold;
  width: 100%;
  margin-bottom: 5%;
}
</style>
