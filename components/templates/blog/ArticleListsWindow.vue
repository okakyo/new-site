<template>
  <v-row justify="center">
    <v-col
      v-for="(article, index) in articleList"
      :key="index"
      cols="12"
      sm="6"
      md="4"
      xl="3"
    >
      <index-card
        v-if="$vuetify.breakpoint.smAndUp"
        outlined
        :page-title="article.title"
      >
      </index-card>
      <article-list v-else></article-list>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ArticleList from '@/components/molecules/lists/ArticleList.vue'
export default defineComponent({
  name: 'ArticleList',
  components: {
    ArticleList,
  },
  props: {
    articleList: {
      type: Array,
      required: true,
    },
  },
})
</script>
