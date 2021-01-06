import MockBestCategories from '@/mocks/MockBestCategories';
import Vue from 'vue';

export default {
    state() {
        return {
            list: [],
        };
    },

    mutations: {
        setCategories(state, payload = []) {
            Vue.set(state, 'list', payload);
        },
    },

    actions: {
        fetch({ commit }) {
            commit('setCategories', MockBestCategories);

            return void 0;
        },
    },
};
