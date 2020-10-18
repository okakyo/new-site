<template>
  <v-list-item :to="listPath">
    <v-list-item-avatar />
    <v-list-item-content>
      <v-list-item-title>
        {{ listTitle }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'ArticleListContent',
  props: {
    listPath: String,
    listThumbnail: String,
    listTitle: {
      type: String,
      default: 'Sample',
    },
  },
})
</script>
