<template>
  <v-row class="pa-2">
    <v-col v-for="(article, index) in articles" :key="index" cols="12" md="6">
      <article-card
        :card-title="article.title"
        :card-description="article.description"
        :card-tags="article.tags"
        :card-path="'/blog/article' + article.path.split('/blog')[1]"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ArticleListContent from '@/components/molecules/lists/ArticleListContent.vue'
import ArticleCard from '@/components/organisms/cards/ArticleCard.vue'
export default defineComponent({
  name: 'ArticleList',
  components: {
    ArticleListContent,
    ArticleCard,
  },
  props: {
    articles: {
      type: Array,
    },
  },
})
</script>
