<template>
  <v-container>
    <v-row
      v-for="(item, index) in serviceDescriptions.contents"
      :key="index"
      wrap
      justify="center"
      class="my-5"
    >
      <v-col
        class="ma-6"
        :order="
          $vuetify.breakpoint.mdAndUp && index % 2 == 1 ? 'last' : 'first'
        "
        cols="6"
        sm="3"
        md="2"
        xl="2"
      >
        <v-lazy
          v-model="lazyDescript[index]"
          :options="{
            threshold: 0.7,
          }"
          transition="slide-x-transition"
        >
          <icon-card :card-img="item.img" :card-icon="item.icon" />
        </v-lazy>
      </v-col>

      <v-col cols="12" sm="7" md="6" xl="6" class="my-6">
        <description-card
          :card-description="item.description"
          :card-title="item.title"
          :sns-links="item.sns"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import DescriptionCard from '@/components/organisms/cards/DescriptionCard.vue'
import IconCard from '@/components/organisms/cards/IconCard.vue'

export default defineComponent({
  name: 'discription',
  components: {
    DescriptionCard,
    IconCard,
  },

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
