<template>
  <div class="task">
    <div class="task_top">
      <el-row>
        <el-col :lg="22" :md="22" :sm="22"><div id="main" style="width: calac((100vw - 250px) );height:calc((100vh - 50px) / 2); margin:0 auto"></div></el-col>
      </el-row>
    </div>
    <div class="task_bottom">
       <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
       tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  },
  methods:{
    task_echarts(){
      // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option =option = {
    title: {
        text: '销售目标',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['个人目标', '部门目标']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '个人目标'},
                {value: 310, name: '部门目标'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
  },
  mounted(){
    this.task_echarts();
  }
}
</script>

<style lang='scss'>
.task{
  // width: calc(100vw - 250px);
  height: calc(100vh - 100px);
  margin: 20px 20px 0 20px;
  .task_top{
    // width: calc(100vw - 50px);
    height: calc(((100vh - 100px) / 2) -20px);
    background: #fff;
    border: 1px solid #e6e6e6;
}
.task_bottom{
    // width: calc(100vw - 50px);
    height: calc(((100vh - 100px) / 2) -20px);
    background: #fff;
    margin-top: 20px;
    margin-right: 20px;
    border: 1px solid #e6e6e6;
}
}


</style>