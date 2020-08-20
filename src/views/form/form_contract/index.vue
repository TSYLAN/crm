<template>
  <div class="contract">
    <div class="contract_input">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="value1" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value1"
          :label="item.label1"
          :value="item.value1"
        ></el-option>
      </el-select>
      <el-select v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options2"
          :key="item.value2"
          :label="item.label2"
          :value="item.value2"
        ></el-option>
      </el-select>
      <el-button type="primary" size="small" @click="form_cantract_serach">搜索</el-button>
    </div>
    <div class="contract_value">
      <p>
        签约合同数:
        <span>0</span>个;
      </p>
      <p>
        签约合同金额：
        <span>0.00</span>元;
      </p>
      <p>
        回款金额：
        <span>0.00</span>元;
      </p>
      <p>
        未收款金额：
        <span>0.00</span>元;
      </p>
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
import { getformcontrat } from "@/api/form";
import { getformbiTimes } from "@/api/form";
// import { options } from 'runjs';
export default {
  data() {
    return {
      value: "本年",
      value1: "",
      value2: "",
      options: [],
      options1: [],
      options2: [],
      tableData: [
        // {
        //   date: "2016-05-02",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄",
        // },
        // {
        //   date: "2016-05-04",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1517 弄",
        // },
        // {
        //   date: "2016-05-01",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1519 弄",
        // },
        // {
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1516 弄",
        // },
      ],
      arr: [],
    };
  },
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
    //搜索调用接口
    form_cantract_serach(){
      
    }
  },
  // http://localhost:8090/sys/currency/biTimes
  created() {
    //获取合同时间
    getformbiTimes({})
      .then((res) => {
        for (let item in res.result) {
          this.options.push({
            label: res.result[item],
            value: item,
          });
        }
        console.log(this.options);
      })
      .catch((err) => {
        console.log(err);
      });
      //获取合同汇总
    getformcontrat({
      type: "year",
      deptId: 741320640333611008,
    })
      .then((res) => {
        for (let item in res.result) {
          this.tableData.push({
            date: "2016-05-02",
            name: "王小虎",
            address: res.result[item].type+'我已调用',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
.contract {
  overflow-y: scroll;
  // width: calc(100vw - 250px);
  height: calc(100vh - 100px);
  border: 1px solid #e6e6e6;
  background: #fff;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  .contract_input {
    margin-top: 10px;
    .el-select {
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
//隔行变色class
.el-table .warning-row {
  background: #fafafa;
}
</style>