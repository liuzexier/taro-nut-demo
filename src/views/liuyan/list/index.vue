<template>
  <div class="liuyan-list">
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <el-pagination
      v-model:current-page="query.page"
      background
      layout="prev, pager, next"
      @current-change="getData"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData: any[] = reactive([])
    const total = ref(0)
    const query = reactive({
      page: 1,
      size: 10
    })
    function getData() {
      // TODO: getData
    }
    getData()
    return {
      tableData,
      total,
      query,
      getData
    }
  }
})
</script>
<style lang='less' scoped>
.liuyan-list {
  padding: 20px;
}
</style>