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
          $vuetify.breakpoint.mdAndUp && index % 2 == 0 ? 'first' : 'last'
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
          <v-card outlined>
            <v-card-title>
              <h3 class="">Hello World</h3>
            </v-card-title>
            <v-card> </v-card>
          </v-card>
        </v-lazy>
      </v-col>

      <v-col cols="12" sm="7" md="6" xl="4" class="my-6">
        <v-card outlined>
          <v-card-title class="headline">
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            {{ item.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'discription',
  components: {},

  // 注意：この部分の型のValidator を修正する必要あり
  props: {
    serviceDescriptions: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const lazyDescript = reactive<boolean[]>([false, false, false])

    return {
      lazyDescript,
    }
  },
})
</script>
