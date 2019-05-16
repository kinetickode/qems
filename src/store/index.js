import Vue from 'vue';
import Vuex from 'vuex';
import jwt from './jwt';
import user from './user';
import error from './error';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const store = new Vuex.Store({
    modules: {
      jwt,
      user,
      error,
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });

  return store;
}
