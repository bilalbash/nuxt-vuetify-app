<template>
  <v-app>
    <v-main>
      <v-container class="py-8">
        <v-card class="mb-6" color="error" variant="tonal">
          <v-card-title class="text-h4">Admin Layout</v-card-title>
          <v-card-text>
            This is the admin section. The layout changes here so it is clear you
            are in a different area.
          </v-card-text>
          <v-card-actions>
            <v-btn to="/" variant="text">Public</v-btn>
            <v-btn to="/users" variant="text">Users</v-btn>
            <v-btn to="/admin" variant="text">Admin</v-btn>
          </v-card-actions>
        </v-card>

        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
