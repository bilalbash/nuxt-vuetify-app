<template>
  <PlayDetailPage section-slug="containment" page-slug="button" />
  
  
  <v-row>
  <v-col>
    single icon button
    <v-btn icon="$vuetify"></v-btn>
  </v-col>  
  <v-col>
    2 icons:
      <v-btn prepend-icon="$vuetify" append-icon="$vuetify">
  Button
</v-btn>
  </v-col>

  <v-col>
    text button:
 <v-btn prepend-icon="$vuetify" variant="text">
  Button
</v-btn>
  </v-col>

  <v-col>
    stacked
    <v-btn prepend-icon="$vuetify" stacked>
  Button
</v-btn>
  </v-col>
    <v-col>
      tonal
<v-btn prepend-icon="$vuetify" variant="tonal">
  Button
</v-btn>
  </v-col>
    <v-col>
      outlined
<v-btn prepend-icon="$vuetify" variant="outlined">
  Button
</v-btn>
  </v-col>

  
  </v-row>

  
  <v-divider class="my-2" />



</template>

<script setup lang="ts">
definePageMeta({
  title: "Button"
})
</script>
