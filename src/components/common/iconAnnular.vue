<template>
  <div>
    <div class="ratio">
      <svg class="circle">
        <circle :r="radius" :stroke-dashoffset="strokeDashoffset" cx="48" cy="48" fill="none" stroke="#eee"
                stroke-width="3"/>
        <circle :r="radius" :stroke="color" :stroke-dasharray="strokeDashArray" class="blue-circle"
                cx="48" cy="48" fill="none" stroke-width="3"/>
      </svg>
      <span @click="changeImgURL"><img style="height: 25px;width: 25px;" :src="getStateOfCurr"/></span>
      <span style="margin-top: 5vh;color: #ffffff;font-size: 16px">{{ name }}</span>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
  name: "iconAnnular",
  props:['imgOriginalURL','name'],
  data() {
    return {
      color: '#4ffd0c',
      radius: 25,
      strokeDashoffset: '',
      strokeDashArray: '',
      ratio: '.5',
      imgName: '',
      imgURL: '',
      imgURLS:[
        {
          name:'overview',
          origin:require('../../assets/svg/overview.svg'),
          active:require('../../assets/svg/overview-active.svg')
        },
        {
          name: 'park-location',
          origin:require('../../assets/svg/park-location.svg'),
          active:require('../../assets/svg/park-location-active.svg')
        },
        {
          name: 'full-sights',
          origin:require('../../assets/svg/full-sights.svg'),
          active:require('../../assets/svg/full-sights-active.svg')
        },
        {
          name: 'path-to',
          origin:require('../../assets/svg/path-to.svg'),
          active:require('../../assets/svg/path-to-active.svg')
        },
        {
          name: 'weather',
          origin:require('../../assets/svg/weather.svg'),
          active:require('../../assets/svg/weather-active.svg')
        }
      ]
    }
  },
  computed:{
    ...mapState([
        'currBtnName'
    ]),
    getStateOfCurr(){
      if(this.currBtnName !== this.imgName){
        this.imgURLS.filter((img)=>{
          if(this.imgURL === img.active){
            this.imgURL =  img.origin;
            return this.imgURL;
          }
        })
      }
      return this.imgURL;
    }
  },
  methods:{
    ...mapMutations([
        'CURRENT_BUTTON'
    ]),
    changeImgURL(){
      this.imgURLS.filter((img)=>{
        if(this.imgURL === img.origin){
          this.imgURL = img.active;
          if(!this.imgName) this.imgName = img.name;
          this.CURRENT_BUTTON({ currBtnName: img.name });
        }else if(this.imgURL === img.active){
          this.imgURL =  img.origin;
          this.CURRENT_BUTTON({ currBtnName: img.name });
        }
      })
    }
  },
  mounted() {
    this.strokeDashoffset = this.radius * 2 * Math.PI;
    this.strokeDashArray = this.ratio * this.radius * 2 * Math.PI + ',' + this.strokeDashoffset;
    this.imgURL = this.imgOriginalURL;
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

span{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-family: monospace;
  font-size: 12px;
  color: #4ffd0c;
  margin-top: -2px;
}

.ratio {
  display: inline-block;
  position: relative;
}
</style>
