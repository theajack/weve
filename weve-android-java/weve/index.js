import bridge from './bridge';
import {initWeve} from './env';
import Vue from 'vue/dist/vue.esm';
import {alert, confirm} from './utils/util';

export default {
    bridge,
    init: initWeve,
    Vue,
    alert,
    confirm
};