<template>
  <div>
    <v-card class="pa-2" nuxt outlined link :to="cardPath">
      <v-list>
        <v-list-item> </v-list-item>
      </v-list>
      <v-card-title class="headline"></v-card-title>
      <div class="pa-4">
        <v-btn
          v-for="(tag, index) in cardTags"
          :key="index"
          class="ma-2"
          small
          outlined
          color="accent"
        >
          {{ tag }}
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'IconCard',
  props: {
    cardPath: String,
    cardThumbnail: String,
    cardTitle: {
      type: String,
      default: 'Sample',
    },
    cardDescription: {
      type: String,
      default: '',
    },
    cardTags: {
      type: Array,
      required: false,
    },
  },
})
</script>
<style>
.article-card-title {
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
  font-family: 'Roboto', sans-serif !important;
}
</style>
