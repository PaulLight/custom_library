<template>
  <v-layout column>
    <Panel title="Login">
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
    </Panel>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import Panel from '@/components/Panel.vue';

export default {
  components: {
    Panel
  },
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
