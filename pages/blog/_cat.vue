<template>
    <section class="categories categories-grid spad">
        <div class="categories__post">
            <div class="container">
                <div class="categories__grid__post">
                    <div class="row">
                        <div class="col-lg-8 col-md-8">
                            <BlogBreadcrumb :list="breadcrumbs" />
                            <BlogCategoriesList />
                            <div class="row">
                                <div class="col-lg-12">
                                    <BlogCategoriesPagination />
                                </div>
                            </div>
                        </div>
                        <BlogSidebar>
                            <BlogSidebarCategories />
                            <BlogSidebarAbout />
                            <!--
                            <BlogSidebarFollow />
                            <BlogSidebarFeature />
                            <BlogSidebarBanner />
                            <BlogSidebarSubscribe />
                            -->
                        </BlogSidebar>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    async asyncData({ app, params, route, error }) {
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
    },
};
</script>
