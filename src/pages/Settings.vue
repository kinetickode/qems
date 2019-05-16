<template>
  <q-page class="flex flex-center page">

    <div>

      <div class="headerline">
        <span>Settings</span>
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
  name: 'PageSettings',
};
</script>


<style>
.page {
  background-color: #222222;
}
.hidden {
    display: none;
}
.headerline {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 85%;
    font-weight: 500;
    padding: 0 20px;
}
    .headerline a {
      color: red !important;
      cursor: pointer;
    }
    .headerline span {
      color: white;
    }

.emsrow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 85%;
    font-weight: 500;
    background-color: #222222;
    margin: 2px 10px;
    padding: 0 10px;
    height: 35px;
}
    .emsrow a {
      color: red !important;
      cursor: pointer;
    }
    .emsrow span {
      color: white;
    }
    .emsrow input {
      border-radius: 4px;
    }
    .emsrow .btn-group button {
      font-size: 72%;
      font-weight: 500;
    }

</style>
