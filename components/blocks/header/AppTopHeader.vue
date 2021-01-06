<template>
    <div class="app-top-header">
        <app-container class="app-top-header__wrapper padding--m">
            <app-hamburger class="app-top-header__menu-toggle" @click="toggleMobileMenu"></app-hamburger>
            <app-flex :tag="'ul'" class="app-top-header__list text--s hidden@m">
                <li class="app-top-header__item" v-for="(item, index) in getTopMenu" :key="index">
                    <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
                </li>
            </app-flex>
            <ul class="app-top-header__user-nav text--s">
                <li class="app-top-header__user-item" v-if="isAuthorised">
                    <nuxt-link :to="'/account'">Здравствуйте, {{ user }}</nuxt-link>
                </li>
                <template v-else>
                    <li class="app-top-header__user-item">
                        <nuxt-link :to="'/auth'">Вход</nuxt-link>
                    </li>
                    <li class="app-top-header__user-item">
                        <nuxt-link :to="'/register'">Регистрация</nuxt-link>
                    </li>
                </template>
            </ul>
        </app-container>
    </div>
</template>

<script>
import AppFlex from '~/components/layout/AppFlex';
import AppContainer from '~/components/layout/AppContainer';
import AppHamburger from '~/components/elements/AppHamburger';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            isAuthorised: false,
            user: 'Николай',
        };
    },
    components: {
        AppHamburger,
        AppFlex,
        AppContainer,
    },
    computed: {
        ...mapGetters('menu', ['getTopMenu']),
    },
    methods: {
        toggleMobileMenu() {
            this.openedMenu = !this.openedMenu;
        },
        onClickAuthButton() {
            this.$bus.$emit('app-open-popup', 'app-login');
        },
        onClickRegButton() {
            this.$bus.$emit('app-open-popup', 'app-registration');
        },
    },
};
</script>

<style lang="postcss">
.app-top-header {
    background-color: var(--global-color-green);
    color: var(--global-color-inverse);

    &__wrapper {
        display: flex;
        align-items: center;
    }

    &__menu-toggle {
        display: none;

        @media (--less-than-m) {
            display: inline-flex;
        }
    }

    &__list {
        list-style: none;
        margin: 0 20px 0 -7px;
        padding: 0;
        flex-wrap: wrap;
    }

    &__item {
        a {
            display: inline-block;
            padding: 4px 7px;
            color: inherit;
            text-decoration: none;
            transition: var(--global-transition-standard);

            &:hover,
            &:focus {
                opacity: 0.7;
            }
        }
    }

    &__user-nav {
        display: flex;
        align-self: flex-start;
        padding: 0;
        margin: 0 -7px 0 auto;
        list-style: none;
    }

    &__user-item {
        a {
            display: inline-block;
            padding: 4px 7px;
            color: inherit;
            text-decoration: none;
            transition: var(--global-transition-standard);

            &:hover,
            &:focus {
                opacity: 0.7;
            }
        }
    }
}
</style>
