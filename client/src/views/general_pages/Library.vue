<template>
  <div class="libary">
    <h1>This is a personal Library page</h1>
    <v-layout column>
      <v-flex xs6 class="container">
          <Panel title="Library">
            <div v-for="item in library" :key="item.id">
              <h2>
                {{ item.title }}
              </h2>
              <div>
                {{ item.short_description }}
              </div>
              <a v-bind:href="item.url">
                {{ item.source_name }}
              </a>
            </div>
          </Panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel.vue';
import Library from '@/services/Library';

export default {
  components: {
    Panel
  },
  data() {
    return {
      library: null
    };
  },
  async mounted() {
    this.library = (await Library.getLibrary()).data;
  }
};
</script>
