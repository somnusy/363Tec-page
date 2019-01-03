<template>
    <div class="login-wrap">
        <div class="ms-title">微信统一服务管理系统</div>
        <!--<div class="ms-login">-->

        <Card class="ms-login">
            <Form ref="loginForm" :model="loginForm" :rules="loginRule" :label-width="60" label-position="left">
                <Form-item prop="user" label="用户名">
                    <Input type="text" :model="loginForm.userName" style="width: 250px"></Input>
                </Form-item>

                <Form-item prop="password" label="密码">
                    <Input type="password" :model="loginForm.passwd" style="width: 250px"></Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" style="width: 250px;" @click="handleSubmit('loginForm')">登录</Button>
                </Form-item>
            </Form>
        </Card>
    </div>
</template>


<script>
    export default {
        data () {
            return {
                loginForm: {
                    userName: '',
                    passwd: ''
                },
                loginRule: {
                    userName: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
//                        localStorage.setItem('ms_username', this.ruleForm.username);
                        this.$router.push('/main');
//                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>


<style scoped>
    .login-wrap {
        position: fixed;
        width: 100%;
        height: 100%;
        background: linear-gradient(to left bottom, #5b9bae 0%, #324157 100%);
    }

    .ms-title {
        position: absolute;
        top: 50%;
        width: 100%;
        margin-top: -230px;
        text-align: center;
        font-size: 30px;
        color: #fff;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 400px;
        height: 250px;
        margin: -150px 0 0 -190px;
        padding: 40px 20px 40px 20px;
        border-radius: 5px;
        background: #fff;
    }

    .ivu-form-item-error-tip {
        margin-left: 60px;
    }

    .input-label {
        float: left;
        width: 60px;
        line-height: 32px;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
    }
</style>
