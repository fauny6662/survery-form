import Vue from 'vue';
import ElementUI from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
<style>
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }
  
    .el-carousel__item:nth-child(2n) {
       background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
       background-color: #d3dce6;
    }
  </style>