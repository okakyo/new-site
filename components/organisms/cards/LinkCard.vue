<template>
  <v-card class="pa-2" nuxt :to="to">
    <v-img class="pa-2" :src="img" height="200px" />
    <v-list>
      <v-list-item>
        <v-list-item-title style="font-size: 20px">
          {{ name }}
        </v-list-item-title>
        <v-list-item-icon>
          <v-icon> mdi-arrow-top-right </v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'LinkCard',
  props: {
    to: {
      type: String,
      required: true,
      default: '',
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
    img: {
      type: String,
      required: true,
      default: '',
    },
  },
})
</script>

<style></style>
