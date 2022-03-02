<template>
  <div>
    <div class="bubble">
      <svg id="bubble-chart" width="450" height="400"/>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import render from "d3-render";
export default {
  name: "bubbleChartD3",
  components: {},
  data() {
    return {
      regionData: [
        {
          "name": "东门",
          id: "1",
          "value": "100050.0",
          "fill": "#31c531",
          "colour": "#fff"
        },
        {
          "name": "西北",
          "id": "2",
          "value": "52650.0",
          "fill": "#D8352A",
          "colour": "#fff"

        },
        {
          "name": "秋霞",
          "id": "3",
          "value": "32650.0",
          "fill": "#D8352A",
          "colour": "#fff"

        },
        {
          "name": "大通",
          "id": "4",
          "value": "100242.0",
          "fill": "#48509E",
          "colour": "#fff"

        },
        {
          "name": "风物",
          "id": "5",
          "value": "59242.0",
          "fill": "#48509E",
          "colour": "#fff"

        },
        {
          "name": "西门",
          "id": "6",
          "value": "82465.0",
          "fill": "#48509E",
          "colour": "#fff"

        },
        {
          "name": "中路",
          "id": "7",
          "value": "79696.0",
          "fill": "#48509E",
          "colour": "#fff"
        },
        {
          "name": "东南",
          "id": "8",
          "value": "59105.0",
          "fill": "#48509E",
          "colour": "#fff"
        },
        {
          "name": "华北",
          "id": "9",
          "value": "19696.0",
          "fill": "#48509E",
          "colour": "#fff"
        },
      ]
    }
  },
  methods: {
    getdata() {
      this.drawType();
    },
    drawType() {
      // //设置svg大小
      const width =  500;
      const height = 400;
      //定义圆圈组件
      const circleComponent = ({ r, cx, cy, fill, duration }) => {
        return {
          append: "circle",
          r,
          cx,
          cy,
          fill,
          duration,
        };
      };
      //定义文字组件
      const textComponent = ({
                               key,
                               text,
                               x = 0,
                               y = 0,
                               fontWeight = "bold",
                               fontSize = "14px",
                               textAnchor = "middle",
                               fillOpacity = 1,
                               colour,
                               // eslint-disable-next-line no-unused-vars
                               r,
                               duration = 2000,
                             }) => {
        return {
          append: "text",
          key,
          text,
          x,
          y,
          textAnchor,
          fontFamily: "sans-serif",
          fontWeight,
          fontSize,
          fillOpacity: { enter: fillOpacity, exit: 0 },
          fill: colour,
          duration,
          style: {
            pointerEvents: "none",
          },
        };
      };
      //对数值进行转换,比如42288变为42k
      const format = (value) => {
        const newValue = d3.format("0.3s")(value);
        if (newValue.indexOf("m") > -1) {
          return parseInt(newValue.replace("m", "")) / 1000;
        }
        return newValue;
      };
      //长度和数值与圆圈大小相比较，实现信息动态变化
      const labelComponent = ({ isoCode, countryName, value, r, colour }) => {
        //Don't show any text for radius under 10px
        if (r < 10) {
          return [];
        }
        const circleWidth = r;
        const nameWidth = countryName.length * 10;
        const shouldShowIso = nameWidth > circleWidth;
        // const newCountryName = shouldShowIso ? countryName : countryName;
        const shouldShowValue = r > 18;
        let nameFontSize;
        if (shouldShowValue) {
          nameFontSize = shouldShowIso ? "10px" : "12px";
        } else {
          nameFontSize = "10px";
        }
        return [
          textComponent({
            key: isoCode,
            text: countryName,
            fontSize: nameFontSize,
            y: shouldShowValue ? "-0.2em" : "0.3em",
            fillOpacity: 1,
            colour,
          }),
          ...(shouldShowValue
              ? [
                textComponent({
                  key: isoCode,
                  text: format(value),
                  fontSize: "10px",
                  y: shouldShowIso ? "0.9em" : "1.0em",
                  fillOpacity: 0.7,
                  colour,
                }),
              ]
              : []),
        ];
      };
      //设置气泡组件
      const bubbleComponent = ({
                                 name,
                                 id,
                                 value,
                                 r,
                                 x,
                                 y,
                                 fill,
                                 colour,
                                 duration = 3000,
                               }) => {
        return {
          append: "g",
          key: id,
          transform: {
            enter: `translate(${x + 1},${y + 1})`,
            exit: `translate(${width / 2},${height / 2})`,
          },
          duration,
          delay: Math.random() * 300,
          children: [
            circleComponent({ key: id, r, fill, duration }),
            ...labelComponent({
              key: id,
              countryName: name,
              isoCode: id,
              value,
              r,
              colour,
              duration,
            }),
          ]
        };
      };
      const pack = (data) =>
          d3
              .pack()
              .size([width - 2, height - 2])
              .padding(20)(d3.hierarchy({ children: data }).sum((d) => d.value));

      //生成气泡图表
      const renderBubbleChart = (selection, data) => {
        const root = pack(data);
        const renderData = root.leaves().map((d) => {
          return bubbleComponent({
            id: d.data.id,
            name: d.data.name,
            value: d.data.value,
            r: d.r,
            x: d.x,
            y: d.y,
            fill: d.data.fill,
            colour: d.data.colour,
          });
        });
        return render(selection, renderData);
      };
      const renderBubbleChartContainer = (data) => {
        return renderBubbleChart("#bubble-chart", data);
      };
      renderBubbleChartContainer(this.regionData);
    },
  },
  mounted() {
    this.getdata();
    // 循环
    // setInterval(()=>{
    //     const seed = this.regionData.length;
    //     this.regionData[Math.floor(Math.random()*seed)].value -= Math.ceil(Math.random()*3000);
    //     this.getdata();
    // },3000)
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
