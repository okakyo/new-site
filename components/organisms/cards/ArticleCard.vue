<template>
  <div>
    <v-card class="pa-2" nuxt outlined link :to="cardPath">
      <v-img :href="cardThumbnail" />
      <v-card-title class="headline">
        {{ cardTitle }}
      </v-card-title>
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
    cardThumbnail: {
      type: String,
      default:
        'https://user-images.githubusercontent.com/29594820/99104055-cd990300-2623-11eb-9891-3081271c5655.png',
    },
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
