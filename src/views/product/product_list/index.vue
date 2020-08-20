<template>
  <div class="product_list">
    <div class="payback">
      <h3 v-if="screenWidth>=800?true:false">产品列表</h3>
      <div>
        <el-input placeholder="请输入产品名称" prefix-icon="el-icon-search" v-model="input2"></el-input>
      </div>
      <el-button type="primary">新建产品</el-button>
    </div>

    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      :default-sort="{prop: 'name', order: 'payment_date'}"
      ref="multipleTable"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column sortable prop="contract_num" label="合同编号" width="140" fixed="left"></el-table-column>
      <el-table-column sortable prop="contract_name" label="合同名称" width="140"></el-table-column>
      <el-table-column sortable prop="client_name" label="客户名称" width="140"></el-table-column>
      <el-table-column sortable prop="business_name" label="商机名称" width="140"></el-table-column>
      <el-table-column sortable prop="order_time" label="下单时间" width="200"></el-table-column>
      <el-table-column prop="contract_amount" label="合同金额" width="140"></el-table-column>
      <el-table-column sortable prop="contract_start_time" label="合同开始时间" width="200"></el-table-column>
      <el-table-column sortable prop="contract_end_time" label="合同结束时间" width="200"></el-table-column>
      <el-table-column sortable prop="customer_signatory" label="客户签约人" width="140"></el-table-column>
      <el-table-column sortable prop="company_signatory" label="公司签约人" width="140"></el-table-column>
      <el-table-column sortable prop="remark" label="备注" width="140"></el-table-column>
      <el-table-column sortable prop="creator" label="创建人" width="140"></el-table-column>
      <el-table-column sortable prop="update_time" label="更新时间" width="200"></el-table-column>
      <el-table-column sortable prop="create_time" label="创建时间" width="200"></el-table-column>
      <el-table-column sortable prop="principal" label="负责人" width="140"></el-table-column>
      <el-table-column fixed="right" label="状态" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
          <el-button @click="handleClick(scope.row)" type="primary" size="small">删除</el-button>
          <!-- <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <!-- <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button> -->
      <!-- <el-button @click="toggleSelection()">取消选择</el-button> -->
    </div>
    <!-- <h3 v-if="tableData.length">暂无数据</h3> -->
  </div>
</template>

<script>
import { getproductList } from "@/api/product";
import { getproductadd } from "@/api/product";

