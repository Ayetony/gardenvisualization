<template>
  <div>
    <div class="header-left">
      <h1>智慧园林管理中心</h1>
      <h3>厦门市园林植物园</h3>
    </div>
    <div class="header-nav">
      <ul>
        <li>信息总揽</li>
        <li>机房监测</li>
        <li>数字交通</li>
        <li>游客分析</li>
        <li>园区经营</li>
        <li>智慧厕所</li>
        <li>立体安防</li>
      </ul>
    </div>
    <div class="header-right">
      <p>12:00:09<span>|</span>厦门<span>|</span><img style="width:30px;height: 30px" src="../../../public/sunshine.png">23°C<i>晴</i></p>
    </div>
    <sideBar/>
    <div class="middleNav">
      <div class="middle">
        <iconAnnular :name="'总览'" :imgOriginalURL="require('../../assets/svg/overview.svg')"/>
      </div>
      <div class="middle">
        <iconAnnular :name="'园区'" :imgOriginalURL="require('../../assets/svg/park-location.svg')"/>
      </div>
      <div class="middle">
        <iconAnnular :name="'路线'" :imgOriginalURL="require('../../assets/svg/path-to.svg')"/>
      </div>
      <div class="middle">
        <iconAnnular :name="'天气'" :imgOriginalURL="require('../../assets/svg/weather.svg')"/>
      </div>
      <div class="middle">
        <iconAnnular :name="'全局'" :imgOriginalURL="require('../../assets/svg/full-sights.svg')"/>
      </div>
    </div>
  </div>
</template>

<script>
import iconAnnular from "@/components/common/iconAnnular";
import sideBar from "@/components/home/sideBar";
export default {
  name: "visualHeader",
  components:{
    sideBar,
    iconAnnular
  },
  data(){
    return {

    }
  }
}
</script>
<style scoped>

.header-left {
  left: 0;
  right: 0;
  width: 20%;
  height: 60px;
  text-align: left;
  color: #f1eeee;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  padding: 20px;
  top: -10px;
}
.header-left{
  line-height: 10px;
}
h3{
  letter-spacing: 5px;
  text-indent: 6px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
.header-nav{
  position: absolute;
  margin-left: 20%;
  width: 60%;
  top: 0;
  /*center and horizontal 多个元素水平居中*/
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-pack: center;
  -moz-box-align: center;
  padding: 10px;
}
li{
  float: left;
  color: #f1eeee;
  list-style-type: none;
  font-size: 15px;
  margin: 20px;
}
li:hover{
  color: #2cec2c;
}
.header-right{
  -webkit-font-smoothing: antialiased;
  position: absolute;
  font-size: 22px;
  top:0;
  left: 80%;
  width: 20%;
  color: #f1eeee;
  padding-top: 20px;
}
p{
  float: right;
  margin-right: 45px;
}
span{
  color: #181717;
  margin: 10px;
}
i{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  font-weight: bolder;
  margin-left: 5px;
  color: white;
}
.middleNav{
  position: absolute;
  margin-left: 20%;
  width: 60%;
  top:75%;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-pack: center;
  -moz-box-align: center;
}
.middle{
  float: left;
  margin: 20px;
}
</style>
