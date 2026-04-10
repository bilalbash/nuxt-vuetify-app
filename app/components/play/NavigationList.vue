<template>
  <v-list open-strategy="single">
    <v-list-item
      title="Play Home"
      to="/play" 
      class="play-nav-item" 
      color="primary"
    />

    <v-list-group
      v-for="section in playSections"
      :key="section.slug"
      :value="section.slug"
    >
      <template #activator="{ props }">
        <v-list-item v-bind="props" class="play-nav-item" color="primary">
          <template #title>
            <span>{{ section.title }}</span>
          </template>
        </v-list-item>
      </template>

      <v-list-item class="play-nav-item" :to="'/play/' + section.slug" color="primary">
        <template #title>
          <span >Overview</span>
        </template>
      </v-list-item>

      <v-list-item
        v-for="page in section.pages"
        :key="page.slug"
        class="play-nav-item"
        :to="'/play/' + section.slug + '/' + page.slug"
        color="primary"
      >
        <template #title>
          <span >{{ page.title }}</span>
        </template>
      </v-list-item>
    </v-list-group>
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
</style>
