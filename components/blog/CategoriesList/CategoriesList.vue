<template>
    <section class="categories__list">
        <template v-if="theme === 'list'">
            <BlogCategoriesItem
                v-for="(item, index) in categoriesList"
                :key="`post-${index}`"
                :title="item.title"
                :text="item.contentHtml"
                :description="item.description"
                :href="item.slug"
                :bg-image="item.image"
                :date="new Date(item.date)"
                :author="item.author"
                :read-time="item.readTime"
                :categories="item.categories"
            />
        </template>
        <template v-if="theme === 'grid'">
            <BlogCategoriesGrid :list="categoriesList" />
        </template>
    </section>
</template>

<script>
export default {
    props: {
        theme: {
            type: String,
            default: 'list',
        },
    },
    computed: {
        categoriesList() {
            return this.$store.getters['blog/getCategoriesList'] || [];
        },
    },
};
</script>
<style scoped>
.categories__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
}
</style>
