<template>
  <v-app>
    <v-main>
      <v-container class="py-8">
        <v-card class="mb-6" color="primary" variant="tonal">
          <v-card-title class="text-h4">User Layout</v-card-title>
          <v-card-text>
            This layout is for user-facing pages and shows that you navigated to
            the user area.
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