// import { getformbiTimes } from "@/api/form";
// import { getformsearch } from "@/api/form";
export default {
  data() {
    return {
      tableData: [
        {
          contract_num: "856152211",
          contract_name: "线路升级",
          client_name: "郑州金源公司",
          business_name: "--",
          order_time: "2019-05-02 00:00:00",
          contract_amount: "200000.00",
          contract_start_time: "2019-05-30 00:00:00",
          contract_end_time: "2019-08-08 00:00:00",
          customer_signatory: "埃利亚",
          company_signatory: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:43:41",
          create_time: "2019-05-10 18:43:41",
          principal: "悟空",
        },
        {
          contract_num: "856152211",
          contract_name: "线路升级",
          client_name: "郑州金源公司",
          business_name: "--",
          order_time: "2019-05-02 00:00:00",
          contract_amount: "200000.00",
          contract_start_time: "2019-05-30 00:00:00",
          contract_end_time: "2019-08-08 00:00:00",
          customer_signatory: "埃利亚",
          company_signatory: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:43:41",
          create_time: "2019-05-10 18:43:41",
          principal: "悟空",
        },
        {
          contract_num: "856152211",
          contract_name: "线路升级",
          client_name: "郑州金源公司",
          business_name: "--",
          order_time: "2019-05-02 00:00:00",
          contract_amount: "200000.00",
          contract_start_time: "2019-05-30 00:00:00",
          contract_end_time: "2019-08-08 00:00:00",
          customer_signatory: "埃利亚",
          company_signatory: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:43:41",
          create_time: "2019-05-10 18:43:41",
          principal: "悟空",
        },
        {
          contract_num: "856152211",
          contract_name: "线路升级",
          client_name: "郑州金源公司",
          business_name: "--",
          order_time: "2019-05-02 00:00:00",
          contract_amount: "200000.00",
          contract_start_time: "2019-05-30 00:00:00",
          contract_end_time: "2019-08-08 00:00:00",
          customer_signatory: "埃利亚",
          company_signatory: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:43:41",
          create_time: "2019-05-10 18:43:41",
          principal: "悟空",
        },
        {
          contract_num: "856152211",
          contract_name: "线路升级",
          client_name: "郑州金源公司",
          business_name: "--",
          order_time: "2019-05-02 00:00:00",
          contract_amount: "200000.00",
          contract_start_time: "2019-05-30 00:00:00",
          contract_end_time: "2019-08-08 00:00:00",
          customer_signatory: "埃利亚",
          company_signatory: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:43:41",
          create_time: "2019-05-10 18:43:41",
          principal: "悟空",
        },
        {
          contract_num: "856152211",
          contract_name: "线路升级",
          client_name: "郑州金源公司",
          business_name: "--",
          order_time: "2019-05-02 00:00:00",
          contract_amount: "200000.00",
          contract_start_time: "2019-05-30 00:00:00",
          contract_end_time: "2019-08-08 00:00:00",
          customer_signatory: "埃利亚",
          company_signatory: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:43:41",
          create_time: "2019-05-10 18:43:41",
          principal: "悟空",
        },
        {
          contract_num: "856152211",
          contract_name: "线路升级",
          client_name: "郑州金源公司",
          business_name: "--",
          order_time: "2019-05-02 00:00:00",
          contract_amount: "200000.00",
          contract_start_time: "2019-05-30 00:00:00",
          contract_end_time: "2019-08-08 00:00:00",
          customer_signatory: "埃利亚",
          company_signatory: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:43:41",
          create_time: "2019-05-10 18:43:41",
          principal: "悟空",
        },
        {
          contract_num: "856152211",
          contract_name: "线路升级",
          client_name: "郑州金源公司",
          business_name: "--",
          order_time: "2019-05-02 00:00:00",
          contract_amount: "200000.00",
          contract_start_time: "2019-05-30 00:00:00",
          contract_end_time: "2019-08-08 00:00:00",
          customer_signatory: "埃利亚",
          company_signatory: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:43:41",
          create_time: "2019-05-10 18:43:41",
          principal: "悟空",
        },
        {
          contract_num: "856152211",
          contract_name: "线路升级",
          client_name: "郑州金源公司",
          business_name: "--",
          order_time: "2019-05-02 00:00:00",
          contract_amount: "200000.00",
          contract_start_time: "2019-05-30 00:00:00",
          contract_end_time: "2019-08-08 00:00:00",
          customer_signatory: "埃利亚",
          company_signatory: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:43:41",
          create_time: "2019-05-10 18:43:41",
          principal: "悟空",
        },
        {
          contract_num: "856152211",
          contract_name: "线路升级",
          client_name: "郑州金源公司",
          business_name: "--",
          order_time: "2019-05-02 00:00:00",
          contract_amount: "200000.00",
          contract_start_time: "2019-05-30 00:00:00",
          contract_end_time: "2019-08-08 00:00:00",
          customer_signatory: "埃利亚",
          company_signatory: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:43:41",
          create_time: "2019-05-10 18:43:41",
          principal: "悟空",
        },
      ],
      screenWidth: document.body.clientWidth, // 屏幕尺寸
      input2: "",
      multipleTable: [],
    };
  },
  methods: {
    getWidth() {
      const that = this;
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth;
          that.screenWidth = window.screenWidth;
        })();
      };
    },
    // 审核方法
    handleClick(index, row) {},
    // 删除方法
    // handleDelete(index,row){
    //     // console.log(index,row)
    //     // index,row可获取当前这一行信息
    // }
    // toggleSelection(rows) {
    //     if (rows) {
    //       rows.forEach(row => {
    //         this.$refs.multipleTable.toggleRowSelection(row);
    //       });
    //     } else {
    //       this.$refs.multipleTable.clearSelection();
    //     }
    //   },
    //   select(row,index)
    //   {
    //       console.log(row,index)
    //   }
  },
  created() {
    this.getWidth();
    //添加产品数据
    getproductadd({
      createTime: "2020-08-19T07:43:35.309Z",
      id: 0,
      pageNum: 0,
      pageSize: 0,
      productDescribe: "string",
      productName: "string",
      productStatus: 0,
      productTypeId: 0,
      productTypeName: "string",
      remark: "string",
      updateTime: "2020-08-19T07:43:35.309Z",
    }) .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    //分页查询产品列表
    getproductList({
      createTime: "2020-08-19T07:43:46.152Z",
      id: 0,
      pageNum: 0,
      pageSize: 0,
      productDescribe: "string",
      productName: "string",
      productStatus: 0,
      productTypeId: 0,
      productTypeName: "string",
      remark: "string",
      updateTime: "2020-08-19T07:43:46.152Z",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.product_list {
  margin: 0 20px 0 20px;
}
.payback {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  h3 {
    font-weight: 400;
  }
}
.el-input {
  max-width: 300px;
}
.el-table {
  margin: 0 auto;
}
</style>