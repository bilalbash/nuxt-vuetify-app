<template>
  <div class="d-flex flex-column ga-4">

    <v-card  variant="text"> 
      <v-card-title>{{ currentSection?.title || 'Current Section' }}</v-card-title>
      <v-card-text v-if="!currentSection?.title">
        Select a section from components Playground.
      </v-card-text>
      <v-list v-if="currentSection?.title" density="compact">
        
        <v-list-item 
          class="play-nav-item" 
          :to="'/play/' + currentSection.slug" 
          color="primary"
          title="Overview"
        />
        
        <v-list-item
          v-for="page in currentSection.pages"
          :key="page.slug"
          :title="page.title"
          :to="`/play/${currentSection.slug}/${page.slug}`"
          class="play-nav-item"
          color="primary"
        />
      </v-list>
    </v-card>
    
  </div>
</template>

<script setup lang="ts">
import { playSections } from '~/data/playSections'

const route = useRoute()

const routeSegments = computed(() => route.path.split('/').filter(Boolean))
const currentSectionSlug = computed(() => routeSegments.value[1] || '')

const currentSection = computed(() => {
  if (!currentSectionSlug.value) {
    return null
  }

  return playSections.find(section => section.slug === currentSectionSlug.value) || null
})
</script>


<style scoped>
.play-nav-item {
  min-height: 32px;
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
