<template>
    <component :is="tag" class="app-footer-menu">
        <ul class="app-footer-menu__list" v-for="(menu, index) in getFooterMenu" :key="index">
            <li class="app-footer-menu__item" v-for="(item, index) in menu" :key="index">
                <a class="app-footer-menu__link" :href="item.url">{{ item.title }}</a>
            </li>
        </ul>
    </component>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        tag: {
            type: String,
            default: 'nav',
        },
    },
    computed: {
        ...mapGetters('menu', ['getFooterMenu']),
    },
};
</script>

<style lang="postcss">
.app-footer-menu {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &__list {
        list-style: none;
        margin: -3px 0;
        padding: 0 5px;
        flex-basis: 50%;
    }

    &__link {
        display: inline-block;
        padding: 3px 0;
        width: 100%;
        text-decoration: none;
        border-bottom: thin solid transparent;
        color: var(--global-color-inverse);
        transition-property: border-color;
        transition: var(--global-transition-standard);

        &:hover,
        &:focus {
            border-bottom-color: var(--global-color-inverse);
        }
    }
}
</style>
