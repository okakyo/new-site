<template>
  <index-grid>
    <index-card :url-lists="urlLists" page-title="記事の一覧">
      <template>
        <article-lists-window :articles="articleInfo" />
        <v-pagination />
      </template>
    </index-card>
  </index-grid>
</template>

<script lang="ts">
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
    let articleInfo
    try {
      articleInfo = await $content('blog')
        .only(['title', 'description', 'tags', 'isOpen', 'path', 'thumbnail'])
        .limit(8)
        .where({ isOpen: true })
        .fetch()
    } catch (e) {
      console.error(e)
    }
    return {
      articleInfo,
    }
  },
})
</script>
