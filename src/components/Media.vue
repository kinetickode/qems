<template>

  <div class="mediadiv">

    <button>Photo</button>
    <button>ID</button>
    <button>EKG</button>
    <button>Video Consult</button>
    <button>Voice Memo</button>
    <button>Video</button>

  </div>

</template>


<script>

export default {
  name: 'Media',
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
.mediadiv {
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
button {
  width: 250px;
  margin-bottom: 10px;
}
</style>
