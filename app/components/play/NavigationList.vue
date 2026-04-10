<template>
  <v-list>
    <v-list-item
      title="Play Home"
      to="/play" 
      class="play-nav-item" 
      color="primary"
    />
    <v-divider class="my-2" />

    <v-list-item
      v-for="section in playSections"
      :key="section.slug"
      :subtitle="section.pages.length + ' pages'"
      class="play-nav-item"
      :to="'/play/' + section.slug"
      color="primary"
    >
      <template #title>
        <span>{{ section.title }}</span>
      </template>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { playSections } from '~/data/playSections'
</script>

<style scoped>
.play-nav-item {
  min-height: 32px;
  padding-top: 2px;
  padding-bottom: 2px;
  
}

:deep(.v-list-item-subtitle) {
  font-size: 0.75rem;
}
</style>
