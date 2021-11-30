下载:
npm install vee-validate@2.2.15

引入安装插件
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

基本使用
<input v-model="mobile" name="phone" 
	v-validate="{required: true,regex: /^1\d{10}$/}" 
    :class="{invalid: errors.has('phone')}">
<span class="error-msg">{{ errors.first('phone') }}</span>

const success = await this.$validator.validateAll() // 对所有表单项进行验证

#3). 提示文本信息本地化

import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN' // 引入中文message
VeeValidate.Validator.localize('zh_CN', {
	messages: {
	    ...zh_CN.messages,
	    is: (field) => `${field}必须与密码相同`  // 修改内置规则的message
	},
	attributes: { // 给校验的field属性名映射中文名称
	    phone: '手机号',
	    code: '验证码',
    }
})


自定义验证规则
VeeValidate.Validator.extend('agree', {
	validate: value => {
        return value
	},
	getMessage: field => field + '必须同意'
})