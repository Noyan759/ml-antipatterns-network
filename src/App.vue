<template>
  <v-app>
    <v-app-bar color="primary">
      <v-container class="d-flex align-center py-0">
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
            <v-avatar rounded="0" class="mr-3" image="src/assets/network.png" />

            Antipatterns In Machine Learning Systems
          </div>
        </v-app-bar-title>
      </v-container>
    </v-app-bar>

    <v-main class="body">
      <RouterView />
    </v-main>

    <v-footer color="primary" class="footer">
      <!-- <v-container class="text-overline d-flex align-center justify-space-between">
        <div>
          Copyright &copy; 2022 Vuetify, LLC
        </div>

        <v-icon icon="mdi-vuetify" size="large"></v-icon>
      </v-container> -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
export default { name: 'App' }
</script>

<style scoped>
.body {
  margin-bottom:50px;
}
.footer {
  position: fixed;
  height: 50px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
}
</style>