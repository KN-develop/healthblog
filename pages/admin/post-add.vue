<template>
    <div>
        <NuxtLink to="/admin/posts">Вернуться к списку статей</NuxtLink>
        <form action="#" @submit.prevent="onSubmit">
            <div>
                <input type="text" name="seo-title" placeholder="SEO Заголовок" v-model="seoTitle" />
            </div>
            <div>
                <input type="text" name="seo-description" placeholder="SEO Описание" v-model="seoDescription" />
            </div>
            <div>
                <input type="text" name="seo-keywords" placeholder="SEO Ключевики" v-model="seoKeywords" />
            </div>
            <div>
                <input type="text" name="slug" placeholder="Ссылка" v-model="slug" />
            </div>
            <div>
                <input type="text" name="title" placeholder="Заголовок" v-model="title" />
            </div>
            <div>
                <input type="text" name="description" placeholder="Краткое описание" v-model="description" />
            </div>
            <div>
                <input type="file" name="image" placeholder="Картинка" @change="onChangeImage" />
                <img width="300" :src="imageBase64" alt="#" v-if="imageBase64" />
            </div>
            <div>
                <textarea name="content" cols="30" rows="10" v-model="contentHtml">
                    Контент
                </textarea>
            </div>

            <button type="submit">Добавить статью</button>
        </form>
    </div>
</template>
<script>
import encodedImageFileAsURL from '@/helpers/encodedImageFileAsURL';

export default {
    data() {
        return {
            seoTitle: '',
            seoDescription: '',
            seoKeywords: '',
            slug: '',
            title: '',
            contentHtml: '',
            description: '',
            image: null,
            imageBase64: '',
        };
    },
    computed: {
        buttonIsActive() {
            return this.title && this.contentHtml;
        },
    },
    methods: {
        onChangeImage(evt) {
            const file = evt.target.files[0];

            const callback = base64File => {
                this.imageBase64 = base64File;
            };

            const base64 = encodedImageFileAsURL(evt.target, callback);
        },
        async onSubmit() {
            if (!this.buttonIsActive) return void 0;

            const res = await this.$store.dispatch('admin/createPost', {
                seo_title: this.seoTitle,
                seo_description: this.seoDescription,
                seo_keywords: this.seoKeywords,
                title: this.title,
                slug: this.slug,
                contentHtml: this.contentHtml,
                image: this.imageBase64,
                description: this.description,
            });

            if (true === res) {
                this.$router.push('/admin/posts');
            }

            if ('error' === res.status && 401 === res.code) {
                this.$bus.$emit('app-open-popup', 'app-login');
            }
        },
    },
};
</script>
<style lang="postcss" scoped>
form {
    > div {
        padding: 18px 8px;
    }
}
</style>
