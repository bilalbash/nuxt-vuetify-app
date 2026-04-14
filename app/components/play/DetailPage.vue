<template>
  <div v-if="section && page" class="d-flex flex-column ga-6">
    <section>
      <h1>{{ page.title }} Component</h1>
      <p class="text-body-1 text-medium-emphasis">{{ page.description }}</p>
    </section>

    
    
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
