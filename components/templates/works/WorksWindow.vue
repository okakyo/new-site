<template>
  <v-container>
    <v-row class="pa-2" :justify="$vuetify.breakpoint.mdAndDown && 'center'">
      <v-col
        v-for="(work, index) in works"
        :key="index"
        cols="12"
        sm="8"
        md="4"
        xl="3"
      >
        <article-card
          :card-title="work.title"
          :card-img="work.img"
          :card-url="work.url"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ArticleCard from '@/components/organisms/cards/ArticleCard.vue'
export default defineComponent({
  name: 'WorkWindow',
  props: {
    works: {
      type: Array,
      required: true,
      default: () => {},
    },
  },
  components: {
    ArticleCard,
  },
})
</script>

<style></style>
