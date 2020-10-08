<template>
  <v-card nuxt outlined link class="text-center">
    <v-icon v-if="cardIcon" x-large class="mt-4">{{ cardIcon }}</v-icon>
    <v-card-subtitle>{{ cardTitle }}</v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'TheGrid',
  props: {
    cardIcon: String,
    cardTitle: {
      type: String,
      default: 'Sample',
    },
  },
})
</script>
