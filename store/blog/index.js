import MockCategoriesList from '~/mocks/MockCategoriesList';
import MockCategories from '~/mocks/MockCategories';
import MockPost from '~/mocks/MockPost';

import Vue from 'vue';

export const state = () => ({
    categoriesList: [],
    currentCategory: null,
    currentPost: null,
    limit: 10,
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
        const res = {};

        Object.entries(val).map(([key, value]) => {
            const splitKey = key.split('BlogPost_')[1];
            res[splitKey] = value;
        });
        Vue.set(state, 'currentPost', res);
    },
};

export const actions = {
    async fetchPosts({ commit }, payload = {}) {
        const { filter = {} } = payload;

        const filterSample = {
            shift: 2,
            limit: 14,
            categories: ['herbs', 'health'],
        };

        const categoriesList = await this.$axios.get('blog/posts');

        commit('setCategoriesList', categoriesList.data);
    },

    async fetchCurrentPost({ commit }, payload = {}) {
        const id = payload.route.params.id;

        if (!id) {
            throw new Error('error');
        }

        const post = await this.$axios.get('blog/posts/' + id);
        const curr = post.data[0];

        commit('setCurrentPost', curr);

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

    async loadMore() {},
};

export const getters = {
    getCategoriesList(state) {
        return state.categoriesList;
    },
};
