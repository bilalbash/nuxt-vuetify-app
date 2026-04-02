<template>
  <v-app>
    <v-main>
      <v-container class="py-8">
        <v-card class="mb-6" variant="tonal">
          <v-card-title class="text-h4">Default Layout</v-card-title>
          <v-card-text>
            You are on the default layout of the app. Use the links below to move
            between layouts.
          </v-card-text>
          <v-card-actions>
            <v-btn to="/" variant="text">Home</v-btn>
            <v-btn to="/users" variant="text">Users</v-btn>
            <v-btn to="/admin" variant="text">Admin</v-btn>
          </v-card-actions>
        </v-card>

        <slot />
      </v-container>
    </v-main>

    <v-btn
      class="ma-2"
      icon="mdi-theme-light-dark"
      location="top right"
      position="absolute"
      @click="$vuetify.theme.cycle()"
    />
  </v-app>
</template>
