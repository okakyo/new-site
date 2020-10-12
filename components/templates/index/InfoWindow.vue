<template>
  <the-grid>
    <index-card outlined :page-title="title">
      <card-text>
        {{ description }}
      </card-text>
    </index-card>
  </the-grid>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import TheGrid from '@/components/molecules/girds/TheGrid.vue'
import IndexCard from '@/components/organisms/cards/IndexCard.vue'
export default defineComponent({
  name: 'ActivityWindow',
  components: {
    IndexCard,
    TheGrid,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'サンプル',
    },
    thumbnail: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
})
</script>
