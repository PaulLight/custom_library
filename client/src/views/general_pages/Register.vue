<template>
  <v-layout column>
    <v-flex xs6 class="container">
      <div class="white elevation-2">
        <v-toolbar flat dense dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form">
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
          </form>
          <v-alert type="error" v-if="error">
            {{ error }}
          </v-alert>
          <br/>
          <v-btn
            color="warning"
            dark
            @click="register"
          >
            Register
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
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        await this.$store.dispatch('setToken', response.data.token);
        await this.$store.dispatch('setUser', response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>
<style scoped lang="scss">
</style>
