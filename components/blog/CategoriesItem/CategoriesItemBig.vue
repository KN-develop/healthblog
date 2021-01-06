<template>
    <div class="categories__post__item categories__post__item--large">
        <div class="categories__post__item__pic set-bg" :style="`background-image: url(${bgImage})`">
            <div class="post__meta" v-if="getDate">
                <h4>{{ getDate.day }}</h4>
                <span>{{ getDate.month }}</span>
            </div>
        </div>
        <div class="categories__post__item__text">
            <ul class="post__label--large" v-if="categories.length > 1">
                <li v-for="item in categories">{{ item.title }}</li>
            </ul>
            <span class="post__label" v-else-if="categories.length === 1">{{ categories[0].title }}</span>
            <h3>
                <NuxtLink :to="href">{{ title }}</NuxtLink>
            </h3>
            <ul class="post__widget">
                <li>
                    автор: <span>{{ author }}</span>
                </li>
                <li>на чтение {{ readTime }}</li>
            </ul>
            <p>{{ text }}</p>

            <NuxtLink :to="href" class="primary-btn">Читать</NuxtLink>
        </div>
    </div>
</template>
<script src="./index.js"></script>
