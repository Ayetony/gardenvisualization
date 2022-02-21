<template>
  <div id="app">
    <Header/>
    <BrowsingVehicle/>
  </div>
</template>

<script>
import Header from "@/components/home/header";
import BrowsingVehicle from "@/components/home/browsingVeichle";
export default {
  name: 'App',
  components: {
    Header,
    BrowsingVehicle
  }
}
</script>
<style>
/*css reset*/
div, span, applet, object, iframe, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
body{
  background: linear-gradient(to right, rgba(10, 11, 10, 0.38), rgba(24, 45, 13, 0)), url('../public/1636.jpeg') ,no-repeat;
  background-size: 100%;
  transition: background-image 0.5s linear;
}
</style>
