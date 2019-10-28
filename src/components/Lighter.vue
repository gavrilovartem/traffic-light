<template>
<div>
  <img src="../assets/traffic-light-final.png"/>   
  <div class="light" v-bind:class="{ active: isRed }" id="red"></div>
  <div class="light" v-bind:class="{ active: isYellow }" id="yellow"></div>
  <div class="light" v-bind:class="{ active: isGreen }" id="green"></div>
</div>
</template>

<script>
import router from '../router/index.js'

export default {
  name: "Lighter",
  props: {
    color: String,
    timeout: Number,
    nextColor: String,
  },

  computed: {
    isRed() {
      return this.color === "red" ? true : false;
    },
    isYellow() {
      return this.color === "yellow" ? true : false;
    },
    isGreen() {
      return this.color === "green" ? true : false;
    },
  },
  methods: {
  timer: function () {
    setTimeout(() => router.push({ name: this.nextColor}), this.timeout)
    }
  },
  mounted: function () {
    this.timer()
  },
  updated: function () {
    this.timer()
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light {
  border-radius: 85px;
  height: 170px;
  width: 170px;
  opacity: 0.2;
  position: absolute;
  left: 175px;
}
.light.active {
  opacity: 1;
}
#red {
  background-color: red;
  top: 75px;
}
#yellow {
  background-color: yellow;
  top: 285px;
}

#green {
  background-color: green;
  top: 490px;
}
</style>