<template>
    <section class="categories categories-grid spad">
        <div class="categories__post">
            <div class="container">
                <div class="categories__grid__post">
                    <div class="row">
                        <div class="col-lg-8 col-md-8">
                            <BlogBreadcrumb />
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
