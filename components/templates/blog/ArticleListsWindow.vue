<template>
  <v-list>
    <v-row justify="center" class="pa-6">
      <v-col
        v-for="(article, index) in articles"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        xl="3"
      >
        <article-card
          v-if="$vuetify.breakpoint.smAndUp"
          :card-title="article.title"
          :card-thumbnail="article.thumbnail"
          :card-path="article.path"
        />

        <article-list-content
          v-else
          :list-title="article.title"
          :list-thumbnail="article.thumbnail"
          :list-path="article.path"
        />
      </v-col>
    </v-row>
  </v-list>
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
