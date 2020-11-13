<template>
  <index-grid>
    <index-card :url-lists="urlLists" page-title="記事の一覧">
      <template>
        <article-lists-window :articles="articleInfo" />
        <v-pagination v-model="this.params.id" :length="articleLength" />
      </template>
    </index-card>
  </index-grid>
</template>

<script lang="ts">
// TODO : ここでペジネーション,タグ検索を行う

import { defineComponent, ref } from '@nuxtjs/composition-api'
import IndexGrid from '@/components/molecules/girds/IndexGrid.vue'
import IndexCard from '@/components/organisms/cards/IndexCard.vue'
import ArticleListsWindow from '@/components/templates/blog/ArticleListsWindow.vue'

export default defineComponent({
  name: 'IntroductionPages',
  components: {
    IndexGrid,
    IndexCard,
    ArticleListsWindow,
  },
  setup() {
    const urlLists = ref([
      {
        text: 'Top',
        href: '/',
        disabled: false,
      },
      {
        text: 'Blog',
        href: '/blog',
        disabled: true,
      },
    ])
    return {
      urlLists,
    }
  },
  async asyncData({ $content }) {
    const articleLength = await $content('blog').fetch().length
    const articleInfo = await $content('blog')
      .only(['title', 'description', 'date', 'tags', 'isOpen', 'path'])
      .sortBy('date')
      .limit(8)
      .fetch()
    return {
      articleInfo,
      articleLength,
    }
  },
})
</script>
