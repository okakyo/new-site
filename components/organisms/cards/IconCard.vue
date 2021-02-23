<template>
  <v-card flat>
    <v-img v-if="cardImg" class="pa-3" :src="cardImg" />
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
      default: '/img/noimage.png',
    },
  },
})
</script>

<style></style>
