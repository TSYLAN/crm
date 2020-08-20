<template>
  <div>
    <p>系统管理角色</p>
    <div class="rolepermisssions">
      <div class="rolepermisssions_left">
        <div class="nav-new-btn">
          <el-button>新建角色</el-button>
        </div>
        <div class="role-nav-box">
          <el-dropdown
            trigger="click"
            v-for="(item,index) in userList"
            :key="index"
            :class="{'clickBg':index==clickIndex,'hoverBg':index==hoverIndex, 'firstbg':index==firstIndex} "
          >
            <div @mouseover="hoverIndex = index" @mouseout="hoverIndex = -1" @click="b(index)">
              <span class="el-dropdown-link">
                <span>{{item.name}}</span>
                <i
                  class="el-icon-arrow-down el-icon--right"
                  v-if="index==hoverIndex || index==clickIndex"
                  @click="a"
                ></i>
              </span>
            </div>
            <el-dropdown-menu slot="dropdown" v-if="show_icon==true">
              <el-dropdown-item>编辑</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="rolepermisssions_right">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">
            <el-button type="primary">关联员工</el-button>
            <!-- 表格 -->
            <el-table :data="tableData" style="width: 100%" border>
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="角色权限" name="second">
            <el-button type="primary">保存</el-button>
            <el-tabs v-model="moduleName">
              <el-tab-pane label="模块功能" name="module1">
                <ul>
                  <li v-for="(item,index) in moduleList" :key="index">
                    <!-- <el-checkbox-group > -->
                    <el-checkbox
                      v-for="(list,index) in item.name "
                      :key="index"
                      :label="list"
                      v-model="item.checkList"
                    ></el-checkbox>
                    <!-- </el-checkbox-group> -->
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import {getpermsList} from "@/api/user";
export default {
  data() {
    return {
      moduleName: "module1",
      activeName: "first",
      userList: [
        { name: "超级管理员", id: "0" },
        { name: "超级管理员", id: "1" },
        { name: "超级管理员", id: "2" },
        { name: "超级管理员", id: "3" },
        { name: "超级管理员", id: "4" },
        { name: "超级管理员", id: "5" },
      ],
      moduleList: [
        { name: ["全部"], id: "0", checkList: false },
        { name: ["小米", "企业管理"], id: "1", checkList: false },
        { name: ["查看"], id: "2", checkList: false },
        { name: ["应用管理"], id: "3", checkList: false },
        { name: ["超级管理员"], id: "4", checkList: false },
        { name: ["超级管理员"], id: "5", checkList: true },
      ],
      checkList: true,
      show_icon: false,
      hoverIndex: -1, //表示当前hover的是第几个li 初始为 -1 或 null 不能为0 0表示第一个li
      clickIndex: -1, //表示当前点击的是第几个li 初始为 -1 或 null 不能为0 0表示第一个li
      firstIndex: 0,
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
  methods: {
    a() {
      console.log(this.show_icon);
    },
    b(index) {
      this.clickIndex = index;
      this.firstIndex = -1;
      this.show_icon = false;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  created(){
     getpermsList({
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
};
</script>

<style lang="scss" scoped>
p{
    margin: 30px 0 0 20px;
    font-size: min(18px,20px);
}
.rolepermisssions {
  display: flex;
//   margin: 20px;
  padding: 20px;
  width: 100%;
  height: calc(100vh - 100px);
  .rolepermisssions_left {
    width: 200px;
    height: 100%;
    background: #fff;
    border: 1px solid #e6e6e6;
    .nav-new-btn {
      text-align: center;
      padding-top: 15px;
      padding-bottom: 15px;
      .el-button {
        background: #4ab8b8;
        border-color: #4ab8b8;
        color: #fff;
        width: 140px;
        border-radius: 2px;
      }
    }
    .role-nav-box {
      width: 100%;
      .el-dropdown {
        padding-left: 30px;
        height: 40px;
        line-height: 40px;
        width: 100%;
        user-select: none;
      }
      div {
        position: relative;
      }
      span {
        //   display: inline-block;
        display: inline-block;
        padding-right: 20px;
        height: 100%;
      }
      i {
        position: absolute;
        right: 30px;
        top: 15px;
      }
    }
  }
  .rolepermisssions_right {
    width: 800px;
    height: 100%;
    border: 1px solid #e6e6e6;
    background: #fff;
    margin-left: 20px;
    padding: 15px;
    position: relative;
    text-align: right;
    ul {
      text-align: left;
      li {
        padding: 10px 0;
      }
    }
    .el-table {
      margin-top: 20px;
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