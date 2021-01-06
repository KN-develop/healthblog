import Cookies from 'cookies-js';

export const state = () => ({
    userGuest: false,
});

export const mutations = {
    setUserGuest(state, val) {
        state.userGuest = val;
    },
};

export const actions = {
    async checkAuth({ commit }) {
        const login = Cookies.get('login');
        const getToken = Cookies.get('authorization');
        const resultToken = 'Bearer ' + getToken;
        const res = await this.$axios({
            method: 'get',
            url: '',
            data: [login],
        });
    },
};

export const getters = {
    getUserGuest(state) {
        return state.userGuest;
    },
};
