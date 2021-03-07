<template>
  <section class="form">
    <form @submit="addItemToLibrary">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            type="text"
            id="name-input"
            name="new-name"
            autocomplete="off"
            v-model="formData.name"
            placeholder="Ocean..">
        </div>
      </div>
      <div class="field">
        <select v-model="formData.selectCategory">
          <option v-for="option in formData.selectCategoryArray" :value="option.value" :key="option.value">
            {{ option.text }}
          </option>
        </select>
        <span>Selected: {{ formData.selectCategory }}</span>
      </div>
      <div class="field">
        <input type="radio" id="true" v-model="formData.datePicker" v-bind:value="true">
        <label for="true">Add date</label>
        <input type="radio" id="false" v-model="formData.datePicker" v-bind:value="false">
        <label for="false">Forget</label>
        <span> Picked: {{ formData.datePicker }}</span>
      </div>
      <div class="field">
        <label class="label">Source</label>
        <div class="control">
          <input
            type="text"
            id="source"
            name="new-source"
            autocomplete="off"
            v-model="formData.name"
            placeholder="wikipedia.org">
        </div>
      </div>
      <div class="field">
        <span>Multiline message is:</span>
        <br>
        <textarea v-model="formData.itemDescription" placeholder="Describe your data"></textarea>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showCityForm: false,
      formData: {
        name: '',
        selectCategory: 'A',
        selectCategoryArray: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' },
        ],
        datePicker: true,
        itemDescription: '',
      },
    };
  },
  methods: {
    addItemToLibrary(e) {
      e.preventDefault();
    },
  },
};
</script>
<style lang="scss" scoped>
  .field {
    padding: 20px 0;
  }
</style>
