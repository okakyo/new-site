<template>
  <v-card outlined>
    <v-card-title style="text-align: center">
      {{ cardTitle }}
    </v-card-title>
    <v-card-text>
      {{ cardDescription }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'DescriptionCard',
  props: {
    cardTitle: {
      type: String,
      reqiored: true,
      default: '',
    },
    cardDescription: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>
