<template>
  <v-app>
    <LayoutsDefaultNavigation />

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <LayoutsDefaultFooter />
  </v-app>
</template>
