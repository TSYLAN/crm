<template>
  <div>
    <p>员工与部门管理</p>
    <div class="management">
      <div class="management_left">
        <div class="role-nav-box">
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
      </div>
      <div class="management_right">
        <div class="management_serach" v-if="!multipleSelection.length">
          <el-row :gutter="10">
            <el-col :lg="8" :sm="20">
              <el-input placeholder="请输入员工名称" suffix-icon="el-icon-search" v-model="input1"></el-input>
            </el-col>
            <el-col :lg="12" :sm="20">
              <span>状态</span>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :lg="1" :sm="20">
              <el-button type="primary" @click="dialogTableVisible = true ">新建员工</el-button>
              <!-- 弹窗 -->
              <el-dialog
                title="新建员工"
                :visible.sync="dialogTableVisible"
                class="approval_messagebox"
              >
                <span>基本信息</span>
                <el-row>
                    <el-col >
                        <span class="announcement_title">手机号(登录名)</span>
                        <el-input v-model="input" ></el-input>
                    </el-col><el-col >
                        <span class="announcement_title"></span>
                        <el-input v-model="input" ></el-input>
                    </el-col><el-col >
                        <span class="announcement_title"></span>
                        <el-input v-model="input" ></el-input>
                    </el-col>
                </el-row>
               
              </el-dialog>
              <!-- 弹窗 -->
            </el-col>
          </el-row>
        </div>
        <div class="management_action" v-if="multipleSelection.length">
          <div>
            已选中
            <span>{{multipleSelection.length}}</span>项
          </div>
          <el-button icon="el-icon-circle-close">禁用</el-button>
          <el-button icon="el-icon-circle-plus-outline">激活</el-button>
          <el-button icon="el-icon-edit">编辑</el-button>
          <el-button icon="el-icon-video-pause">重置密码</el-button>
          <el-button icon="el-icon-refresh">重置账号</el-button>
        </div>
        <!-- 表格 -->
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      input1: "",
      defaultProps: {
        children: "children",
        label: "label",
      },
      moduleName: "module1",
      activeName: "first",
      strucSaveAuth: true,
      checkList: true,
      show_icon: false,
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
              children: [
                {
                  id: 11,
                  label: "三级 3-2-1",
                },
                {
                  id: 12,
                  label: "三级 3-2-2",
                },
                {
                  id: 13,
                  label: "三级 3-2-3",
                },
              ],
            },
          ],
        },
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
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
      multipleSelection: [],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //树形选择
    handleNodeClick() {},
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 30px 0 0 20px;
  font-size: min(18px, 20px);
}

.management {
  display: flex;
  //   margin: 20px;
  padding: 20px;
  width: 100%;
  height: calc(100vh - 100px);
  .management_left {
    width: 200px;
    height: 100%;
    background: #fff;
    border: 1px solid #e6e6e6;
  }
  .management_right {
    width: 800px;
    height: 100%;
    border: 1px solid #e6e6e6;
    background: #fff;
    margin-left: 20px;
    padding: 15px;
    position: relative;
    .management_action {
      height: 50px;
      display: flex;
      align-items: center;
      div {
        font-size: 14px;
        span {
          color: rgb(15, 136, 235);
        }
      }
      .el-button {
        border: none;
        outline: none;
        background: #fff;
        font-size: 14px;
      }
    }
    .management_serach {
      height: 50px;
      span {
        margin: 0 10px;
      }
      .el-button {
        text-align: right;
        position: absolute;
        right: 0;
      }
    }
    .el-table {
      margin-top: 15px;
    }
  }
}
.hoverBg {
  background: #ebf3ff;
}
.clickBg {
  background: #ebf3ff;
}
.firstbg {
  background: #ebf3ff;
}
</style>