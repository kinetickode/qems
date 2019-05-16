<template>

  <div class="emsdiv2">

    <div v-bind:class="{ hidden: isStemi }">

      <div class="complaints">
        <div
          v-for="item in complaints"
          v-bind:key="item.id"
          class="complaint"
          @click="setStemi()"
          v-bind:class="level(item)">
          {{item.name}}
        </div>
      </div>

      <div style="margin-top: 10px">
        <img
          src="~assets/emsfooter2.png"
          alt="Twiage EMS App"
          width="320"/>
      </div>

    </div>

    <div v-bind:class="{ hidden: !isStemi }">

          <img
            @click="setStemi()"
            src="~assets/emsstemibar.png"
            alt="Twiage EMS App"
            width="290"/>

          <div class="emsdiv22">
            <div class="complaints">
              <EMSTag
                v-for="item in tags"
                v-bind:key="item.id"
                v-bind:tag="item" />
            </div>
          </div>

          <div class="emsdiv22">
            <div>VITALS</div>
            <div class="complaints">
              <EMSTag
                v-for="item in vitals"
                v-bind:key="item.id"
                v-bind:name="item.name"
                v-bind:tag="item" />
            </div>
          </div>

          <div class="emsdiv22">
            <div>INTERVENTIONS</div>
            <div class="complaints">
              <EMSTag
                v-for="item in interventions"
                v-bind:key="item.id"
                v-bind:tag="item" />
            </div>
          </div>

    </div>

  </div>

</template>


<script>
import EMSTag from './EMSTag.vue';

export default {
  name: 'Complaints',
  components: {
    EMSTag,
  },
  data: () => ({
    start: true,
    stemi: false,
    complaints: [
      {
        id: 1,
        name: 'Cardiac Arrest',
        level: 1,
      },
      {
        id: 2,
        name: 'STEMI',
        level: 1,
      },
      {
        id: 3,
        name: 'Stroke',
        level: 1,
      },
      {
        id: 4,
        name: 'Resp. Distress',
        level: 1,
      },
      {
        id: 5,
        name: 'Sepsis',
        level: 1,
      },
      {
        id: 6,
        name: 'Other Adult',
        level: 1,
      },
      {
        id: 7,
        name: 'Other PEDI',
        level: 1,
      },
      {
        id: 8,
        name: 'Chest Pain',
        level: 2,
      },
      {
        id: 9,
        name: 'Psych/ Tox',
        level: 1,
      },
      {
        id: 10,
        name: 'Urgent',
        level: 2,
      },
      {
        id: 11,
        name: 'Routine',
        level: 3,
      },
      {
        id: 12,
        name: 'Isolation',
        level: 4,
      },
      {
        id: 13,
        name: 'Illness',
        level: 3,
      },
      {
        id: 14,
        name: 'Trauma',
        level: 1,
      },
      {
        id: 15,
        name: 'OBY/ GYN',
        level: 2,
      },
    ],
    tags: [
      {
        id: 1,
        name: 'Security',
      },
      {
        id: 2,
        name: 'Chest Pain',
      },
      {
        id: 3,
        name: 'Diaphoretic',
      },
      {
        id: 4,
        name: 'SOB',
      },
      {
        id: 5,
        name: 'HX: CAD',
      },
    ],
    vitals: [
      {
        id: 1,
        name: 'BP>90/60',
        data: [],
      },
      {
        id: 2,
        name: 'BP>180/100',
        data: [],
      },
      {
        id: 3,
        name: 'HR<40',
        data: [],
      },
      {
        id: 4,
        name: 'HR>120',
        data: [],
      },
      {
        id: 5,
        name: 'PVC/VT',
        data: [],
      },
      {
        id: 6,
        name: 'Enter BP',
        data: [{ name: 'Systolic', type: 'number' }, { name: 'Diastolic', type: 'number' }],
      },
      {
        id: 7,
        name: 'Enter HR',
        data: [{ name: 'Heart Rate', type: 'number' }],
      },
    ],
    interventions: [
      {
        id: 1,
        name: 'ALS On Board',
      },
      {
        id: 2,
        name: 'ASA',
      },
      {
        id: 3,
        name: 'Nitro',
      },
      {
        id: 4,
        name: 'IV',
      },
      {
        id: 5,
        name: 'CPR',
      },
      {
        id: 6,
        name: 'Shock',
      },
      {
        id: 7,
        name: 'Epi',
      },
      {
        id: 8,
        name: 'Amio',
      },
    ],
  }),
  computed: {
    isStemi() {
      return this.stemi;
    },
  },
  methods: {
    setStemi() {
      // this.$router.push('condition');
      this.stemi = !this.stemi;
    },
    level(item) {
      if (item.level === 1) {
        return 'c1';
      }
      if (item.level === 2) {
        return 'c2';
      }
      if (item.level === 4) {
        return 'c4';
      }
      return 'c3';
    },
  },
};
</script>

<style>
.hidden {
    display: none;
}
.emsdiv2 {
    display: block;
    flex-direction: column;
    align-items: center;
    background-color: #222222;
    margin: 0px 10px;
    padding: 0 10px;
    height: 450px;
    overflow-y: scroll;
}
.emsdiv22 {
    display: block;
    flex-direction: column;
    align-items: center;
    background-color: #222222;
    margin: 0px 5px;
    padding: 0 5px;
}
.complaints {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 0;
    margin-left: 15px;
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
    width: 100px;
    height: 75px;
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
.urgent {
  background-color: rgb(224, 100, 100);
}

</style>
