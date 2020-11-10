<template>
  <v-card class="pt-3">
    <article-header
      :article-title="article.title"
      :article-img="article.thumbnail"
    />

    <v-divider />
    <div class="article">
      <p>{{ article.description }}</p>
    </div>
    <nuxt-content :document="article" />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ArticleHeader from '@/components/molecules/header/ArticleHeader.vue'

export default defineComponent({
  name: 'ArticleWindow',
  props: {
    article: Object,
  },
  components: {
    ArticleHeader,
  },
})
</script>

<style>
.nuxt-content {
  width: inherit;
  padding: 5%;
  padding-top: 2.5%;
}
.article {
  width: inherit;
  padding: 5%;
  padding-bottom: 2.5%;
}
.nuxt-content h2 {
  margin-bottom: 0.75em;
  padding: 0.5em; /* 文字周りの余白 */
  color: #010101; /* 文字色 */
  background: #eaf3ff; /* 背景色 */
  border-bottom: solid 3px #516ab6; /*下線*/
  border-top: solid 3px #516ab6; /*下線*/
}
.nuxt-content h3 {
  padding: 0.25em 0.5em; /* 上下 左右の余白 */
  margin-bottom: 0.75em;
  color: #494949; /* 文字色 */
  background: #eaf3ff; /* 背景透明に */

  border-left: solid 5px #7db4e6; /* 左線 */
}
p {
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
.nuxt-content img {
  max-width: 90%;
  margin: 0.5rem;
}

.nuxt-content pre {
  margin: 0.5rem 0;
  box-shadow: none;
}

.nuxt-content code {
  box-shadow: none;
}
.nuxt-content code::before {
  content: '';
}

.v-application code {
  background-color: initial;
  padding: initial;
  font-size: initial;
  color: '#ccc';
}

.nuxt-content-highlight pre,
.nuxt-content-highlight code {
  color: #ccc;
  overflow-x: auto;
  overflow-y: hidden;
  margin-bottom: 1.5rem;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
