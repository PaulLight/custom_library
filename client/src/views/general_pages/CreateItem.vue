<template>
  <div class="item-create">
    <v-layout>
      <v-flex xs5>
        <Panel title="Library Item">
          <v-text-field
            label="title"
            type="text"
            v-model="title"
            placeholder="title"
          ></v-text-field>
          <br/>
          <v-text-field
            label="type"
            type="text"
            v-model="type"
            placeholder="type"
          ></v-text-field>
          <br/>
          <v-text-field
            label="itemImageUrl"
            type="text"
            v-model="itemImageUrl"
            placeholder="itemImageUrl"
          ></v-text-field>
          <br/>
          <v-text-field
            label="youTubeVideoUrl"
            type="text"
            v-model="youTubeVideoUrl"
            placeholder="youTubeVideoUrl"
          ></v-text-field>
          <br/>
          <v-text-field
            label="url"
            type="text"
            v-model="url"
            placeholder="url"
          ></v-text-field>
          <br/>
          <v-text-field
            label="source_name"
            type="text"
            v-model="source_name"
            placeholder="source_name"
          ></v-text-field>
        </Panel>
      </v-flex>
      <v-flex xs7>
        <Panel title="Library Item">
          <v-textarea
            solo
            v-model="short_description"
            label="short_description"
          ></v-textarea>
        </Panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

import Panel from '@/components/Panel.vue';

export default {
  components: {
    Panel
  },
  data() {
    return {
      title: null,
      type: null,
      itemImageUrl: null,
      youTubeVideoUrl: null,
      short_description: null,
      url: null,
      source_name: null
    };
  }
};
</script>

<style scoped lang="scss"></style>
