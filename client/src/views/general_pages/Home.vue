<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/media/logo_main.png"/>
    <HomeMessage msg="Welcome to Your Personal Library"/>
    <div class="home__content">
      <button class="add-post"
              @click="toggleFormVisibility">Create..
      </button>
      <ItemForm v-if="showForm"/>
    </div>
  </div>
</template>

<script>
import HomeMessage from '@/components/HomeMessage.vue';
import ItemForm from '@/components/ItemForm.vue';

export default {
  name: 'Home',
  components: {
    HomeMessage,
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
.home {
  &__content {
    margin: 0 auto;
    max-width: 500px;
  }
}
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
