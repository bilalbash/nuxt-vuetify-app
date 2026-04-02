<template>
  <v-app>
    <LayoutsAdminNavigation />

    <v-main>
      <v-container class="py-8">
        <slot />
      </v-container>
    </v-main>

    <LayoutsAdminFooter />
  </v-app>
</template>
