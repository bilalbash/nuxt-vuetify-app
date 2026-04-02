<template>
  <v-app>
    <LayoutsDefaultNavigation />

    <v-main>
      <v-container class="py-8">
        <slot />
      </v-container>
    </v-main>

    <LayoutsDefaultFooter />
  </v-app>
</template>
