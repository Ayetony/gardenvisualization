<template>
<div>
  <div class="sidebar">
    <div class="left-pane-head">
      <p class="stick"></p>
      <p class="left-title">游客客源地</p>
    </div>
    <br/>
    <div class="alt-option-dot"><a>.</a><a>.</a><a :style="{color: '#04f604'}">.</a>
      <div class="gradiant-line"></div>
    </div>
    <div style="padding: 10px;float: right;clear:left;position: relative;left: -2vh">
      <el-row>
        <el-button size="mini">本周</el-button>
        <el-button size="mini">本月</el-button>
        <el-button size="mini">本年</el-button>
      </el-row>
    </div>
  </div>
  <div ref="main" style="height: 350px;width: 30%;position: absolute;left: 70%;top:120px;color: #FFF">
  </div>
  <div class="envDetail">
    <div class="left-pane-head">
      <p class="stick"></p>
      <p class="left-title">环境信息</p>
    </div>
    <br/>
    <div class="alt-option-dot"><a>.</a><a>.</a><a :style="{color: '#31c531'}">.</a>
      <div class="gradiant-line"></div>
    </div>
    <div class="envDetailDesc">
      <span>不合格</span><span style="background: #D8352A;margin-left: 20px"></span>
      <span>合格</span><span style="background: #31c531"></span>
    </div>
    <div class="wordcloud">
      <bubbleChartD3/>
    </div>
  </div>
</div>
</template>

<script>
import bubbleChartD3 from "@/components/common/bubbleChartD3";
export default {
  name: "sideBar",
  components:{
    bubbleChartD3
  },
  data(){
    return {
      option:{
        title:{
          text: "",
          subtext: '总数',
          x: 'center',
          y: '40%',
          textStyle:{
            color: '#FFF',
            fontSize: 25
          },
          subtextStyle:{
            fontSize: 18,
            color: '#FFF',
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          top: '20%',
          left: '70%',
          height:300,
          itemGap: 25,
          textStyle: {
            color: '#FFF',
          }
        },
        series: [
          {
            name: '游客来源',
            type: 'pie',
            // color:['','','','','',''],
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            itemStyle: {
              width: 3,
              shadowBlur: 10,
              shadowColor: 'rgba(0,0,0,0.4)',
              shadowOffsetY: 10,
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: '20',
                fontWeight: 'bolder',
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: '华东'},
              { value: 735, name: '华南' },
              { value: 580, name: '西北' },
              { value: 484, name: '西南' },
              { value: 300, name: '东北' },
              { value: 390, name: '其他' }
            ]
          }
        ]
      }
    }
  },
  computed:{
    sum(){
      let arr = this.option.series[0].data;
      let total = 0;
      arr.forEach((curr)=>{
        total += curr.value;
      })
      return total;
    }

  },
  methods:{
    pieInit(){
      let myChart = this.$echarts.init(this.$refs.main);
      let self = this;
      this.option.legend.formatter=function (params){
        let arr = self.option.series[0].data;
        for (let i = 0; i < arr.length; i++) {
          if(arr[i].name === params){
            return '   ' + params +'  ' + arr[i].value +   '人  ' + ((arr[i].value/self.sum*100).toFixed(0))+'%' ;
          }
        }
      }
      this.option.title.text = this.sum;
      myChart.setOption(this.option);
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.pieInit();
    })
  }
}
</script>

<style scoped>


.left-pane-head {
  position: absolute;
  margin-left: -115px;
}

.left-pane-head > p {
  float: left;
}

.left-title {
  font-size: 20px;
  text-indent: 10px;
}

.stick {
  background: #2cec2c;
  margin-top: 5px;
  height: 25px;
  width: 5px;
}

.alt-option-dot {
  position: relative;
  float: left;
  line-height: 5px;
  margin-left: -100px;
  font-size: 45px;
}

.gradiant-line {
  position: relative;
  clear: both;
  height: 0.12rem;
  width: 220px;
  margin-top: 10px;
  margin-left: 45px;
  background: -o-linear-gradient(to right, #3cee3c, #d2decd 50%);
  background: -moz-linear-gradient(to right, #3cee3c, #d2decd 50%);
  background: linear-gradient(to right, #3cee3c, #d2decd 50%);
}

.sidebar{
  position: absolute;
  right: 0;
  top: 100px;
  color: #f1eeee;
  width: 220px;
}
.el-button{
  padding: 1px 8px;
  border-radius: unset;
}
.el-button:focus{
  background: #2cec2c;
}
.el-button:hover{
  background: #2cec2c;
}
.envDetail{
  position: absolute;
  top:450px;
  width: 220px;
  right: 0;
  color: #FFF;
}
.envDetailDesc{
  clear: left;
  font-size: 12px;
  font-weight: bolder;
}
.envDetailDesc>span{
  display: inline-block;
  padding: 5px 10px;
  margin-top:10px;
  line-height: 1px;
  letter-spacing: 0;
  float: right;
}
.wordcloud{
  position: absolute;
  left: 60%;
  right: 0;
  margin-left:-370px;
}
</style>
