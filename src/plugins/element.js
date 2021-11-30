import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import {
  Pagination,
  Checkbox,
  CheckboxGroup,
  MessageBox,
  Message,
  Form,
  FormItem,
  Input,
  InputNumber,
  Button,
  ButtonGroup,
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Button);
Vue.use(ButtonGroup);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

// 
//   
// Vue.use(MessageBox);
// 






