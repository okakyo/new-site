<template>
  <v-card :href="cardUrl" flat>
    <v-img :src="cardImg" />
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
    cardImg: {
      type: String,
      required: false,
      default: '/img/noimage.png',
    },
    cardUrl: {
      type: String,
      required: false,
      default: null,
    },
  },
})
</script>
