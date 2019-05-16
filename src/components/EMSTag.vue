<template>
  <div @click="select()" class="tag" v-bind:class="{ selected: isSelected }">

    {{tag.name}}

    <div v-if="isSelected">
      <!-- Data Input Modal -->
      <div class="msgmodal" v-bind:class="{ hidden: !msgModalShow }">
        <div>
          <p
            @click.stop.prevent="closeModal"
            style="position: absolute;top: 2px;right:5px">
            <b>X</b>
          </p>
          <h3>{{ name }}</h3>
          <hr/>
          <div v-for="field in tag.data" v-bind:key="field.name" class="tagform">
            <label style="margin-right: 10px; text-align: left;">
              {{ field.name }}:
            </label>
            <span> </span>
            <input v-bind:type="field.type"/>
          </div>
          <hr/>
          <b-button
            size="sm"
            style="margin-right: 5px;"
            class="attach btn btn-danger btn-small">
            Cancel
          </b-button>
          <b-button
            size="sm"
            style="margin-left: 5px;"
            class="attach btn btn-success btn-small">
            Save
          </b-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'EMSTag',
  props: {
    tag: Object,
    name: String,
  },
  data: () => ({
    selected: false,
    msgModalShow: false,
  }),
  methods: {
    select() {
      this.selected = !this.selected;
      if (this.tag.data.length) {
        this.msgModalShow = true;
      }
    },
    closeModal() {
      this.msgModalShow = false;
    },
  },
  computed: {
    isSelected() {
      return this.selected;
    },
  },
};
</script>

<style>

.tag {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  color: black;
  padding: 5px 5px;
  font-size: 90%;
  font-weight: 600;
  word-wrap: break-word;
  cursor: pointer;
  margin: 3px;
}
.tagform {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  word-wrap: break-word;
}
.selected {
  background-color: red !important;
  color: white !important;
}
.msgmodal {
  position: absolute;
  top: 48px;
  left: 0px;
  background:rgb(44, 40, 40);
  border: 1px solid #999999;
  border-radius: 10px;
  color: white;
  width: 309px;
  z-index: 99;
  padding: 15px;
}
.hidden {
  display: none;
}
</style>
