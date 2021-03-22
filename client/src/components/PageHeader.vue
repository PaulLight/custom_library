<template>
  <div>
    Custom Library
    <v-btn text>
      <router-link to="/">Home</router-link>
    </v-btn>
    <v-btn text>
      <router-link to="/library">Library</router-link>
    </v-btn>
    <v-btn text>
      <router-link to="/register">Register</router-link>
    </v-btn>
    <v-btn text>
      <router-link to="/login">Login</router-link>
    </v-btn>
    <v-btn text>
      <router-link to="/about">About</router-link>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    msg: String
  },
  data: () => ({

  }),
  methods: {
  }
};
</script>
