<template>
  <div class="presentations">
    <el-row>
      <el-col :lg="11" :md="22">
        <div class="presentations_first">
          <h3>成交情况</h3>
          <div id="main" style="width: 100%;height:90%;"></div>
        </div>
      </el-col>
      <el-col :lg="11" :md="22">
        <div class="presentations_second">
          <h3>销售预测</h3>
          <div>
            <div class="forecast_order">
              <h3>预测订单数</h3>
              <h3>{{forecast_order_value}}</h3>
            </div>
            <div class="forecast_turnover">
              <h3>预测成交⾦额</h3>
              <h3>{{forecast_turnover_value}}￥</h3>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="22" :md="22">
        <div class="presentations_three">
          <h3>新增客户情况</h3>
          <div id="presentations" style="width: 100%;height:90%"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forecast_order_value: "65",
      forecast_turnover_value: "135000",
    };
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "签订合同⾦额", "实际回款⾦额"],
            ["202001", 3000, 2000],
            ["202002", 5000, 2000],
            ["202003", 3000, 2000],
            ["202004", 3000, 2000],
            ["202005", 3000, 2000],
            ["202006", 3000, 2000],
            ["202007", 3000, 2000],
            ["202008", 3000, 2000],
            ["202009", 3000, 2000],
            ["2020010", 72.4, 53.9],
            ["2020011", 72.4, 53.9],
            ["2020012", 72.4, 53.9],
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "line" }],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    presentationsthree() {
      let presentations = this.$echarts.init(
        document.getElementById("presentations")
      );
      let presentationsthree_echars = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["新增客户", "客户拜访"],
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "数量",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ",
            },
          }
        ],
        series: [
          {
            name: "新增客户",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3,
            ],
          },
          {
            name: "客户拜访",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3,
            ],
          },
        ],
      };
      presentations.setOption(presentationsthree_echars);
    },
  },
  mounted() {
    this.drawChart();
    this.presentationsthree();
  },
};
</script>

<style lang="scss" scoped>
body {
  background: #f5f6f9;
}
.presentations {
  .presentations_first,
  .presentations_second {
    background: #fff;
    margin-top: 20px;
    height: 400px;
    border: 1px solid rgb(230, 230, 230);
    font-size: 14px;
    padding-left: 20px;
  }
  .presentations_first {
    margin-left: 20px;
  }
  .presentations_second {
    margin-left: 20px;
    div {
      margin: 0 auto;
      display: flex;
      margin-top: 30px;
    }
  }
  .presentations_three {
    background: #fff;
    margin-left: 20px;
    height: 400px;
    margin-top: 20px;
    border: 1px solid rgb(230, 230, 230);
    font-size: 14px;
    padding-left: 20px;
  }
}
.forecast_order,
.forecast_turnover {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.forecast_turnover {
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
</style>