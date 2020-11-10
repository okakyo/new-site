<template>
  <illust-grid>
    <template v-slot:LeftSide>
      <v-card transition="fade-transition" flat color="primary">
        <v-img class="text-center" :lazy-src="heroImg" :src="heroImg"></v-img>
      </v-card>
    </template>
    <template v-slot:RightSide>
      <v-card outlined color="transparent" class="white--text">
        <h1 class="mb-6 text-center">Kyohei Oka</h1>
        <v-row justify="center">
          <h4>Portfolio - Blog Site</h4>
        </v-row>
      </v-card>
    </template>
  </illust-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import IllustGrid from '@/components/molecules/girds/IllustGrid.vue'

export default defineComponent({
  components: {
    IllustGrid,
  },
  setup() {
    const heroImg = ref(require('@/assets/images/index.svg'))

    return {
      heroImg,
    }
  },
})
</script>
