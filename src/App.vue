<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center py-0">
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
            <v-avatar
              rounded="0"
              class="mr-3"
              image="https://cdn.vuetifyjs.com/docs/images/logos/v.png"
            />

            Vuetify 3
          </div>
        </v-app-bar-title>
      </v-container>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>

    <v-footer>
      <v-container class="text-overline d-flex align-center justify-space-between">
        <div>
          Copyright &copy; 2022 Vuetify, LLC
        </div>

        <v-icon icon="mdi-vuetify" size="x-large"></v-icon>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
  export default { name: 'App' }
</script>
