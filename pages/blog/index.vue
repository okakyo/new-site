<template>
  <index-grid>
    <index-card page-title="記事の一覧">
      <template> </template>
    </index-card>
  </index-grid>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
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
  async asyncData({ $content }) {
    const articleLists = await $content('/blog')
      .only(['title', 'description', 'isOpen'])
      .where({ isOpen: true })
      .limit(8)
      .fetch()
    console.log(articleLists)
    return {
      articleLists,
    }
  },
})
</script>
