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
        <p class="data-name">运行数量</p><h1 class="data-font">198,789</h1>
        <div class="stats-vehicle">
          <div><p>一号浏览车</p></div>
          <div><p>二号浏览车</p></div>
          <div><p>三号浏览车</p></div>
        </div>
      </div>
      <vue-ellipse-progress color="#7579ff"
                          :size="180"
                          :thickness="5"
                          :empty-thickness="3"
                          :progress="progress" />
    </div>
  </div>
</template>

<script>
import VueEllipseProgress from "vue-ellipse-progress";
export default {
  name: "browsingVehicle",
  components:{
    VueEllipseProgress
  },
  data(){
    return{
      progress: 90
    }
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

.left-pane-head>p {
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
.data-name{
  position: absolute;
  margin-top: 10px;
  line-height: 50px;
  margin-right: 20px;
  font-size: 20px;
  color: #2cec2c;
  -webkit-font-smoothing: antialiased;
}

.data-font{
  position: relative;
  margin-top: 25px;
  margin-left: 100px;
  font-size: 50px;
}
.stats-vehicle{
  position: absolute;
}
</style>
