<script setup lang="ts">
const footerActions = [
  { icon: 'mdi-security', label: 'Security' },
  { icon: 'mdi-cog-outline', label: 'Settings' },
  { icon: 'mdi-database-outline', label: 'Data' },
]
</script>

<template>
  <v-footer app border class="px-4 py-3">
    <div class="d-flex align-center w-100 flex-wrap ga-3">
      <div>
        <div class="text-subtitle-1 font-weight-medium">Admin Footer</div>
        <div class="text-body-2">Quick actions for the admin section.</div>
      </div>
      <v-spacer />
      <v-btn
        v-for="action in footerActions"
        :key="action.label"
        :prepend-icon="action.icon"
        color="error"
        rounded="pill"
        variant="tonal"
      >
        {{ action.label }}
      </v-btn>
    </div>
  </v-footer>
</template>
