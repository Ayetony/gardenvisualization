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
  <div ref="main" style="height: 200px;width: 30%;position: absolute;left: 70%;top:180px;color: #FFF">
  </div>
  <div class="envDetail">
    <div class="left-pane-head">
      <p class="stick"></p>
      <p class="left-title">环境信息</p>
    </div>
    <br/>
    <div class="alt-option-dot"><a>.</a><a>.</a><a :style="{color: '#04f604'}">.</a>
      <div class="gradiant-line"></div>
    </div>
    <div class="envDetailDesc">
      <span>不合格</span><span style="background: #d90606;margin-left: 20px"></span>
      <span>合格</span><span style="background: #2cec2c"></span>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "sideBar",
  data(){
    return {

    }
  },
  methods:{
    pieInit(){
      let myChart = this.$echarts.init(this.$refs.main);
      let option;
      option = {
        title:{
          text: '98000',
          x: 'center',
          y: '40%',
          textStyle:{
            color: '#FFF',
            fontSize: 22
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          top: '15%',
          left: '70%',
          textStyle: {
            color: '#FFF',
          },
          formatter:function (params){
            let arr = option.series[0].data;
            let sum = 0;
            arr.forEach((curr)=>{
              sum += curr.value;
            })
            for (let i = 0; i < arr.length; i++) {
              if(arr[i].name === params){
                return '   ' + params +'  ' + arr[i].value +   '人  ' + ((arr[i].value/sum*100).toFixed(0))+'%' ;
              }
            }
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
              normal:{
                shadowBlur: 10,
                shadowColor: 'rgba(252,247,247,0.97)',
              }
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bolder',
              }
            },
            labelLine: {
              show: true
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
      };
      myChart.setOption(option);
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
  top:400px;
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
</style>
