<template>
  <h1>Component Playground</h1>

  <v-row gap="4">
    <v-col
      v-for="section in playSections"
      :key="section.slug"
      cols="12"
      md="6"
    >

      <v-card
        class="mx-auto"
        :to="`/play/${section.slug}`"
        :subtitle="section.pages.length + ' pages'"
        :title="section.title"
        link
      ></v-card>

    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { playSections } from '~/data/playSections'

definePageMeta({
  title: 'Play'
})
</script>
