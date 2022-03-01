<template>
  <div>
    <div class="left-pane">
      <div class="left-pane-head">
        <p class="stick"></p>
        <p class="left-title">浏览车信息</p>
      </div>
      <br/>
      <div class="alt-option-dot"><a>.</a><a>.</a><a :style="{color: '#04f604'}">.</a>
        <div class="gradiant-line"></div>
      </div>
      <div>
        <p class="data-name">运行数量</p>
        <h1 class="data-font">{{ viechlePeopleNumber }}</h1>
        <el-carousel style="margin-top: -20px" arrow="never" trigger="click" indicator-position="outside" height="145px">
          <el-carousel-item v-for="item in items" :key="item">
            <div class="stats-vehicle">
              <div v-for="viechle in getItemViechles(item)" :key="viechle.id"><p>{{ viechle.name }}</p>
                <img v-for="i in viechle.activeUserPercent" :key="i+'landed'" :src="landedUserIconURL" style="margin: -1px" height="25vh"
                     width="22vh"/>
                <img v-for="j in 10 - viechle.activeUserPercent" :key="j+'no-landed'" :src="noLandedUserIconURL" style="margin: -1px" height="25vh"
                     width="22vh"/>
                <p style="position: relative;float: right;font-size: 18px"><span
                    style="color: #2cec2c;padding-left:30px;line-height: 25px;">0{{ viechle.activeUserPercent }}</span>/10
                </p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="position: relative;width: 100%;left: 20px;">
        <div class="left-pane-head" style="left: -20px">
          <p class="stick"></p>
          <p class="left-title">游客统计</p>
        </div>
        <br/>
        <div class="alt-option-dot"><a>.</a><a>.</a><a :style="{color: '#04f604'}">.</a>
          <div class="gradiant-line"></div>
        </div>
      </div>
      <div style="padding: 10px;float: right;clear:both;position: relative;left: -8vh">
        <el-row>
          <el-button size="mini">本周</el-button>
          <el-button size="mini">本月</el-button>
          <el-button size="mini">本年</el-button>
        </el-row>
      </div>
      <div class="annularMale">
        <annular :gender="'male'"  :ratio=".32"/>
      </div>
      <div>
        <annular :gender="'female'" :ratio=".52"/>
      </div>
      <div class="stat-people">
        <img class="stat" src="../../../public/stat-people.png" />
        <span class="stat-portion">30%</span><div class="people"><span style="float: right;margin-top: -5px;padding: 10px">50岁以上</span></div>
        <span class="stat-portion-one">30%</span><div class="people"><span style="float: right;margin-top: -5px;padding: 10px">35~50岁</span></div>
        <span class="stat-portion-one">30%</span><div class="people"><span style="float: right;margin-top: -5px;padding: 10px">20~35岁</span></div>
        <span class="stat-portion-one">30%</span><div class="people"><span style="float: right;margin-top: -5px;padding: 10px">10~20岁</span></div>
        <span class="stat-portion-one">30%</span><div class="people"><span style="float: right;margin-top: -5px;padding: 10px">10岁以下</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import annular from "@/components/common/annular";
export default {
  name: "browsingViechles",
  components: {
    annular
  },
  data() {
    return {
      landedUserIconURL: require('../../assets/svg/landedUser.svg'),
      noLandedUserIconURL: require('../../assets/svg/noLandedUser.svg'),
      viechles: [
        {
          id: 'one',
          name: '一号浏览车',
          activeUserPercent: 3
        },
        {
          id: 'two',
          name: '二号浏览车',
          activeUserPercent: 5
        },
        {
          id: 'three',
          name: '三号浏览车',
          activeUserPercent: 7
        },
        {
          id: 'four',
          name: '四号浏览车',
          activeUserPercent: 3
        },
        {
          id: 'five',
          name: '五号浏览车',
          activeUserPercent: 5
        },
        {
          id: 'six',
          name: '六号浏览车',
          activeUserPercent: 7
        },
        {
          id: 'seven',
          name: '七号浏览车',
          activeUserPercent: 5
        },
        {
          id: 'eight',
          name: '八号浏览车',
          activeUserPercent: 7
        }
      ],
      itemSize: 3,
      count: 198001,
      countStr: ''
    }
  },
  computed: {
    items() {
      return Math.ceil(this.viechles.length / this.itemSize)
    },
    viechlePeopleNumber(){
      return this.countStr;
    }
  },
  methods: {
    getItemViechles(item) {
      return this.viechles.slice((item - 1) * this.itemSize, item * this.itemSize)
    },
    animatingNum(){
      this.count =  parseInt(this.countStr.replace(',','')) + Math.floor(Math.random()*10000)
      this.timer = setInterval(()=>{
        if(this.count - parseInt(this.countStr.replace(',','')) > 0) {
          this.countStr = Number(parseInt(this.countStr.replace(',','')) + Math.floor(Math.random()*10)*Math.floor(Math.random()*10)).toLocaleString()
          this.count--;
        }else{
          this.count =  parseInt(this.countStr.replace(',','')) + Math.floor(Math.random()*10)
        }
      },1000)
    }
  },
  mounted() {
    this.countStr = this.count.toLocaleString()
    this.animatingNum();
  }

}
</script>

<style scoped>
.left-pane {
  position: absolute;
  top: 100px;
  left: 20px;
  color: #f1eeee;
  width: 20%;
}

.left-pane-head {
  position: relative;
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
  height: 0.12rem;
  width: 220px;
  margin-top: 10px;
  margin-left: 45px;
  background: -o-linear-gradient(to right, #3cee3c, #d2decd 50%);
  background: -moz-linear-gradient(to right, #3cee3c, #d2decd 50%);
  background: linear-gradient(to right, #3cee3c, #d2decd 50%);
}

.data-name {
  position: absolute;
  margin-top: 10px;
  line-height: 50px;
  margin-right: 20px;
  font-size: 20px;
  color: #2cec2c;
  -webkit-font-smoothing: antialiased;
}

.data-font {
  position: relative;
  margin-left: 100px;
  font-size: 50px;
}

.stats-vehicle {
  position: absolute;
}

.stats-vehicle > div > p {
  font-size: 14px;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-button{
  padding: 1px 8px;
  border-radius: unset;
}
.el-button:focus{
  background: #2cec2c;
}
.annularMale{
  display: inline-block;
  clear: right;
  float: left;
}
.stat-people{
  display: block;
}
.people{
  height: 30px;
  clear: left;
  width: 345px;
  margin: 7px;
  background: #bb8094;
  position: relative;
  border-radius: 5%;
  z-index: 999;
}
.stat-people{
  position: relative;
  font-size: 14px;
  margin-left: -20px;
}
.stat{
  position: absolute;
  width: 280px;
  height: 200px;
  z-index: 1000;
  left: 0;
  margin-top: 25px;
}
.stat-portion{
  position: absolute;
  margin-left: -130px;
  margin-top: 40px;
  z-index:10001;
  font-size: 20px;
  color: #fff;
}
.stat-portion-one{
  position: absolute;
  margin-left: 120px;
  z-index:10009;
  margin-top: 3px;
  font-size: 20px;
  color: #fff;
}
</style>
