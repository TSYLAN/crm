<template>
  <div class="approval">
    <div class="approval_top">
      <div class="approval_toggle">
        <span class="line"></span>
        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
          <el-tab-pane label="我发起的" name="first">
            <div>
              <span class="demonstration">公告状态</span>
              <!-- 下拉框 -->
              <el-cascader
                v-model="value"
                :options="options"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"
                size="small"
              ></el-cascader>
            </div>
            <el-table :data="gridData">
              <el-table-column property="date" label="日期" width="150"></el-table-column>
              <el-table-column property="name" label="姓名" width="200"></el-table-column>
              <el-table-column property="address" label="公告" width="200"></el-table-column>
              <el-table-column property="approval_type" label="公告类型"></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
        <div class="block">
          <el-button type="primary" size="small" @click="open">新建公告</el-button>
        </div>
      </div>
    </div>
    <!-- 新建公告表 -->

    <div class="announcement_form" v-if="messagebox">
      <div class="announcement_form_content">
        <h3>新建公告</h3>
        <el-row type="flex" justify="space-between">
          <el-col :lg="10" :mg="10" :sm="22">
            <span class="announcement_title">公告标题</span>
            <el-input v-model="input" placeholder="请输入公告标题"></el-input>
          </el-col>
          <el-col :lg="10" :mg="10" :sm="22">
            <span >通知部门</span>
            <br>
            <el-cascader v-model="value2" :options="options2" @change="handleChange" :props="props"></el-cascader>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :lg="10" :mg="10" :sm="22">
            <span class="announcement_title">开始时间</span>
            <br>
            <el-date-picker v-model="time" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
          <el-col :lg="10" :mg="10" :sm="22">
            <span class="announcement_title">结束时间</span>
            <br>
            <el-date-picker v-model="time" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <span class="announcement_title">公告正文</span>
            <div style="margin: 20px 0;"></div>
            <el-input
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 8}"
              placeholder="请输入内容"
              v-model="textarea2"
            ></el-input>
          </el-col>
        </el-row>
        <el-row class="btn">
           <el-button type="primary">提交</el-button>
           <el-button @click="close" > 取消</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: { multiple: true }, //级联选择器多选设置
      messagebox: false,
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
      value1: "", //时间
      value: [], //下拉框
      time: "",
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],

      value2: [], //下拉框
      options2: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      activeName: "first",
      input: "",
      textarea2: ''
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
      this.messagebox = true;
      console.log("11");
    },
    handleClick(row) {
      console.log(row);
    },
    close(){
      this.messagebox=false
    }
  },
};
</script>

<style lang="scss" scoped>
body {
  position: relative;
  z-index: 100;
}
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
h5 {
  text-align: center;
}
h3 {
  font-weight: 400;
}

.announcement_form {
  position: relative;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(245, 246, 249);
  z-index: 9999;
  overflow-x: scroll;
}
.announcement_form_content {
  width: 800px;
  height: calc(100vh - 100px);
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.el-input,
.el-cascader {
  margin: 10px 0 20px 0;
}
.announcement_title::before {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
.btn{
  text-align: right;
  position: fixed;
  bottom: 30px;
  right: 50px;
}
</style>