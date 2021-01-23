<template>
    <div class="categories__post__item categories__post__item--large">
        <div class="categories__post__item__pic set-bg" :style="`background-image: url(${bgImage})`"></div>
        <div class="categories__post__item__text">
            <ul class="post__label--large" v-if="categories.length > 1">
                <li v-for="item in categories">{{ item.title }}</li>
            </ul>
            <span class="post__label" v-else-if="categories.length === 1">{{ categories[0].title }}</span>
            <h3>
                <NuxtLink :to="'/blog/post/' + href">{{ title }}</NuxtLink>
            </h3>
            <ul class="post__widget">
                <li>
                    <span>{{ date.toLocaleString().split(',')[0] }}</span>
                </li>
                <li>
                    автор: <span>{{ author }}</span>
                </li>
                <!--                <li>на чтение {{ readTime }}</li>-->
            </ul>
            <p>{{ description }}</p>

            <NuxtLink :to="href" class="primary-btn">Читать</NuxtLink>
        </div>
    </div>
</template>
<script src="./index.js"></script>
