<template>
  <v-card nuxt outlined link class="text-center" :to="cardPath">
    <v-img
      v-if="cardThumbnail"
      height="200"
      class="mb-3"
      :src="cardThumbnail"
    />
    <v-card-subtitle>{{ cardTitle }}</v-card-subtitle>
  </v-card>
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
  },
})
</script>
