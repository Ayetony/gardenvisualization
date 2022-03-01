<template>
  <div id="app">
    <visualHeader/>
    <BrowsingVehicle/>
  </div>
</template>

<script>
import visualHeader from "@/components/home/visualHeader";
import BrowsingVehicle from "@/components/home/browsingViechles";
export default {
  name: 'App',
  components: {
    visualHeader,
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
  vertical-align: baseline;
}
body{
  background:linear-gradient(to right, rgba(21, 16, 16, 0.64), rgba(0, 0, 0, 0),rgba(23, 27, 28, 0.77)), url('../public/1636.jpeg') ,no-repeat;
  background-size: 100%;
  transition: background-image 0.5s linear;
}
</style>

