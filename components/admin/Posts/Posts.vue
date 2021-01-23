<template>
    <div class="admin-posts">
        <NuxtLink to="/admin/post-add">Добавить статью</NuxtLink>
        <ul class="admin-posts__list">
            <li class="admin-posts__item" v-for="post in getPosts">
                <NuxtLink :to="'/blog/post/' + post.slug">{{ post.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    computed: {
        getPosts() {
            return this.$store.getters['blog/getCategoriesList'];
        },
    },
};
</script>
