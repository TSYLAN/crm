<template>
  <div>
    <div class="payback">
      <h3 v-if="screenWidth>=800?true:false">回款管理</h3>
      <el-input placeholder="请输入回款编号" prefix-icon="el-icon-search" v-model="input2"></el-input>
      <el-button type="primary">新建回款</el-button>
    </div>
    
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      :default-sort="{prop: 'name', order: 'payment_date'}"
      ref="multipleTable"
    >
      <el-table-column type="selection" width="55" ></el-table-column>
      <el-table-column sortable prop="collection_num" label="回款编号" width="140" fixed="left"></el-table-column>
      <el-table-column sortable prop="client_name" label="客户名称" width="140"></el-table-column>
      <el-table-column sortable prop="contract_num" label="合同编号" width="140"></el-table-column>
      <el-table-column sortable prop="payment_date" label="回款日期" width="200"></el-table-column>
      <el-table-column sortable prop="payment_amount" label="回款金额" width="140"></el-table-column>
      <el-table-column prop="periods" label="期数"></el-table-column>
      <el-table-column sortable prop="remark" label="备注" width="140"></el-table-column>
      <el-table-column sortable prop="creator" label="创建人" width="140"></el-table-column>
      <el-table-column sortable prop="update_time" label="更新时间" width="200"></el-table-column>
      <el-table-column sortable prop="create_time" label="创建时间" width="200"></el-table-column>
      <el-table-column sortable prop="principal" label="负责人" width="140"></el-table-column>
      <el-table-column sortable prop="payment_method" label="回款方式" width="140"></el-table-column>
      <el-table-column fixed="right" label="状态" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small">待审核</el-button>
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
export default {
  data() {
    return {
      tableData: [
        {
          collection_num: "544133655441",
          client_name: "光华置业",
          contract_num: "10010",
          payment_date: "2019-05-10 00:00:00",
          payment_amount: "3000.00",
          periods: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:37:23",
          create_time: "2019-05-10 18:37:23",
          principal: "admin",
          payment_method: "支付宝",
        },
        {
          collection_num: "544133655441",
          client_name: "华置业",
          contract_num: "10010",
          payment_date: "2019-05-10 00:00:00",
          payment_amount: "3000.00",
          periods: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:37:23",
          create_time: "2019-05-10 18:37:23",
          principal: "admin",
          payment_method: "支付宝",
        },
        {
          collection_num: "544133655441",
          client_name: "光华置业",
          contract_num: "10010",
          payment_date: "2019-05-10 00:00:00",
          payment_amount: "3000.00",
          periods: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:37:23",
          create_time: "2019-05-10 18:37:23",
          principal: "admin",
          payment_method: "支付宝",
        },
        {
          collection_num: "544133655441",
          client_name: "光华置业",
          contract_num: "10010",
          payment_date: "2019-05-10 00:00:00",
          payment_amount: "3000.00",
          periods: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:37:23",
          create_time: "2019-05-10 18:37:23",
          principal: "admin",
          payment_method: "支付宝",
        },
        {
          collection_num: "544133655441",
          client_name: "光华置业",
          contract_num: "10010",
          payment_date: "2019-05-10 00:00:00",
          payment_amount: "3000.00",
          periods: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:37:23",
          create_time: "2019-05-10 18:37:23",
          principal: "admin",
          payment_method: "支付宝",
        },
        {
          collection_num: "544133655441",
          client_name: "光华置业",
          contract_num: "10010",
          payment_date: "2019-05-10 00:00:00",
          payment_amount: "3000.00",
          periods: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:37:23",
          create_time: "2019-05-10 18:37:23",
          principal: "admin",
          payment_method: "支付宝",
        },
         {
          collection_num: "544133655441",
          client_name: "光华置业",
          contract_num: "10010",
          payment_date: "2019-05-10 00:00:00",
          payment_amount: "3000.00",
          periods: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:37:23",
          create_time: "2019-05-10 18:37:23",
          principal: "admin",
          payment_method: "支付宝",
        },
         {
          collection_num: "544133655441",
          client_name: "光华置业",
          contract_num: "10010",
          payment_date: "2019-05-10 00:00:00",
          payment_amount: "3000.00",
          periods: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:37:23",
          create_time: "2019-05-10 18:37:23",
          principal: "admin",
          payment_method: "支付宝",
        },
         {
          collection_num: "544133655441",
          client_name: "光华置业",
          contract_num: "10010",
          payment_date: "2019-05-10 00:00:00",
          payment_amount: "3000.00",
          periods: "--",
          remark: "--",
          creator: "admin",
          update_time: "2019-05-10 18:37:23",
          create_time: "2019-05-10 18:37:23",
          principal: "admin",
          payment_method: "支付宝",
        },
        
      ],
      screenWidth: document.body.clientWidth, // 屏幕尺寸
      input2: "",
      multipleTable:[]
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
    console.log(this.screenWidth);
  },
};
</script>

<style lang="scss" scoped>
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