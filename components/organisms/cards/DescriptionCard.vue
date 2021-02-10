<template>
  <v-card outlined>
    <v-card-title class="headline">
      {{ cardTitle }}
    </v-card-title>
    <v-card-text>
      {{ cardDescription }}
    </v-card-text>
  </v-card>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'DescriptionCard',
  props: {
    CardTitle: {
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

<style></style>
