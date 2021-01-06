import Vue from 'vue';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

Vue.prototype.$disableBodyScroll = disableBodyScroll;
Vue.prototype.$enableBodyScroll = enableBodyScroll;
Vue.prototype.$clearAllBodyScrollLocks = clearAllBodyScrollLocks;
