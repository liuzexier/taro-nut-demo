<template>
  <div class="login-c">
    <div class="login-form">
      <div class="title">登录</div>
      <el-form ref="form" label-width="0" :model="data">
        <el-form-item prop="phone" :rules="commonRules('手机号码')">
          <el-input placeholder="请输入手机号码" type="text" v-model="data.phone"></el-input>
        </el-form-item>
        <el-form-item prop="password" :rules="commonRules('密码')">
          <el-input placeholder="请输入用密码" type="password" v-model="data.password"></el-input>
        </el-form-item>
      </el-form>
      <div class="bottom-btn">
        <el-button type="primary" @click="handleLogin">确定</el-button>
        <el-button @click="handleReg">注册</el-button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import * as LoginService from '@/services/LoginService'
import { defineComponent, reactive, ref } from 'vue'
import { commonRules } from '@/utils'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const form: any = ref(null)
    const data = reactive({
      phone: '',
      password: ''
    })
    const $router = useRouter()
    function handleLogin() {
      form.value.validate((v) => {
        if (v) {
          LoginService.login(data).then(res => {
            console.log(res)
          })
        }
      })
    }
    function handleReg() {
      $router.push('/register')
    }
    return {
      data,
      form,
      handleLogin,
      commonRules,
      handleReg
    }
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
        margin-bottom: 15px;
      }
      .el-button + .el-button {
        margin-left: 0;
        margin-bottom: 0;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>