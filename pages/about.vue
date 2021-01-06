<template>
    <section class="about spad">
        <div class="container">
            <div class="about__text">
                <div class="row">
                    <div class="col-lg-12">
                        <BlogBreadcrumb
                            :list="[
                                {
                                    title: 'Обо мне',
                                    href: '/about',
                                },
                            ]"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about__pic__item__large">
                            <img src="/img/about/about-1.jpg" alt="" />
                        </div>
                        <div class="about__pic">
                            <div class="about__pic__item">
                                <img src="/img/about/about-2.jpg" alt="" />
                            </div>
                            <div class="about__pic__item">
                                <img src="/img/about/about-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about__right__text">
                            <h2 v-html="getAboutTitle"></h2>
                            <div v-html="getAboutContent"></div>
                            <!--
                            <BlogSocial />
                            -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    computed: {
        getAboutTitle() {
            return this.$store.state.about.title || '';
        },
        getAboutContent() {
            return this.$store.state.about.contentHtml || '';
        },
    },
    async asyncData({ app }) {
        await app.store.dispatch('about/fetchAbout');
    },
};
</script>
