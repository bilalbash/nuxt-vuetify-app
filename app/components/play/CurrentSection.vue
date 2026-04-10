<template>
    <v-card  variant="text" rounded="0" color="primary"> 
      <v-card-title>{{ currentSection?.title || 'Current Section' }}</v-card-title>
      <v-card-subtitle v-if="currentSection?.title"> 
        {{ currentSection?.pages.length }} pages
      </v-card-subtitle>
      <v-card-text v-if="!currentSection?.title">
        Select a section from left menu.
      </v-card-text>
    </v-card>
    
    <v-list v-if="currentSection?.title" density="compact">
      <v-divider  />
      <v-list-item
        class="play-nav-item"
        :to="'/play/' + currentSection.slug"
        color="primary"
        title="Overview"
      />
      
      <v-list-item
        v-for="(page, index) in currentSection.pages"
        :key="page.slug"
        :title="`${index + 1}. ${page.title}`"
        :to="`/play/${currentSection.slug}/${page.slug}`"
        class="play-nav-item"
        color="primary"
      />
    </v-list>

</template>

<script setup lang="ts">
import { playSections } from '~/data/playSections'

const route = useRoute()

const currentSection = computed(() => {
  const slug = route.path.split('/')[2]
  return slug
    ? playSections.find(section => section.slug === slug) || null
    : null
})
</script>


<style scoped>
.play-nav-item {
  min-height: 32px;
  padding-top: 2px;
  padding-bottom: 2px;
}

.v-card-subtitle {
  font-size: 0.75rem;
}

.v-card-title {
  overflow: visible;
  text-wrap: auto;
}
</style>
