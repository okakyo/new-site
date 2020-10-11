<template>
  <illust-grid>
    <template v-slot:LeftSide>
      <v-card tile size="" transition="fade-transition" flat color="#00cba9">
        <v-img class="text-center" :lazy-src="heroImg" :src="heroImg"></v-img>
      </v-card>
    </template>
    <template v-slot:RightSide>
      <v-card outlined color="transparent" class="white--text">
        <h1 class="mb-6 text-center">Kyohei Oka</h1>
        <v-row justify="center">
          <h4>ブログ・ポートフォリオサイト</h4>
        </v-row>
      </v-card>
    </template>
  </illust-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const heroImg = ref(require('@/assets/images/index.svg'))

    return {
      heroImg,
    }
  },
})
</script>
