<template>
  <v-breadcrumbs :items="breadcrumbItems" color="primary">
    <template #divider>
      <v-icon icon="mdi-chevron-right" />
    </template>
  </v-breadcrumbs>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { playSections } from '~/data/playSections'

const route = useRoute()

const slugTitleMap = computed(() => {
  const map = new Map<string, string>([['play', 'Play']])

  for (const section of playSections) {
    map.set(section.slug, section.title)
    for (const page of section.pages) {
      map.set(page.slug, page.title)
    }
  }

  return map
})

const breadcrumbItems = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  let currentPath = ''

  return segments.map((segment, index) => {
    currentPath += '/' + segment
    return {
      title: slugTitleMap.value.get(segment) || segment,
      to: currentPath,
      disabled: index === segments.length - 1,
    }
  })
})
</script>
