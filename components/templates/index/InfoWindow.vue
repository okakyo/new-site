<template>
  <index-card outlined page-title="活動について"> </index-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import IndexCard from '@/components/organisms/cards/IndexCard.vue'
export default defineComponent({
  name: 'ActivityWindow',
  components: {
    IndexCard,
  },
})
</script>
