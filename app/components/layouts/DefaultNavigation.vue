<template>
  <v-app-bar color="surface" elevation="4">
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-app-bar-title>Default Layout</v-app-bar-title>
    <v-spacer />
    <v-btn icon="mdi-theme-light-dark" variant="text" @click="$vuetify.theme.cycle()" />
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    color="surface"
    location="left"
    temporary
  >
    <v-list nav>
      <v-list-subheader>Navigate Layouts</v-list-subheader>
      <v-list-item
        v-for="item in menuItems"
        :key="item.to"
        :prepend-icon="item.icon"
        :subtitle="item.subtitle"
        :title="item.title"
        :to="item.to"
        rounded="lg"
        @click="drawer = false"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const drawer = ref(false)

const menuItems = [
  {
    icon: 'mdi-home-outline',
    subtitle: 'Default layout',
    title: 'Home',
    to: '/',
  },
  {
    icon: 'mdi-account-group-outline',
    subtitle: 'Users layout',
    title: 'Users',
    to: '/users',
  },
  {
    icon: 'mdi-shield-crown-outline',
    subtitle: 'Admin layout',
    title: 'Admin',
    to: '/admin',
  },
]
</script>
