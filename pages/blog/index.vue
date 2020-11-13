<template>
  <index-grid>
    <index-card :url-lists="urlLists" page-title="記事の一覧">
      <template>
        <article-lists-window :articles="articleInfo" />
      </template>
    </index-card>
    <v-pagination
      v-model="nowPageNumber"
      :length="articleLength"
      @input="goNext"
    />
  </index-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import IndexGrid from '@/components/molecules/girds/IndexGrid.vue'
import IndexCard from '@/components/organisms/cards/IndexCard.vue'
import ArticleListsWindow from '@/components/templates/blog/ArticleListsWindow.vue'
import { SetupContext } from '@vue/composition-api'

export default defineComponent({
  name: 'IntroductionPages',
  components: {
    IndexGrid,
    IndexCard,
    ArticleListsWindow,
  },
  setup(props: any, { root }: SetupContext) {
    const nowPageNumber = ref(1)
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
    const goNext = (): void => {
      root.$router.push(`/blog/2`)
    }
    return {
      urlLists,
      nowPageNumber,
      goNext,
    }
  },
  asyncData({ $content, error }) {
    try {
      const getAllArticles = $content('blog').only(['path']).fetch()
      const getArticleInfo = $content('blog')
        .only([
          'title',
          'description',
          'tags',
          'isOpen',
          'path',
          'thumbnail',
          'date',
        ])
        .sortBy('date', 'desc')
        .limit(8)
        .where({ isOpen: true })
        .fetch()
      return Promise.all([getAllArticles, getArticleInfo]).then(
        ([allArticles, articleInfo]) => {
          const articleLength = Math.ceil(allArticles.length / 8)

          return {
            articleLength,
            articleInfo,
          }
        }
      )
    } catch (e) {
      return error(e)
    }
  },
})
</script>
