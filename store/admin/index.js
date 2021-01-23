export const state = () => ({});

export const mutations = {};

export const actions = {
    async createPost({ commit, rootGetters }, payload = {}) {
        let res;
        try {
            console.log({ payload });
            res = await this.$axios.$post('/blog/posts', payload, {
                headers: {
                    Authorization: 'Bearer ' + rootGetters['auth/getToken'],
                },
            });

            console.log({ res });
        } catch (err) {
            console.log({ err });
            return { status: 'error', code: err.response.status };
        }

        return res;
    },
};

export const getters = {};
