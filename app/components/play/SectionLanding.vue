<template>
  <div v-if="section" class="d-flex flex-column ga-6">
    <section> 
      <h1>{{ section.title }}</h1>
      <p class="text-body-1 text-medium-emphasis">{{ section.description }}</p>
    </section>

    <v-row gap="6">
      <v-col
        v-for="page in section.pages"
        :key="page.slug"
        cols="12"
        md="4"
      >

        <v-card
          append-icon="mdi-arrow-right-bold"
          class="mx-auto"
          :to="pagePath(page.slug)"
          :title="page.title"
        ></v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { playSections } from '~/data/playSections'

const props = defineProps<{
  sectionSlug: string
}>()

const section = computed(() => playSections.find(item => item.slug === props.sectionSlug))

const pagePath = (pageSlug: string) => '/play/' + props.sectionSlug + '/' + pageSlug
</script>
