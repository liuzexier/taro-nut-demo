<template>
  <div class="add-dialog">
    <el-form>
      <el-form-item label="标题">
        <el-input type="text"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <div class="footer">
      <el-button type="primary" @click="handleSave">确定</el-button>
      <el-button @click="handleCancel">取消</el-button>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    modelValue: {
      type: Boolean
    }
  },
  setup(_prop, ctx) {
    function handleCancel() {
      ctx.emit('update:modelValue', false)
    }
    function handleSave() {
      // TODO: 保存
    }
    return {
      handleCancel,
      handleSave
    }
  }
})
</script>
<style lang='less' scoped>
</style>