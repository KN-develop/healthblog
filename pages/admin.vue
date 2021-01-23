<template>
    <section class="admin-content" v-if="ready">
        <NuxtChild />
    </section>
</template>
<script>
export default {
    layout: 'admin',
    data() {
        return {
            ready: false,
        };
    },
    beforeRouteEnter: (to, from, next) => {
        next(ctx => {
            const isAuth = ctx.$store.getters['auth/getAuth'];
            if (!isAuth) {
                ctx.$router.push({
                    path: '/auth?redirect=' + ctx.$route.path,
                });
            } else {
                ctx.ready = true;
            }
        });
    },
};
</script>
