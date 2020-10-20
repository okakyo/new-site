<template>
  <v-layout class="mt-2">
    <v-row wrap justify="center">
      <v-col cols="12" md="10" lg="9">
        <slot name="LeftSide" />
      </v-col>
      <v-navigation-drawer clipped app translate> </v-navigation-drawer>
      <v-navigation-drawer clipped app right translate>
        <v-list dense flat>
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
    </v-row>
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'IllustGrid',
  props: {
    toc: Array,
    pageSlug: String,
  },
})
</script>
