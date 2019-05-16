<template>
  <q-page class="flex flex-center page">

    <!-- Message Modal -->
    <MessageCenter
      v-bind:class="{ hidden: !msgModalShow }"
      v-on:requestClose="msgModalShow = !msgModalShow" />

    <!-- Case Page -->
    <div class="">

      <div class="headerline1">
        <router-link to="/ems" class="singlelink">
          <a>Close Case</a>
        </router-link>
        <span>Case #58001</span>
        <a @click="msgModalShow = !msgModalShow">Messages</a>
      </div>

      <div class="emsrow1">
        <input
          type="text"
          style="width: 70%"
          placeholder="Choose Age"/>
        <div class="gender">
          <span>M</span>
          <span>F</span>
        </div>
      </div>

      <div class="emsrow1">
        <input
          type="text"
          style="width: 100%"
          placeholder="Choose Hospital"/>
      </div>

      <div class="emsrow1" style="height: 46px">
        <div class="btnRow">
          <button
            @click="tabSet('complaints')"
            v-bind:class="{ b1: complaints, b2: !complaints}">
            COMPLAINTS
          </button>
          <button
            @click="tabSet('media')"
            v-bind:class="{ b1: media, b2: !media}">
            MEDIA
            </button>
          <button
            @click="tabSet('chat')"
            v-bind:class="{ b1: chat, b2: !chat}">
            CHAT
          </button>
          <button
            @click="tabSet('transfer')"
            v-bind:class="{ b1: transfer, b2: !transfer}">
            TRANSFER
          </button>
        </div>
      </div>

      <Complaints v-if="complaints"/>

      <Media v-if="media"/>

      <Chat v-if="chat"/>

      <Transfer v-if="transfer"/>

    </div>

  </q-page>
</template>


<script>
import MessageCenter from '../components/MessageCenter.vue';
import Complaints from '../components/Complaints.vue';
import Media from '../components/Media.vue';
import Chat from '../components/Chat.vue';
import Transfer from '../components/Transfer.vue';

export default {
  name: 'PageCase',
  components: {
    MessageCenter,
    Complaints,
    Media,
    Chat,
    Transfer,
  },
  data: () => ({
    msgModalShow: false,
    complaints: true,
    media: false,
    chat: false,
    transfer: false,
  }),
  computed: {
  },
  methods: {
    tabSet(item) {
      switch (item) {
        case 'media':
          this.complaints = false;
          this.media = true;
          this.chat = false;
          this.transfer = false;
          break;
        case 'chat':
          this.complaints = false;
          this.media = false;
          this.chat = true;
          this.transfer = false;
          break;
        case 'transfer':
          this.complaints = false;
          this.media = false;
          this.chat = false;
          this.transfer = true;
          break;
        default:
          this.complaints = true;
          this.media = false;
          this.chat = false;
          this.transfer = false;
      }
    },
  },
};
</script>


<style>
.page {
  background-color: #222222;
}
.hidden {
    display: none;
}
.btnRow {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px
}
.btnRow button{
  width: 88px;
  font-size: 85%;
}
.headerline1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 85%;
    font-weight: 500;
    padding: 0 20px;
}
.headerline1 a {
  color: red !important;
  cursor: pointer;
}
.headerline1 span {
  color: white;
}

.emsrow1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    background-color: #222222;
    margin: 2px 10px;
    padding: 0 10px;
    height: 35px;
}
  .emsrow1 a {
    color: red !important;
    cursor: pointer;
  }
  .emsrow1 span {
    color: white;
  }
  .emsrow1 input {
    border-radius: 4px;
  }
  .emsrow1 .btn-group button {
    font-size: 72%;
    font-weight: 500;
  }

</style>
