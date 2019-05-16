<template>
  <q-page class="flex flex-center">
    <h2>Index</h2>
    <br/>
    <img alt="Twiage logo" src="~assets/TwiageLogo.png">
    <div>
      <q-btn
        @click="$q.notify('My message')"
        color="primary"
        label="Show a notification"
      />
      <q-icon name="cloud" />
      <q-btn
        @click="showNotification"
        color="primary"
        label="Show another notification"
      />
      <router-link to="/ems" class="singlelink">EMS</router-link>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  methods: {
    showNotification() {
      this.$q.notify('Some other message');
    },
  },
};
</script>
