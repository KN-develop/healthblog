import Cookies from 'cookies-js';
import jwtDecode from 'jwt-decode';

export const state = () => ({
    customer: false,
});

export const mutations = {
    setCustomer(state, payload) {
        state.customer = payload;
    },
};

export const actions = {
    /**
     * Получить данные пользователя
     * @param commit
     * @param state
     * @returns {Promise<void>}
     */
    async fetchCustomerData({ commit, state }, payload) {
        const getToken = payload || this.app.$cookies.get('authorization');
        const token = 'Bearer ' + getToken;
        const decode = jwtDecode(token);

        const res = await this.$axios({
            headers: {
                Authorization: token,
            },
            method: 'post',
            url: '',
            data: [decode.uid, ['balance', 'roles']],
        });

        if (res.data.response_code === 200) {
            commit('setCustomer', res.data.result);
        }

        return res;
    },
};

export const getters = {
    getCustomer(state) {
        return state.customer;
    },
};
