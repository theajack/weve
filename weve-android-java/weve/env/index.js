
import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
import Vant, {Toast} from 'vant';
import 'vant/lib/index.css';
import './base.less';

Vue.use(VueRouter);
Vue.use(Toast);
Vue.use(Vant);

function mountVue ({entry, routes}) {
    const router = new VueRouter({
        routes
    });
    new Vue({
        render: h => h(entry),
        router
    }).$mount('#weve_app');
}

export function initWeve ({entry, routes}) {
    mountVue({entry, routes});
}
  