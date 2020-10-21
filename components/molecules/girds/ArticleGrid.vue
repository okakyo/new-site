<template>
  <v-layout class="mt-2">
    <v-row wrap justify="center">
      <v-col cols="12" md="9" lg="8">
        <slot name="LeftSide" />
      </v-col>
      <v-col lg="3">
        <slot name="RightSide" />
      </v-col>
    </v-row>
    <sidebar-toc :toc="toc" :page-slug="pageSlug" />
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import SidebarToc from '@/components/molecules/lists/SidebarToc.vue'

export default defineComponent({
  name: 'ArticleGrid',
  components: {
    SidebarToc,
  },
  props: {
    toc: Array,
    pageSlug: String,
  },
})
</script>
