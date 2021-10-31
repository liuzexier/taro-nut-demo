<template>
  <div class="add-dialog">
    <el-form label-width="80px">
      <el-form-item label="标题">
        <!-- <el-input type="text"></el-input> -->
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList"
          :limit="1"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <!-- <template #tip>
            <div class="el-upload__tip">请上传视频</div>
          </template>-->
        </el-upload>
      </el-form-item>
      <el-form-item label="视频介绍">
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
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  props: {
    modelValue: {
      type: Boolean
    }
  },
  setup(_prop, ctx) {
    const fileList = reactive([])
    function handleCancel() {
      ctx.emit('update:modelValue', false)
    }
    function handleSave() {
      // TODO: 保存
    }
    function handleChange(e: any) {
      console.log(e)
    }
    return {
      handleCancel,
      handleSave,
      handleChange,
      fileList,
    }
  }
})
</script>
<style lang='less' scoped>
</style>