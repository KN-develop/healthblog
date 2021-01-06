<template>
    <section>
        <template v-if="theme === 'list'">
            <BlogCategoriesItem
                v-for="(item, index) in categoriesList"
                :key="`post-${index}`"
                :title="item.title"
                :text="item.text"
                :href="item.href"
                :bg-image="item.image"
                :date="item.date"
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
