import Cookies from 'cookies-js';
import jwtDecode from 'jwt-decode';

export const state = () => ({
    auth: false,
    userGuest: false,
    token: null,
});

export const mutations = {
    setAuth(state, payload) {
        state.auth = payload;
    },
    setToken(state, payload) {
        state.token = payload;
        state.auth = true;
    },
    setUserGuest(state, val) {
        state.userGuest = val;
    },
    onAuthStateChanged(nextOrObserver, error, completed) {},
};

export const actions = {
    async onAuthStateChangedAction(ctx, { authUser, claims }) {
        if (!authUser) {
            console.log('not auth');
            // claims = null
            // Perform logout operations
        } else {
            console.log('auth confirm');
            // Do something with the authUser and the claims object...
        }
    },

    /**
     * Авторзация по логину и паролю
     */
    async authWithPass({ commit, state }, payload) {
        const [username, password] = payload.data;

        const res = await this.$axios.$post('/auth/login', { username, password });

        console.log({ res });

        if ('success' === res.status) {
            const token = res.data.access_token;
            commit('setToken', token);

            return true;
        }

        return false;
    },

    /**
     * Авторизация по логину и токену
     * @param commit
     * @param state
     * @param data: Object
     *            login: String
     *            token: String
     * @returns {Promise<void>}
     */
    async authWithLogin({ commit, state }, data) {
        const res = await this.$axios({
            headers: {
                Authorization: 'Bearer ' + data.token,
            },
            method: 'post',
            url: '',
            data: [data.login],
        });
        if (res.data.response_code === 200) {
            commit('setAuth', true);
        }

        global.authResult = res;
        return res;
    },

    async authGuest({ commit }) {
        /*const guestId = `guest${Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000}`;
        const res = await this.$axios({
            method: 'post',
            url: '',
            data: [guestId],
        });
        const token = res.headers['json-web-token'];
        this.app.$cookies.set('authorization', token);
        commit('setUserGuest', true);

        global.authResult = res;
        return res;*/
    },

    /**
     * Авторизация при загрузке
     * @returns {Promise<void>}
     * @param context
     */
    async authOnLoad(context) {
        const savedData = {
            login: this.app.$cookies.get('login'),
            token: this.app.$cookies.get('authorization'),
        };

        if (savedData.login && savedData.token) {
            // авторизация по логину
            const authResult = await context.dispatch('authWithLogin', savedData);
            global.authResult = authResult;
            return authResult;
        } else {
            // гостевая авторизация
            const authResult = await context.dispatch('authGuest');
            global.authResult = authResult;
            return authResult;
        }
    },

    async logout({ commit, dispatch }) {
        commit('setAuth', false);
        this.app.$cookies.remove('authorization');
        this.app.$cookies.remove('login');
        await dispatch('authGuest');
    },
};

export const getters = {
    getAuth(state) {
        return state.auth;
    },
    getToken(state) {
        return state.token;
    },
    getUserGuest(state) {
        return state.userGuest;
    },
};
