import MockCategoriesList from '~/mocks/MockCategoriesList';
import MockCategories from '~/mocks/MockCategories';
import MockPost from '~/mocks/MockPost';

import Vue from 'vue';

export const state = () => ({
    categoriesList: [],
    currentCategory: null,
    currentPost: null,
});

export const mutations = {
    setCategoriesList(state, val) {
        state.categoriesList = val;
    },
    setCurrentCategory(state, val = {}) {
        const { href, title } = val;
        state.currentCategory = { href, title };
    },
    setCurrentPost(state, val = {}) {
        Vue.set(state, 'currentPost', val);
    },
};

export const actions = {
    async fetchCurrentPost({ commit }, payload = {}) {
        const id = payload.route.params.id;

        if (!id) {
            throw new Error('error');
        }

        commit('setCurrentPost', MockPost);

        return void 0;
    },

    async fetchCurrentCategory({ commit }, payload = {}) {
        const catHref = `/blog/${payload.route.params.cat}`;
        const findCat = MockCategories.find(category => category.url === catHref);

        if (!findCat) {
            throw new Error('Категория не найдена');
        }

        const category = {
            title: findCat.title,
            href: findCat.url,
            list: MockCategoriesList,
        };
        commit('setCategoriesList', category.list);
        commit('setCurrentCategory', category);
    },
};

export const getters = {
    getCategoriesList(state) {
        return state.categoriesList;
    },
};
