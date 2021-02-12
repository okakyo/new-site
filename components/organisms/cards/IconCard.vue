<template>
  <v-card flat>
    <v-img v-if="cardImg" class="pa-3" :src="cardImg" />
    <v-img v-else class="pa-3" :src="require(cardIcon)" />
  </v-card>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'IconCard',
  props: {
    cardImg: {
      type: String,
      required: false,
      default: '/img/thumbnail/noimage.png',
    },
    cardIcon: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<style></style>
