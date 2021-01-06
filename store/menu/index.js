import Cookies from 'cookies-js';

export const state = () => ({
    catalogMenu: false,
    topMenu: false,
    footerMenu: false,
});

export const mutations = {
    setCatalogMenu(state, val) {
        state.catalogMenu = val;
    },
    setTopMenu(state, val) {
        state.topMenu = val;
    },
    setFooterMenu(state, val) {
        state.footerMenu = val;
    },
};

export const actions = {
    async fetchHeaderMenu({ commit }, payload) {
        let getToken = '';
        if (payload && payload.token) {
            getToken = payload.token;
        } else {
            getToken = this.app.$cookies.get('authorization');
        }

        const resultToken = 'Bearer ' + getToken;
        const res = await this.$axios({
            headers: {
                Authorization: resultToken,
            },
            method: 'get',
            url: '',
        });
        //const categories = getLinks(res.data.result)

        commit('setCatalogMenu', res.data.result);
    },
};

export const getters = {
    getCatalogMenu(state) {
        return state.catalogMenu;
    },
    getTopMenu(state) {
        return state.topMenu;
    },
    getFooterMenu(state) {
        return state.footerMenu;
    },
};
