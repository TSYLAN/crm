<template>
  <div class="approval">
    <div class="approval_top">
      <div class="approval_toggle">
        <span class="line"></span>
        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
          <el-tab-pane label="我发起的" name="first">
            <div>
              <span class="demonstration">审批状态</span>
              <!-- 下拉框 -->
              <el-cascader
                v-model="approval_status_value"
                :options="approval_status"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"
                size="small"
              ></el-cascader>
              <!-- 时间表 -->
              <span class="demonstration">发起时间</span>
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                size="small"
              ></el-date-picker>
            </div>
            <el-table :data="gridData">
              <el-table-column property="date" label="日期" width="150"></el-table-column>
              <el-table-column property="name" label="姓名" width="200"></el-table-column>
              <el-table-column property="address" label="原因" width="200"></el-table-column>
              <el-table-column property="approval_type" label="审批类型"></el-table-column>
              <el-table-column fixed="right" label="状态" width="100" v-if="!gridData.length">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="success" size="small">已通过</el-button>
                  <!-- <el-button
          size="mini"
          type="danger"
                  @click="handleDelete(scope.$index, scope.row)">Delete</el-button>-->
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>

          <el-tab-pane label="我审批的" name="second">
            <div>
              <span class="demonstration">审批状态</span>
              <!-- 下拉框 -->
              <el-cascader
                v-model="myapproval_status_value"
                :options="myapproval_status"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"
                size="small"
              ></el-cascader>
              <!-- 时间表 -->
              <span class="demonstration">发起时间</span>
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                size="small"
              ></el-date-picker>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="block">
          <span class="demonstration">审批类型</span>
          <el-cascader
            v-model="value"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
            size="small"
          ></el-cascader>
          <el-button type="primary" size="small" @click="dialogTableVisible = true ">新建审批</el-button>
          <!-- 弹框 -->
          <el-dialog title="审批类型" :visible.sync="dialogTableVisible" class="approval_messagebox">
            <span>请选择您的审批类型（管理后台可自定义配置审批类型）</span>
            <ul>
              <li v-for="(item,index) in options" :key="index">
                <el-button type="primary" size="small">{{item.label}}</el-button>
              </li>
            </ul>
          </el-dialog>
          <!-- 弹框 -->
        </div>
      </div>
    </div>
    <div class="approval_bottom"></div>
    <div class="approval_bottom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridData: [
        // {
        // //   date: "2016-05-02",
        // //   name: "王小虎",
        // //   address: "请个假",
        // //   approval_type: "普通审批",
        // },
      ],
      dialogTableVisible: false,
      activeIndex: "1",
      activeIndex2: "1",
      value: ["all"], //下拉框
      approval_status_value: ["all"], //审批状态下拉框
      myapproval_status_value: ["pending_my_approval"],
      value1: "", //时间
      options: [
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
      approval_status: [
        {
          value: "all",
          label: "全部",
        },
        {
          value: "pending_trial",
          label: "待审",
        },
        {
          value: "examined",
          label: "审批中",
        },
        {
          value: "pass",
          label: "通过",
        },
        {
          value: "fail",
          label: "失败",
        },
        {
          value: "revocation",
          label: "撤回",
        },
      ],
      myapproval_status: [
        {
          myapproval_status_value: "pending_my_approval",
          label: "待我审批的",
        },
        {
          myapproval_status_value: "approved_it",
          label: "我已审批的",
        },
      ],
      activeName: "first",
    };
  },
  methods: {
    //获取下拉框值
    handleChange(value) {
      console.log(value);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    open() {
      this.$alert("请选择您的审批类型", "审批类型", {
        confirmButtonText: "",
        callback: (action) => {
          this.$message({
            // type: "info",
            message: `action: ${action}`,
            showClose: "true",
          });
        },
      });
    },
    handleClick(row){
        console.log(row)
    }
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  list-style: none;
}
.approval {
  max-width: 1200px;
  height: 800px;
  margin: 10px 0 0 10px;
  //   background: rgb(158, 79, 79);
  //   border: 1px solid rgba(255, 255, 255, 0.01);
  background: #fff;
  // box-shadow: 0px 8px 8px #6666;
}
.approval_toggle {
  width: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  position: relative;
  .el-tabs {
    width: 100%;
    margin-top: 10px;
    .el-tab-pane {
      height: 750px;
      font-size: 14px;
      span {
        margin: 0 10px;
      }
    }
  }
}
.line {
  width: 100%;
  height: 0;
  //   border: 1px solid rgba(177, 149, 149, 0.4);
  position: absolute;
  top: 80px;
}

.block {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 14px;
  .demonstration {
    margin-right: 10px;
  }
  .el-button {
    margin-left: 30px;
  }
}
.approval_messagebox {
  margin: 0 auto;
  width: 1100px;
  padding-bottom:50px
  span {
    margin-bottom: 10px;
  }
  ul {
    width: 500px;
  }
  .el-button {
    margin: 10px;
  }
}
h5{
    text-align: center;
}
</style>