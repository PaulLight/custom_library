<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/media/logo_main.png"/>
    <HelloWorld msg="Welcome to Your Personal Library"/>
    <button class="add-post"
            @click="toggleFormVisibility">Create..</button>
    <ItemForm v-if="showForm" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ItemForm from '@/components/ItemForm.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ItemForm
  },
  data() {
    return {
      showForm: false
    };
  },
  methods: {
    toggleFormVisibility() {
      this.showForm = !this.showForm;
    }
  }
};
</script>

<style scoped lang="scss">
.add-post {
  background-color: #D6CFB4;
  border: 1px solid black;
  margin-top: 30px;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    border-color: #D6CFB4;
  }
  &:focus {
    outline: none;
  }
}
</style>
