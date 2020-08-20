<template>
  <div class="contract">
    <div class="contract_input">
      <el-cascader
        v-model="contract_value"
        :options="contract"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"
        size="small"
      ></el-cascader>
      <el-cascader
        v-model="contract_value"
        :options="contract"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"
        size="small"
      ></el-cascader>
      <el-cascader
        v-model="contract_value"
        :options="contract"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"
        size="small"
        clearable
      ></el-cascader>
      <el-button type="primary" size="small">搜索</el-button>
    </div>
    <div class="contract_value">
      <p>回款金额排行（按实际回款金额）</p>
    </div>
    <div class="contract_echarts">
      <!-- <div id="main" style="width: 100%;height:400px;"></div> -->
      <line-chart :chart-data="lineChartData" style="width:100%; " />
    </div>
    
    <div class="contract_data">
      <el-table :data="tableData" border style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="签约合同数（个）" width="180"></el-table-column>
        <el-table-column prop="address" label="签约合同金额（元）"></el-table-column>
        <el-table-column prop="address" label="回款金额（元）"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/Charts/LineChart'
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  }
}
export default {
  data() {
    return {
      contract_value: ["all"], //时间
      contract: [
        {
          value: "all",
          label: "全部",
        },
        {
          value: "common",
          label: "普通审批",
        },
        {
          value: "vacate",
          label: "请假审批",
        },
        {
          value: "evection",
          label: "出差审批",
        },
        {
          value: "overtime",
          label: "加班审批",
        },
        {
          value: "travel",
          label: "差旅报销",
        },
        {
          value: "vacate",
          label: "借款申请",
        },
      ],
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
      arr: [],
      lineChartData:lineChartData.newVisitis
    };
  },
  components:{LineChart},
  methods: {
    handleChange(value) {
      console.log(value);
    },
    //隔行变色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "warning-row";
      }
    },
    // getperformance() {
    //   var myChart = this.$echarts.init(document.getElementById("main"));

    //   // 指定图表的配置项和数据
    //   var option = {
    //     tooltip: {
    //       trigger: "axis",
    //       axisPointer: {
    //         type: "shadow",
    //       },
    //     },
    //     legend: {
    //       data: ["2011年", "2012年"],
    //     },
    //     grid: {
    //       left: "0%",
    //       right: "4%",
    //       bottom: "3%",
    //       containLabel: true,
    //     },
    //     xAxis: {
    //       type: "value",
    //       boundaryGap: [0, 0.01],
    //     },
    //     yAxis: {
    //       type: "category",
    //       data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
    //     },
    //     series: [
    //       {
    //         name: "2011年",
    //         type: "bar",
    //         data: [18203, 23489, 29034, 104970, 131744, 630230],
    //       },
    //       {
    //         name: "2012年",
    //         type: "bar",
    //         data: [19325, 23438, 31000, 121594, 134141, 681807],
    //       },
    //     ],
    //   };

    //   // 使用刚指定的配置项和数据显示图表。
    //   myChart.setOption(option);
    // },
  },
  mounted() {
    // this.getperformance();
  },
};
</script>

<style lang="scss" scoped>
.contract {
  // width: calc(100vw - 250px);
  height: calc(100vh - 100px);
  border: 1px solid #e6e6e6;
  background: #fff;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  // overflow: scroll;
  .contract_input {
    margin-top: 10px;
    .el-cascader {
      margin: 0 10px;
    }
  }
  .contract_value {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    p {
      margin-right: 10px;
    }
  }
  .contract_data {
    margin: 0 20px;
  }
}
.el-table{
  overflow-x: auto;
}
//隔行变色class
.el-table .warning-row {
  background: #fafafa;
}
.contract_echarts {
  margin: 0 20px 0 20px;
}
</style>