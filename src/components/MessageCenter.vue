<template>

  <!-- Message Modal -->
  <div class="msgmodal">
    <div>
      <p
        @click="$emit('requestClose')"
        style="position: absolute;top: 2px;right:5px">
        <b>X</b>
      </p>
      <h3>Message Center</h3>
      <hr/>
      <div v-bind:class="{ hidden: messages }">
        <h5 class='hospital' @click="messages = !messages">Central Hospital</h5>
        <h5 class='hospital' @click="messages = !messages">Orange Med Center</h5>
      </div>
      <div v-bind:class="{ hidden: !messages }">
        <h5 class='hospital' @click="messages = !messages">Central Hospital</h5>
        <div>
          <h6 class="urgent">3/10 10:52am - CT scanner is down.</h6>
          <h6>3/08 9:30am - Presentation on new admitting procedures Tuesday at 10AM.</h6>
        </div>
      </div>
    </div>
  </div>

</template>


<script>

export default {
  name: 'MessageCenter',
  components: {
  },
  data: () => ({
    messages: false,
  }),
  computed: {
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<style>
.msgmodal {
    position: absolute;
    top: 48px;
    left: 0px;
    background:rgb(44, 40, 40);
    border: 1px solid #999999;
    border-radius: 10px;
    color: white;
    width: 380px;
    height: 500px;
    z-index: 99;
    padding: 15px;
}
.hidden {
    display: none;
}
.urgent {
  background-color: rgb(224, 100, 100);
}
</style>
