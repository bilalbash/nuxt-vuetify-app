<template>
  <div v-if="section && page" class="d-flex flex-column ga-6">
    <section>
      <h1>{{ page.title }} Component</h1>
      <p class="text-body-1 text-medium-emphasis">{{ page.description }}</p>
    </section>

    <v-card rounded="xl" variant="outlined">
      <v-card-title>Where this fits</v-card-title>
      <v-card-text class="d-flex flex-column ga-4">
        <p>
          This page belongs to the <strong>{{ section.title }}</strong> section inside the Play area.
          Use the links below to jump back to the section overview or open another page in the same folder.
        </p>

        <div class="d-flex flex-wrap ga-3">
          <v-btn color="primary" :to="'/play/' + section.slug">Section overview</v-btn>
          <v-btn variant="text" to="/play">Play home</v-btn>
        </div>
      </v-card-text>
    </v-card>

    
  </div>
</template>

<script setup lang="ts">
import { playSections } from '~/data/playSections'

const props = defineProps<{
  sectionSlug: string
  pageSlug: string
}>()

const section = computed(() => playSections.find(item => item.slug === props.sectionSlug))
const page = computed(() => section.value?.pages.find(item => item.slug === props.pageSlug))
</script>
