import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import {
  Pagination,
  Checkbox,
  CheckboxGroup,
  MessageBox,
  Message
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

// 
//   
// Vue.use(MessageBox);
// 






