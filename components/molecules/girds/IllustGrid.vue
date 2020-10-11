<template>
  <v-container fluid style="background-color: #00cba9" class="pa-5">
    <v-layout class="mt-5">
      <v-row wrap justify="center" align="center">
        <v-col cols="8" md="5" class="mb-5">
          <slot name="LeftSide" />
        </v-col>
        <v-col cols="12" md="4">
          <slot name="RightSide" />
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'IllustGrid',
})
</script>
