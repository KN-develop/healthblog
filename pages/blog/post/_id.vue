<template>
    <BlogPost
        :title="this.post.title"
        :content-html="this.post.contentHtml"
        :categories="this.post.categories"
        :tags="this.post.tags"
        :author="this.post.author"
        :image="this.post.image"
    />
</template>
<script>
export default {
    async asyncData({ app, params, route, error }) {
        try {
            //throw new Error('error');
            await app.store.dispatch('blog/fetchCurrentPost', { route });

            const post = app.store.state.blog.currentPost;

            return { post };
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
