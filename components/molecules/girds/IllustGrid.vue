<template>
  <v-container fluid style="background-color: #00cba9" class="pa-5">
    <div class="mt-9">
      <v-card id="main-top" flat color="primary">
        <v-row wrap justify="center" align="center">
          <v-col cols="10" sm="10" md="6" xl="4" class="mb-5">
            <slot name="LeftSide" />
          </v-col>
          <v-col cols="12" sm="10" md="4">
            <slot name="RightSide" />
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'IllustGrid',
})
</script>
