<template>
  <v-container>
    <v-row
      v-for="(item, index) in serviceDescriptions.contents"
      :key="index"
      wrap
      justify="center"
      class="my-5 text-center"
    >
      <v-col
        class="my-6"
        :order="
          $vuetify.breakpoint.mdAndUp && index % 2 == 1 ? 'last' : 'first'
        "
        cols="6"
        sm="3"
        md="4"
        xl="3"
      >
        <v-lazy
          v-model="lazyDescript[index]"
          :options="{
            threshold: 1.0,
          }"
          transition="slide-x-transition"
        >
          <slot name="IconCard" />
        </v-lazy>
      </v-col>

      <v-col cols="12" sm="7" md="6" xl="4" class="my-6">
        <slot name="DescriptionCard" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'ListGrid',
  props: {
    descriptionLists: {
      type: Array,
      required: true,
      default: () => {},
    },
  },
})
</script>
