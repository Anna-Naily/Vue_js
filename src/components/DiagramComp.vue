<template>
  <div>
    <figure class="highcharts-figure">
      <div id="container"></div>
    </figure>
    <highcharts :options="highchart"></highcharts>
    <p v-show="0">{{updateDiagram}} элементов в таблице</p>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import { mapGetters } from "vuex";
export default {
  name: "Diagram",
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      highchart: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
        },
        title: {
          text: "Payments",
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false,
            },
            showInLegend: true,
          },
        },
        series: [
          {
            name: "Payments",
            colorByPoint: true,
            data: [],
          },
        ],
      },
    };
  },
  methods: {
    //метод регистрации диаграммы
    registrationDiagram() {
      let script1 = document.createElement("script");
      script1.setAttribute("src", "https://code.highcharts.com/highcharts.js");
      document.head.appendChild(script1);
      let script2 = document.createElement("script");
      script2.setAttribute(
        "src",
        "https://code.highcharts.com/modules/exporting.js"
      );
      document.head.appendChild(script2);
      let script3 = document.createElement("script");
      script3.setAttribute(
        "src",
        "https://code.highcharts.com/modules/export-data.js"
      );
      document.head.appendChild(script3);
      let script4 = document.createElement("script");
      script4.setAttribute(
        "src",
        "https://code.highcharts.com/modules/accessibility.js"
      );
      document.head.appendChild(script4);
    },
    ...mapGetters("users", ["getUsers"]),
    //метод получения суммы value элементов массива
    getSum(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i].value;
      }
      return sum;
    },
    //метод получения итогового массива с name / y(в процентах)
    getPercent(arr, sum) {
      let diagramElements = [];
      for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj.name = arr[i].category;
        obj.y = (arr[i].value / sum) * 100;
        diagramElements.push(obj);
      }
      return diagramElements;
    },
    //главный метод по получению данных для диаграммы
    createArray(arr) {
      let categories = [];
      for (let i = 0; i < arr.length; i++) {
        let repeat = false;
        if (categories.length > 0) {
          for (let j = 0; j < categories.length; j++) {
            if (categories[j].category === arr[i].category) {
              if (arr[i].value !== "") {
                categories[j].value += Number(arr[i].value);
                repeat = true;
              } else {
                categories[j].value += 0;
                repeat = true;
              }
            }
          }
        }
        if (categories.length == 0 || repeat == false) {
          let obj = {};
          obj.category = arr[i].category;
          if (arr[i].value !== "") obj.value = Number(arr[i].value);
          else obj.value = 0;
          categories.push(obj);
        }
      }
      //обновление массива в диаграмме
      this.highchart.series[0].data = this.getPercent(
        categories,
        this.getSum(categories)
      );
    },
  },
  computed: {
    updateDiagram() {
      this.createArray(this.getUsers());
      return this.getUsers().length;
    },
  },
  mounted() {
    //this.createArray(this.getUsers());
    this.registrationDiagram();
  },
};
</script>

<style scoped>
.highcharts-figure,
.highcharts-data-table table {
  min-width: 320px;
  max-width: 660px;
  margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}

.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}

.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>
