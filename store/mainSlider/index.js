import MockMainSlider from '@/mocks/MockMainSlider';
import Vue from 'vue';

export default {
    state() {
        return {
            slides: [],
        };
    },

    mutations: {
        setSlides(state, slides = []) {
            Vue.set(state, 'slides', slides);
        },
    },

    actions: {
        async fetch({ commit }) {
            commit('setSlides', MockMainSlider);
            return void 0;
        },
    },
};
