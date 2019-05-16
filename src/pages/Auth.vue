<template>
  <q-page class="flex flex-center page">

    <div class="authform">

      <div v-if="invalidLogin">
        <h2>Invalid username or password.</h2>
        <button @click="reset" class="btn btn-primary">Try Again</button>
      </div>

      <div v-else-if="!signedIn">
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  v-model="username"
                  name="username"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">
                  Username is required
                </div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input
                type="password"
                v-model="password"
                name="password"
                class="form-control"
                :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">
                  Password is required
                </div>
            </div>
            <div class="form-group-ctrl">
                <button class="btn btn-primary" :disabled="signedIn">Login</button>
                <router-link to="/register" class="btn btn-link">Register</router-link>
            </div>
        </form>
      </div>

      <div v-else>
        <h2>Logout</h2>
        <br/>
        <br/>
        <button @click="signOut()" class="btn btn-primary">Logout</button>
        <br/>
        <router-link to="/ems" class="btn btn-link">Back to App</router-link>
      </div>

    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'PageAuth',
  data: () => ({
    username: '',
    password: '',
    submitted: false,
  }),
  computed: {
    ...mapState('jwt', ['signedIn', 'invalidLogin']),
  },
  methods: {
    ...mapActions('jwt', [
      'signOut',
    ]),
    ...mapGetters('jwt', ['signIn', 'logout', 'reset']),
    ...mapActions('jwt', ['signIn', 'logout', 'reset']),
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.signIn({ username, password });
      }
    },
  },
};
</script>

<style>
  .authform {
    width: 600px;
    margin: auto;
    margin-top: 20px;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
