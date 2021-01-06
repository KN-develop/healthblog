<template>
    <div class="categories__list__post__item">
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <div class="categories__post__item__pic set-bg" :style="`background-image: url(${bgImage})`">
                    <div class="post__meta" v-if="getDate">
                        <h4>{{ getDate.day }}</h4>
                        <span>{{ getDate.month }}</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="categories__post__item__text">
                    <ul class="post__label--large" v-if="categories.length > 1">
                        <li v-for="item in categories">{{ item.title }}</li>
                    </ul>
                    <span class="post__label" v-else-if="categories.length === 1">{{ categories[0].title }}</span>
                    <h3>
                        <nuxt-link :to="href">{{ title }}</nuxt-link>
                    </h3>
                    <ul class="post__widget">
                        <li>
                            автор: <span>{{ author }}</span>
                        </li>
                        <li>на чтение {{ readTime }}</li>
                    </ul>
                    <p>{{ text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>
