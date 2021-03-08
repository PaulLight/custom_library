<template>
  <div>
    Register
    <input type="email"
           name="email"
           v-model="email"
           placeholder="email"
    />
    <br/>
    <input type="password"
           name="password"
           v-model="password"
           placeholder="password"
    />
    <br/>
    <button @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      email: '1231231',
      password: '3123213'
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
};
</script>
