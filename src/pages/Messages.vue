<template>
  <q-page class="flex flex-center page">

    <div class="pagediv">

      <div class="headerline">
        <span>MESSAGES</span>
      </div>

      <div class="emsrow">
        <router-link to="/ems" class="singlelink">Back</router-link>
      </div>

    </div>

  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageMessage',
};
</script>


<style>
.hidden {
  display: none;
}
.pagediv {
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
