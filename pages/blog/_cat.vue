<template>
    <section class="categories categories-grid spad">
        <div class="categories__post">
            <div class="container">
                <div class="categories__grid__post">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <BlogBreadcrumb :list="breadcrumbs" />
                            <BlogCategoriesList />
                            <!--                            <div class="row">
                                <div class="col-lg-12">
                                    <BlogCategoriesPagination />
                                </div>
                            </div>-->
                        </div>
                        <!--                        <BlogSidebar>
                            <BlogSidebarCategories />
                            <BlogSidebarAbout />
                            &lt;!&ndash;
                            <BlogSidebarFollow />
                            <BlogSidebarFeature />
                            <BlogSidebarBanner />
                            <BlogSidebarSubscribe />
                            &ndash;&gt;
                        </BlogSidebar>-->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    beforeCreate() {
        this.$router.replace('/blog');
    },
    /*async asyncData({ app, params, route, error }) {
        try {
            await app.store.dispatch('blog/fetchCurrentCategory', { route });

            const breadcrumbs = [
                {
                    title: 'Блог',
                    href: '/blog',
                },
            ];

            const bread = [
                ...breadcrumbs,
                {
                    href: app.store.state.blog.currentCategory.href,
                    title: app.store.state.blog.currentCategory.title,
                },
            ];
            return { breadcrumbs: bread };
        } catch (err) {
            console.log(err);
            return error({
                statusCode: 404,
                message: 'Категория не найдена или сервер не доступен',
            });
        }
    },*/
};
</script>
