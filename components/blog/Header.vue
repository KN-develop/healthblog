<template>
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-md-1 col-6 order-md-1 order-1">
                        <!--<div class="header__humberger" @click="onToggleMenu">
                            <i class="fa fa-bars humberger__open"></i>
                        </div>-->
                    </div>
                    <div class="col-lg-8 col-md-10 order-md-2 order-3">
                        <nav class="header__menu">
                            <ul>
                                <li
                                    :class="{
                                        active: item.url === $route.path,
                                        dropdown: item.sublist && item.sublist.length,
                                    }"
                                    v-for="(item, i) in menu"
                                    :key="i"
                                >
                                    <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
                                    <ul class="dropdown__menu" v-if="item.sublist && item.sublist.length">
                                        <li v-for="(item, i) in item.sublist" :key="`sublist-${i}`">
                                            <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-lg-2 col-md-1 col-6 order-md-3 order-2">
                        <!--
                        <div class="header__search">
                            <i class="fa fa-search search-switch"></i>
                        </div>
                        -->
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3">
                    <!--
                    <div class="header__btn">
                        <nuxt-link to="/signin" class="primary-btn">Подписаться</nuxt-link>
                    </div>
                    -->
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="header__logo">
                        <nuxt-link to="/" title="Кристина Иванова - сайт специалиста по здоровью">
                            <img src="/img/logo.png" alt="" />
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3">
                    <!--
                    <div class="header__social">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-youtube-play"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-envelope-o"></i></a>
                    </div>
                    -->
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            menuOpen: false,
        };
    },
    computed: {
        menu() {
            return this.$store.getters['menu/getTopMenu'] || [];
        },
    },
    methods: {
        onToggleMenu() {
            this.$bus.$emit('toggle-menu');
        },
    },
};
</script>
