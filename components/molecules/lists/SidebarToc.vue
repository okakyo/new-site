<template>
  <v-navigation-drawer clipped app translate>
    <v-list dense flat class="my-5 mx-3">
      <v-list-item
        v-for="(item, i) in toc"
        :key="i"
        nuxt
        color="info"
        link
        :to="'/blog/' + pageSlug + '#' + item.id"
      >
        <v-list-item-title v-if="item.depth == 2" class="text-primary">{{
          item.text
        }}</v-list-item-title>
        <v-list-item-subtitle v-else-if="item.depth == 3" class="pl-3">{{
          item.text
        }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SidebarToc',
  props: {
    toc: Array,
    pageSlug: String,
  },
})
</script>
