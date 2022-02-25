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
        <el-carousel arrow="never" trigger="click" indicator-position="outside" height="135px">
          <el-carousel-item v-for="item in items" :key="item">
            <div class="stats-vehicle">
              <div v-for="viechle in getItemViechles(item)" :key="viechle.id"><p>{{ viechle.name }}</p>
                <img v-for="i in viechle.activeUserPercent" :key="i+'landed'" :src="landedUserIconURL" style="margin: -1px" height="25vh"
                     width="25vh"/>
                <img v-for="j in 10 - viechle.activeUserPercent" :key="j+'no-landed'" :src="noLandedUserIconURL" style="margin: -1px" height="25vh"
                     width="25vh"/>
                <p style="position: relative;float: right;font-size: 18px"><span
                    style="color: #2cec2c;padding-left:50px;line-height: 25px;">0{{ viechle.activeUserPercent }}</span>/10
                </p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <br/>
      <div class="left-pane-head">
        <p class="stick"></p>
        <p class="left-title">游客统计</p>
      </div>
      <br/>
      <div class="alt-option-dot"><a>.</a><a>.</a><a :style="{color: '#04f604'}">.</a>
        <div class="gradiant-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "browsingViechles",
  components: {},
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
  margin-top: 25px;
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
</style>
