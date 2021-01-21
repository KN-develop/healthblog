<template>
    <BlogSidebarItem title="Категории" class="sidebar__item__categories">
        <ul>
            <template v-for="category in getCategories">
                <li>
                    <NuxtLink :to="category.href" exact>
                        {{ category.title }} <span>{{ category.count }}</span>
                    </NuxtLink>
                </li>

                <template v-for="subitem in category.sublist">
                    <li class="p-left">
                        <NuxtLink :to="subitem.href" exact>
                            {{ subitem.title }} <span>{{ subitem.count }}</span>
                        </NuxtLink>
                    </li>
                </template>
            </template>
        </ul>
    </BlogSidebarItem>
</template>
<script>
export default {
    computed: {
        getCategories() {
            return [
                {
                    title: 'Здоровье',
                    count: 4,
                    href: '/blog/health',
                    sublist: [
                        {
                            title: 'Почки',
                            count: 3,
                            href: '/blog/health',
                        },
                        {
                            title: 'Печень',
                            count: 1,
                            href: '/blog/health',
                        },
                    ],
                },
            ];
        },
    },
};
</script>
