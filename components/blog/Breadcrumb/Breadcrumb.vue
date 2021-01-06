<template>
    <div class="breadcrumb__text">
        <h2>
            <span v-if="list.length">{{ list[list.length - 1].title }}</span>
        </h2>
        <div class="breadcrumb__option">
            <NuxtLink to="/">Главная</NuxtLink>
            <template v-for="(item, index) in list">
                <NuxtLink :to="item.href" v-if="index < list.length - 1">{{ item.title }}</NuxtLink>
                <span v-else>{{ item.title }}</span>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => [
                {
                    title: 'Блог',
                    href: '/blog',
                },
            ],
        },
    },
};
</script>
