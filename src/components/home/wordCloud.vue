<template>
  <div>
    <div id="word-cloud"></div>
  </div>
</template>
<script>
import 'echarts-wordcloud'
export default {
  name: "wordCloud",
  data(){
    return {
    }
  },
  methods: {
    initWordCloud() {
      let chart = this.$echarts.init(document.getElementById('word-cloud'));
      let option = {
        tooltip: {},
        series: [ {
          type: 'wordCloud',
          gridSize: 2,
          sizeRange: [18, 30],
          rotationRange: [-90, 90],
          shape: 'pentagon',
          width: 320,
          height: 320,
          drawOutOfBound: true,
          textStyle: {
            color: function (params) {
              if(params.value > 3000){
                return '#2cec2c';
              }
              return params.value > 2000 ? '#FFF':'#f50606';
            }
          },
          emphasis: {
            textStyle: {
              shadowBlur: 20,
              shadowColor: '#333'
            }
          },
          data: [
            {
              name: '东门厕所',
              value: 10000,
            },
            {
              name: '园区厕所',
              value: 6181
            },
            {
              name: '小厕所',
              value: 847
            },
            {
              name: '多用厕所',
              value: 360
            },
            {
              name: '南门厕所',
              value: 282
            },
            {
              name: '词云厕所',
              value: 282
            },
            {
              name: '词云厕所',
                  value: 2820
            }
          ]
        } ]
      };
      chart.setOption(option);
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.initWordCloud();
    })
  }
}
</script>

<style scoped>
#word-cloud{
  width: 320px;
  height: 360px;
  background: #1c2038;
  opacity: 0.9;
  position: relative;
  right: 160px;
  border: #2cec2c 1px solid;
  border-radius: 2%;
}

</style>
