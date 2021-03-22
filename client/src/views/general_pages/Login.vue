<template>
  <v-layout column>
    <v-flex xs6 class="container">
      <div class="white elevation-2">
        <v-toolbar flat dense dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            type="email"
            v-model="email"
            placeholder="email"
          ></v-text-field>
          <br/>
          <v-text-field
            type="password"
            v-model="password"
            placeholder="password"
          ></v-text-field>
          <v-alert type="error" v-if="error">
            {{ error }}
          </v-alert>
          <br/>
          <v-btn
            color="warning"
            dark
            @click="login"
          >
            Login
          </v-btn>

        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
        this.error = error.response.data.error;
      }
    }
  }
};
</script>
<style scoped lang="scss">
</style>
