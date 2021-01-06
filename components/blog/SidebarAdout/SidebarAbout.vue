<template>
    <BlogSidebarItem title="Обо мне" class="sidebar__about__item">
        <img :src="getAboutPreviewImage" alt="" />
        <h6 v-html="getAboutTitle"></h6>
        <p>{{ getAboutPreview }}</p>
        <NuxtLink to="/about" class="primary-btn">Подробнее</NuxtLink>
    </BlogSidebarItem>
</template>
<script>
export default {
    computed: {
        getAboutTitle() {
            return this.$store.state.about.title || '';
        },
        getAboutPreview() {
            return this.$store.state.about.preview || '';
        },
        getAboutPreviewImage() {
            return this.$store.state.about.previewImage || '';
        },
    },
    async fetch() {
        await this.$store.dispatch('about/fetchAbout');

        return {};
    },
    fetchOnServer: true,
};
</script>
