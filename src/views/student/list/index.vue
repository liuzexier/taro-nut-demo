<template>
  <div class="student-list">
    <div class="selection">
      <div class="select">
        <div class="form-item">
          <div class="label">姓名:</div>
          <el-input class="input" size="small" v-model="query.data.username"></el-input>
        </div>
        <el-button class="btn" size="small" type="primary" @click="handleSearch">搜索</el-button>
      </div>
      <div class="right-btn"></div>
    </div>
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <el-pagination
      v-model:current-page="query.pageUtil.page"
      background
      layout="prev, pager, next"
      @current-change="getData"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script lang='ts'>
import { StudentQuery } from '@/services/StuentsService'
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData: any[] = reactive([])
    const total = ref(0)
    const query: StudentQuery = reactive({
      pageUtil: {
        page: 1,
        limit: 10
      },
      data: {
        username: ''
      }
    })
    function getData() {
      // TODO: getData

    }
    function handleSearch() {
      query.pageUtil.page = 1
      getData()
    }
    getData()
    return {
      tableData,
      total,
      query,
      getData,
      handleSearch
    }
  }
})
</script>
<style lang='less' scoped>
.student-list {
  padding: 20px;
}
</style>