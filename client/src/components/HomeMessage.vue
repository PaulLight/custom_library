<template>
  <v-container>
    <v-row class="text-center">
      <h1>{{ msg }}</h1>
      <h3>Start by building up your knowledge!</h3>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeMessage',
  props: {
    msg: String
  },
  data: () => ({

  })
};
</script>
