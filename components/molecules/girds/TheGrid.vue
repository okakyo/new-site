<template>
  <v-layout>
    <v-row justify="center">
      <v-col cols="12" sm="11" md="10">
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
