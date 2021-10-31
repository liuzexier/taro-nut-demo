<template>
  <div class="publish-list">
    <div class="selection">
      <div class="select"></div>
      <div class="right-btn">
        <el-button size="small" @click="dialogVisiable = true">添加</el-button>
      </div>
    </div>
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
    <el-dialog v-model="dialogVisiable" title="公告">
      <AddPublish v-model="dialogVisiable" v-if="dialogVisiable"></AddPublish>
    </el-dialog>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import AddPublish from '../add/index.vue'
export default defineComponent({
  components: {
    AddPublish
  },
  setup() {
    const dialogVisiable = ref(false)
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
      getData,
      dialogVisiable
    }
  }
})
</script>
<style lang='less' scoped>
.publish-list {
  padding: 20px;
}
</style>