<template>
  <div>
    <div class="ratio">
      <svg class="circle">
        <circle :r="radius" :stroke-dashoffset="strokeDashoffset" cx="48" cy="48" fill="none" stroke="#eee"
                stroke-width="3"/>
        <circle :r="radius" :stroke="color" :stroke-dasharray="strokeDashArray" class="blue-circle"
                cx="48" cy="48" fill="none" stroke-width="3"/>
      </svg>
      <span><img :src="this.gender === 'male'?maleImgURL:femaleImgURL" height="20px" width="20px"/></span>
    </div>
    <div class="data-gender-desc">
      <h3>198,100</h3>
      <p class="people-name">男性游客</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "annular",
  props: ['gender', 'ratio'],
  data() {
    return {
      maleImgURL: require('../../assets/svg/male.svg'),
      femaleImgURL: require('../../assets/svg/female.svg'),
      color: '#4ffd0c',
      radius: 25,
      strokeDashoffset: '',
      strokeDashArray: ''
    }
  },
  mounted() {
    this.strokeDashoffset = this.radius * 2 * Math.PI;
    this.strokeDashArray = this.ratio * this.radius * 2 * Math.PI + ',' + this.strokeDashoffset;

  }
}
</script>

<style scoped>
.circle {
  position: relative;
  margin: 0 auto;
  width: 96px;
  height: 96px;
  align-items: center;
  justify-content: center;
}

.blue-circle {
  transform: rotateZ(-90deg);
  transform-origin: 50% 50%;
}

span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-family: monospace;
  font-size: 20px;
  color: #4ffd0c;
}

.ratio {
  display: inline-block;
  position: relative;
  float: left;
  margin-top: 20px;
}
.people-name{
  color: #abb1b4;
  font-size: 14px;
}
.data-gender-desc{
  display: inline-block;
  line-height: 10px;
}
</style>
