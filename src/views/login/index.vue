<template>
  <div class="login-c">
    <div class="login-form">
      <div class="title">登录</div>
      <el-form ref="form" label-width="0">
        <el-form-item>
          <el-input placeholder="请输入用户名" type="text"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入用密码" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div class="bottom-btn">
        <el-button type="primary">确定</el-button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    // 
  }
})
</script>
<style lang='less' scoped>
.login-c {
  height: 100vh;
  background-color: dimgray;
  position: relative;
  .login-form {
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    width: 300px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 20px;
      text-align: center;
    }
    .bottom-btn {
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>