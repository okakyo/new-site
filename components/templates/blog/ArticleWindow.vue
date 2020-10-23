<template>
  <v-card class="pt-3">
    <article-header
      :article-title="article.title"
      :article-img="article.thumbnail"
    />
    <v-divider />
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
