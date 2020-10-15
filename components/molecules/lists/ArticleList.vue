<template>
  <v-card outlined>
    <card-title class="headline" :to="cardTitle.path">
      {{ cardInfo.title }}
    </card-title>
    <v-card-text>
      {{ cardTitle.description }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'ArticleList',
  props: {
    cardInfo: {
      type: Object,
      reqiored: true,
    },
  },
})
</script>
