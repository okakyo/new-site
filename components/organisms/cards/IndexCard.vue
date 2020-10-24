<template>
  <v-card :outlined="outlined" class="ma-3">
    <v-breadcrumbs v-if="urlLists" :items="urlLists" />
    <v-card-title class="headline">{{ PageTitle }}</v-card-title>
    <v-divider />
    <slot />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'TheHeader',
  props: {
    PageTitle: {
      type: String,
      default: 'sample',
    },
    urlLists: {
      type: Array,
      required: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
