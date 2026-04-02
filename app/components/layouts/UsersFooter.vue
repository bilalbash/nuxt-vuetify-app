<script setup lang="ts">
const footerActions = [
  { icon: 'mdi-account-check-outline', label: 'Profiles' },
  { icon: 'mdi-message-text-outline', label: 'Messages' },
  { icon: 'mdi-chart-box-outline', label: 'Reports' },
]
</script>

<template>
  <v-footer app border class="px-4 py-3">
    <div class="d-flex align-center w-100 flex-wrap ga-3">
      <div>
        <div class="text-subtitle-1 font-weight-medium">Users Footer</div>
        <div class="text-body-2">Helpful actions for the users section.</div>
      </div>
      <v-spacer />
      <v-btn
        v-for="action in footerActions"
        :key="action.label"
        :prepend-icon="action.icon"
        color="primary"
        rounded="pill"
        variant="tonal"
      >
        {{ action.label }}
      </v-btn>
    </div>
  </v-footer>
</template>
