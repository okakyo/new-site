<template>
  <v-layout>
    <v-row>
      <v-col cols="12" md="8">
        <slot />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'ArticleCard',
})
</script>
