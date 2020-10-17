<template>
  <v-container fluid class="pa-5">
    <v-layout class="mt-2">
      <v-row wrap justify="center">
        <v-col cols="12" md="8">
          <slot name="LeftSide" />
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="6" md="3">
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
