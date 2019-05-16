/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import { BASE_API_URL } from './config';

const AUTH_URL = `${BASE_API_URL}v4/auth/signin`;
// const TEST_CREDENTIALS = {
//   username: 'john.dorian',
//   password: 'Password1234!',
// };
// const TEST_CREDENTIALS = {
//   username: 'omcgettrick@twiagemed.com',
//   password: 'EmsEms123$',
// };

const state = {
  jwtToken: null,
  loading: true,
  signedIn: false,
  invalidLogin: false,
};

const getters = {
  signedIn: state => state.signedIn,
  JWTtoken: state => state.jwtToken,
};

const actions = {
  setJWT({ commit, dispatch }, userToken) {
    commit('setJWT', { token: userToken });
    dispatch('user/loadUser', {}, { root: true });
  },
  signIn({ commit, dispatch }, payload) {
    axios
      .post(AUTH_URL, payload)
      .then((response) => {
        commit('setJWT', response.data);
        dispatch('user/loadUser', {}, { root: true });
        commit('changeLoadingState', false);
      })
      .catch((error) => {
        console.log('Auth Err:', error);
        commit('loginFailed');
      });
  },
  signOut({ commit }) {
    commit('unsetJWT');
  },
  showState() {
    console.log('showState', this);
  },
  reset({ commit }) {
    commit('resetLogin');
  },

};

const mutations = {
  setJWT(state, authData) {
    if (authData.token) {
      // console.log('jwt', authData.token);
      state.jwtToken = authData.token;
      state.signedIn = true;
      localStorage.setItem('userToken', authData.token);
    } else {
      state.jwtToken = null;
      state.signedIn = false;
    }
  },
  unsetJWT(state) {
    state.jwtToken = 'xyz';
    state.signedIn = false;
    localStorage.removeItem('userToken');
  },
  changeLoadingState(state, loading) {
    state.loading = loading;
  },
  loginFailed(state) {
    state.invalidLogin = true;
  },
  resetLogin(state) {
    state.invalidLogin = false;
  },
};

const jwt = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default jwt;
