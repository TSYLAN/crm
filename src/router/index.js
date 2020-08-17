import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

// 工作台
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/presentations",
    meta: { title: "工作台", icon: "el-icon-s-operation" },
    children: [
      {
        path: "presentations",
        name: "Presentations",
        component: () => import("@/views/dashboard/presentations"),
        meta: { title: "销售简报", icon: "el-icon-s-order" },
      },
      {
        path: "approval",
        name: "Approval",
        component: () => import("@/views/dashboard/approval"),
        meta: { title: "审批中心", icon: "el-icon-menu" }
      },
      {
        path: "task",
        name: "Task",
        component: () => import("@/views/dashboard/task"),
        meta: { title: "销售任务", icon: "el-icon-s-release" }
      },
      {
        path: "performance",
        name: "Performance",
        component: () => import("@/views/dashboard/performance"),
        meta: { title: "业绩排行", icon: "el-icon-s-data" }
      },
      {
        path: "remind",
        name: "Remind",
        component: () => import("@/views/dashboard/remind"),
        meta: { title: "工作提醒", icon: "el-icon-message-solid" }
      },
      {
        path: "notice",
        name: "Notice",
        component: () => import("@/views/dashboard/notice"),
        meta: { title: "公告栏", icon: "el-icon-s-unfold" }
      }
    ]
  },
  // 客户管理
  {
    path: "/client",
    component: Layout,
    redirect: "/client/client_message",
    meta: { title: "客户管理", icon: "el-icon-s-check" },
    children: [
      {
        path: "client_message",
        name: "Client_message",
        component: () => import("@/views/client/client_message"),
        meta: { title: "客户信息", icon: "el-icon-s-custom" }
        
      },
      {
        path: "client_add",
        name: "Client_add",
        component: () => import("@/views/client/client_add"),
        meta: { title: "新增客户", icon: "table" }
      },
      {
        path: "client_visit",
        name: "Client_visit",
        component: () => import("@/views/client/client_visit"),
        meta: { title: "客户拜访", icon: "tree" }
      }
    ]
  },
//服务管理
  {
    path: "/service",
    component: Layout,
    redirect: "/service/service_contract",
    meta:{title:"服务管理",icon:"el-icon-s-unfold"},
    children: [
      {
        path: "service_contract",
        name: "Service_contract",
        component: () => import("@/views/service/service_contract"),
        meta: { title: "合同管理", icon: "form" }
      },
      {
        path: "service_payback",
        name: "Service_payback",
        component: () => import("@/views/service/service_payback"),
        meta: { title: "回款", icon: "el-icon-s-marketing" }
      }
    ]
  },
  //产品中心
  {
    path: "/product",
    component: Layout,
    redirect: "/product/product_category",
    meta:{title:"产品中⼼",icon:"el-icon-s-grid"},
    children: [
      {
        path: "product_category",
        name: "Product_category",
        component: () => import("@/views/product/product_category"),
        meta: { title: "产品分类", icon: "el-icon-s-fold" }
      },
      {
        path: "product_list",
        name: "Product_list",
        component: () => import("@/views/product/product_list"),
        meta: { title: "产品列表", icon: "el-icon-s-finance" }
      }
    ]
  },
  {
    path: "/form",
    component: Layout,
    redirect: "/form/form_followup",
    meta:{title:"报表中心",icon:"form"},
    children: [
      {
        path: "form_followup",
        name: "Form_followup",
        component: () => import("@/views/form/form_followup"),
        meta: { title: "跟进记录", icon: "el-icon-s-management" }
      },
      {
        path: "form_sales",
        name: "Form_sales",
        component: () => import("@/views/form/form_sales"),
        meta: { title: "销售预测", icon: "el-icon-s-fold" }
      },
      {
        path: "form_performance",
        name: "Form_performance",
        component: () => import("@/views/form/form_performance"),
        meta: { title: "业绩⽬标", icon: "form" }
      },
      {
        path: "form_repayment",
        name: "Form_repayment",
        component: () => import("@/views/form/form_repayment"),
        meta: { title: "回款计划", icon: "dashboard" }
      },
      {
        path: "form_contract",
        name: "Form_contract",
        component: () => import("@/views/form/form_contract"),
        meta: { title: "合同汇总", icon: "el-icon-s-fold" }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];


const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
