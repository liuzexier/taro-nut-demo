<template>
  <div class="layout-c">
    <!-- <div class="layout-top"></div> -->
    <div class="layout-body">
      <div class="layout-aside">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          default-active="2"
          text-color="#fff"
        >
          <el-menu-item
            :index="item.index"
            v-for="(item, index) in menus"
            :key="index"
            @click="handleView(item)"
          >
            <el-icon></el-icon>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="layout-main">
        <div class="head-container">
          <el-button size="mini" type="danger">退出登录</el-button>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import router from '@/router'
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'Layout',
  setup() {
    const menus = reactive([
      {
        title: '学生管理',
        index: '0',
        route: '/student/list'
      },
      {
        title: '导员管理',
        index: '1',
        route: '/teacher/list'
      },
      {
        title: '公告信息',
        index: '2',
        route: '/publish/list'
      },
      {
        title: '视频管理',
        index: '3',
        route: '/video/list'
      },
      {
        title: '留言管理',
        index: '4',
        route: '/liuyan/list'
      },
      {
        title: '出行管理',
        index: '5',
        route: '/travel/list'
      },
      {
        title: '数据统计',
        index: '6',
        // route: '//list'
      }
    ])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleView(item: any) {
      router.push({
        path: item.route || '/'
      })
    }
    return {
      menus,
      handleView
    }
  }
})
</script>
<style lang='less'>
.layout-c {
  display: flex;
  flex-direction: column;
  .layout-top {
    width: 100%;
    height: 50px;
    background-color: #fff;
    box-shadow: 0 10px 14px rgb(0 21 41 / 8%);
    position: relative;
  }
  .layout-body {
    // height: calc(100vh - 50px);
    display: flex;
    .layout-aside {
      width: 200px;
      overflow-y: auto;
      overflow-x: hidden;
      height: 100vh;
      background-color: #545c64;
      .el-menu {
        width: 200px;
        overflow: hidden;
      }
    }
    .layout-main {
      height: 100vh;
      width: calc(100% - 200px);
      overflow-y: auto;
      .head-container {
        height: 50px;
        border-bottom: 1px solid #f2f2f2;
        display: flex;
        align-items: center;
        padding: 10px 20px;
        box-sizing: border-box;
        justify-content: flex-end;
        .el-button {
          height: 30px;
        }
      }
    }
  }
}
</style>