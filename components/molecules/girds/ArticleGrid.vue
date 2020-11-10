<template>
  <v-row justify="center">
    <sidebar-toc :toc="toc" :page-slug="pageSlug" />
    <v-col cols="12" md="9" lg="8">
      <slot name="LeftSide" />
    </v-col>
    <v-col lg="3">
      <slot name="RightSide" />
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import SidebarToc from '@/components/molecules/lists/SidebarToc.vue'
// 動作確認
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
