export const state = () => ({
    breadcrumbs: [{ name: '', link: '/' }],
});

export const mutations = {
    setBreadcrumbs(state, val) {
        while (state.breadcrumbs.length) {
            state.breadcrumbs.pop();
        }
        state.breadcrumbs.push({ name: '', link: '/' });
        val.forEach(el => state.breadcrumbs.push(el));
    },
};

export const actions = {
    //
};

export const getters = {
    getBreadcrumbs(state) {
        return state.breadcrumbs;
    },
};
