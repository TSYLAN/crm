<template>
  <div class="presentations">
    <el-select v-model="value" placeholder="请选择" style="margin:10px 20px 0 20px">
      <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
        <span style="float: left">{{ item.label }}</span>
      </el-option>
    </el-select>
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></el-date-picker>
    <el-row>
      <el-col :lg="11" :md="22" :sm="22">
        <div class="presentations_first">
          <h3>成交情况</h3>
          <div id="main" style="width: 100%;height:90%;"></div>
        </div>
      </el-col>
      <el-col :lg="11" :md="22" :sm="22">
        <div class="presentations_second">
          <h3>销售预测</h3>
          <div>
            <!-- <div class="forecast_order">
            <h3>预测订单数</h3>
            <h3>{{forecast_order_value}}</h3>
            <countTo :startVal='startVal' :endVal='forecast_order_value' :duration='3000'></countTo>
            </div>
            <div class="forecast_turnover">
            <h3>预测成交⾦额</h3>
            <h3>{{forecast_turnover_value}}￥</h3>
            <countTo :startVal='startVal' :endVal='forecast_turnover_value' :duration='3000'></countTo>
            </div>-->

            <line-chart :chart-data="lineChartData" style="width:90%; position:absolute; left:0px" />
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="11" :md="22">
        <div class="presentations_three">
          <h3>工作提醒</h3>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="合同到期" width="180"></el-table-column>
            <el-table-column prop="client_add" label="新增客户跟进"></el-table-column>
            <el-table-column prop="client_drop" label="客户拜访"></el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :lg="11" :md="22">
        <div class="presentations_four">
          <h3>新增客户情况</h3>
          <div class="presentations_client">
            <div class="forecast_order">
              <h3>预测订单数</h3>
              <h3>{{forecast_order_value}}</h3>
              <countTo :startVal="startVal" :endVal="forecast_order_value" :duration="3000"></countTo>
            </div>
            <div class="forecast_turnover">
              <h3>预测成交⾦额</h3>
              <h3>{{forecast_turnover_value}}￥</h3>
              <countTo :startVal="startVal" :endVal="forecast_turnover_value" :duration="3000"></countTo>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import countTo from "vue-count-to";
import LineChart from "@/components/Charts/LineChart";
import resize from "@/components/Charts/mixins/resize";
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
};
export default {
  mixins: [resize],
  data() {
    return {
      cities: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Nanjing",
          label: "南京",
        },
        {
          value: "Chengdu",
          label: "成都",
        },
        {
          value: "Shenzhen",
          label: "深圳",
        },
        {
          value: "Guangzhou",
          label: "广州",
        },
      ],
      value: "",
      startVal: 0,
      endVal: 2017,
      forecast_order_value: 65,
      forecast_turnover_value: 135000,
      lineChartData: lineChartData.newVisitis,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  components: { countTo, LineChart },
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
        series: [{ type: "bar" }, { type: "line", color: "#3888fa" }],
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
              color: "#3888fa",
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
              color: "#3888fa",
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
          },
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
            color: "#3888fa",
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
    this.$nextTick(() => {
      this.drawChart();
      this.presentationsthree();
    });
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
      position: relative;
      // margin-top: 30px;
    }
  }
  .presentations_three {
    background: #fff;
    margin-left: 20px;
    height: 400px;
    margin-top: 20px;
    border: 1px solid rgb(230, 230, 230);
    font-size: 14px;
    padding: 0 20px;
  }
  .presentations_four {
    background: #fff;
    margin-left: 20px;
    height: 400px;
    margin-top: 20px;
    border: 1px solid rgb(230, 230, 230);
    font-size: 14px;
    padding-left: 20px;
    .presentations_client {
      display: flex;
      justify-content: space-around;
    }
  }
}
// 渐变
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
  animation: bounce-in 1s;
}
.forecast_turnover {
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>