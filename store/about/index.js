import MockAbout from '@/mocks/MockAbout';

export default {
    state() {
        return {
            title: '',
            preview: '',
            previewImage: '',
            contentHtml: '',
            init: false,
        };
    },

    mutations: {
        setInfo(state, payload = {}) {
            const { title = '', preview = '', previewImage = '', contentHtml = '' } = payload;

            state.init = true;

            state.title = title;
            state.preview = preview;
            state.previewImage = previewImage;
            state.contentHtml = contentHtml;
        },
    },

    actions: {
        fetchAbout({ commit, state }) {
            if (state.init) return void 0;

            commit('setInfo', MockAbout);

            return void 0;
        },
    },
};
