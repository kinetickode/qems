<template>
  <q-page class="flex flex-center page">

    <div>

      <div class="headerline">
        <router-link to="/settings" class="singlelink">Settings</router-link>
        <span>Twiage EMS</span>
      </div>

      <div class="emsrow">
        <span>Welcome {{ displayName }}</span>
        <router-link to="/auth" class="singlelink">Logout</router-link>
      </div>

      <div class="emsrow">
        <span>Shift Ends</span>
        <a>Choose Time</a>
      </div>

      <div class="emsrow">
        <span>Team</span>
        <a>Live Operations Center</a>
      </div>

      <div class="emsrow">
        <span>Truck</span>
        <a>EMS Truck 1</a>
      </div>

      <div class="emsdiv">
        <img
          src="~assets/emsbadge.png"
          alt="Twiage EMS App"
          style="margin-left: 20px;"
          width="280"/>

        <router-link to="/case" class="singlelink">
          <button
            class="startcase">
              START CASE
          </button>
        </router-link>

        <router-link to="/transfer" class="singlelink">
          <button
            class="startcase"
            to="/transfer">
            START TRANSFER
          </button>
        </router-link>

        <img
          src="~assets/emsfooter.png"
          alt="Twiage EMS App"
          style="margin-top: 100px"
          width="280"/>
      </div>

    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'PageEMS',
  computed: {
    ...mapState('jwt', [
      'signedIn',
    ]),
    ...mapGetters('user', [
      'displayName',
    ]),
  },
};
</script>


<style>
.page {
  background-color: #222222;
}
.centerdiv {
    position: relative;
    width: 500px;
    margin: 0 auto;
}
.iphone {
    position: absolute;
    top: 10px;
    left: 50px;
    z-index: 1;
}
.msgmodal {
    position: absolute;
    top: 48px;
    left: 0px;
    background:rgb(44, 40, 40);
    border: 1px solid #999999;
    border-radius: 10px;
    color: white;
    width: 309px;
    height: 500px;
    z-index: 99;
    padding: 15px;
}
.app {
    position: absolute;
    top: 57px;
    left: 96px;
    background:black;
    color: white;
    width: 309px;
    height: 640px;
    z-index: 99;
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
    .btn-group button {
      font-size: 72%;
      font-weight: 500;
    }
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

.emsdiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #222222;
    margin: 0px 10px;
    padding: 0 10px;
    height: 300px;
    overflow-y: scroll;
}
.emsdiv2 {
    display: block;
    flex-direction: column;
    align-items: center;
    background-color: #222222;
    margin: 0px 5px;
    padding: 0 5px;
}
.startcase {
    background-color: #CD0000;
    color: white;
    padding: 5px 60px;
    border: 1px solid #CD0000;
    border-radius: 5px;
    font-size: 90%;
    width: 250px;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 10px;
    margin-left: 30px;
}
.gender {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #999999;
    border: 2px solid #999999;
    border-radius: 2px;
    font-size: 90%;
    font-weight: 500;
    width: 28%;
    padding: 3px 8px;
    cursor: pointer;
}
.b1 {
    background-color: #CD0000;
    border: 1px solid #CD0000;
    color: white;
    cursor: pointer;
}
.b2 {
    background-color: #222222;
    border: 1px solid #CD0000;
    color: white;
    cursor: pointer;
}
.complaints {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 0;
}
.complaint {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    padding: 10px 10px;
    border: 1px solid #222222;
    border-radius: 5px;
    font-size: 90%;
    font-weight: 600;
    word-wrap: break-word;
    cursor: pointer;
    width: 83px;
    height: 75px;
    margin: 3px;
}
.tag {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    color: black;
    padding: 5px 5px;
    font-size: 90%;
    font-weight: 600;
    word-wrap: break-word;
    cursor: pointer;
    margin: 3px;
}
.c1 {
  background-color: #CD0000;
}
.c2 {
  background-color: #EE8300;
}
.c3 {
  background-color: #00C85A;
}
.c4 {
  background-color: blue;
}
.hospital {
  width: 100%;
  border: 1px solid #222222;
  border-radius: 5px;
  cursor: pointer;
  color: cornflowerblue;
  background-color: lightgray;
}
.urgent {
  background-color: rgb(224, 100, 100);
}

</style>
