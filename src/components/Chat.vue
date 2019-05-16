<template>

  <div class="chatdiv">


  </div>

</template>


<script>

export default {
  name: 'Chat',
  components: {
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  },
};
</script>

<style>
.hidden {
    display: none;
}
.chatdiv {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #222222;
    margin: 0px 10px;
    padding: 0 10px;
    height: 450px;
    overflow-y: scroll;
}
</style>
