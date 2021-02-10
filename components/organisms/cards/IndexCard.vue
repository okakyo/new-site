<template>
  <v-card :outlined="outlined" class="ma-3">
    <v-breadcrumbs v-if="urlLists" nuxt :items="urlLists">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :to="item.href" :disabled="item.disabled">
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
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
