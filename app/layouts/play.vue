<template>
  <v-app>
    <LayoutsDefaultNavigation />

    <v-main>
      <v-container fluid>
        <v-row  gap="4">
          <v-col lg="2" class="d-none d-lg-block">
            <PlayNavigationList />
          </v-col>

          <v-col md="12" lg="8">
            <v-toolbar density="compact">
              <v-app-bar-nav-icon class="d-lg-none" @click="drawer = !drawer" />
              <PlayBreadcrumbs />
            </v-toolbar>

            <v-navigation-drawer
              v-model="drawer"
              color="surface"
              location="left"
              temporary
              class="d-lg-none"
            >
              <PlayNavigationList />
            </v-navigation-drawer>

            <slot />
          </v-col>

          <v-col lg="2" class="d-none d-lg-block">
            <PlayCurrentSection />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <LayoutsDefaultFooter />
  </v-app>
</template>

<script setup lang="ts">
const drawer = ref(false)
</script>
