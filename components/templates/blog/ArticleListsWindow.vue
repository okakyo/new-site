<template>
  <the-grid>
    <article-card v-if="$vuetify.breakpoint.smAndUp"> </article-card>
    <article-list v-else></article-list>
  </the-grid>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import TheGrid from '@/components/molecules/girds/TheGrid.vue'
import ArticleList from '@/components/molecules/lists/ArticleList.vue'
import ArticleCard from '@/components/organisms/cards/ArticleCard.vue'
export default defineComponent({
  name: 'ArticleList',
  components: {
    TheGrid,
    ArticleCard,
    ArticleList,
  },
})
</script>
