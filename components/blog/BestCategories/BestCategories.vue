<template>
    <AppRow>
        <div class="col-lg-3 col-md-6 col-sm-6" v-for="item in getList">
            <NuxtLink :to="'/blog/post/' + item.href" class="categories__item set-bg" :style="`background-image: url(${item.image})`">
                <div class="categories__hover__text">
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.count }} articles</p>
                </div>
            </NuxtLink>
        </div>
    </AppRow>
</template>

<script>
export default {
    computed: {
        getList() {
            return this.$store.state.bestCategories?.list || [];
        },
    },

    async fetch() {
        await this.$store.dispatch('bestCategories/fetch');
    },
};
</script>
