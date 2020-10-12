<template>
  <v-layout>
    <v-row justify="center">
      <v-col cols="6" md="4" lg="3">
        <slot />
      </v-col>
    </v-row>
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'TheGrid',
})
</script>
