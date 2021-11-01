<template>
  <div class="login-c">
    <div class="login-form">
      <div class="title">注册</div>
      <el-form ref="form" :model="data" label-width="0">
        <el-form-item prop="phone" :rules="commonRules('手机号')">
          <el-input placeholder="请输入手机号码" type="text" v-model="data.phone"></el-input>
        </el-form-item>
        <el-form-item prop="password" :rules="commonRules('密码')">
          <el-input placeholder="请输入用密码" type="password" v-model="data.password"></el-input>
        </el-form-item>
        <el-form-item prop="repassword" :rules="commonRules('确认密码', 'blur', passwordVdt)">
          <el-input placeholder="请确认密码" type="password" v-model="data.repassword"></el-input>
        </el-form-item>
      </el-form>
      <div class="bottom-btn">
        <el-button type="primary" @click="handleReg">确定</el-button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import * as LoginService from '@/services/LoginService'
import { defineComponent, reactive, ref } from 'vue'
import { commonRules } from '@/utils'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'register',
  setup() {
    const form: any = ref(null)
    const data = reactive({
      phone: '',
      password: '',
      repassword: '',
    })
      const $router = useRouter()
    const passwordVdt = (_rule, _value, callback) => {
      if (data.password !== data.repassword) {
        callback('两次密码输入不一样')
      }
      callback()
    }
    function handleReg() {
      form.value.validate(validate => {
        if (validate) {
          LoginService.register({ ...data}).then(res => {
            if(res.code == 200) {
              ElMessage.success('注册成功')
              $router.back()
            }
          })
        }
      })
    }
    return {
      form,
      data,
      passwordVdt,
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
      }
    }
  }
}
</style>