<template>
  <v-app>
    <LayoutsUsersNavigation />

    <v-main>
      <v-container class="py-8">
        <slot />
      </v-container>
    </v-main>

    <LayoutsUsersFooter />
  </v-app>
</template>
