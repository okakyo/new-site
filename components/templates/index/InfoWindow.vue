<template>
  <index-grid>
    <index-card outlined :page-title="title">
      <card-text>
        {{ description }}
      </card-text>
    </index-card>
  </index-grid>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import IndexGrid from '@/components/molecules/girds/IndexGrid.vue'
import IndexCard from '@/components/organisms/cards/IndexCard.vue'
export default defineComponent({
  name: 'ActivityWindow',
  components: {
    IndexCard,
    IndexGrid,
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
