<template>
  <v-app>
    <v-app-bar
      app
      color="#D6CFB4"
    >
      <PageHeader/>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PageHeader from './components/PageHeader.vue';

export default {
  name: 'App',

  components: {
    PageHeader
  },

  data: () => ({
    //
  })
};
</script>
