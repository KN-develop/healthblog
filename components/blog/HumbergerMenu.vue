<template>
    <div>
        <div class="humberger__menu__overlay" :class="{ active: open }" @click="onToggleMenu"></div>
        <div class="humberger__menu__wrapper" :class="{ show__humberger__menu__wrapper: open }">
            <div class="humberger__menu__logo">
                <a href="./index.html"><img src="/img/humberger/humberger-logo.png" alt=""/></a>
            </div>
            <div class="humberger__menu__about">
                <div class="humberger__menu__title sidebar__item__title">
                    <h6>About me</h6>
                </div>
                <img src="/img/humberger/humberger-about.jpg" alt="" />
                <h6>Hi every one! I,m Lena Mollein.</h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
                <div class="humberger__menu__about__social sidebar__item__follow__links">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-youtube-play"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-envelope-o"></i></a>
                </div>
            </div>
            <div class="humberger__menu__subscribe">
                <div class="humberger__menu__title sidebar__item__title">
                    <h6>Subscribe</h6>
                </div>
                <p>Subscribe to our newsletter and get our newest updates right on your inbox.</p>
                <form action="#">
                    <input type="text" class="email-input" placeholder="Your email" />
                    <label for="agree-check">
                        I agree to the terms & conditions
                        <input type="checkbox" id="agree-check" />
                        <span class="checkmark"></span>
                    </label>
                    <button type="submit" class="site-btn">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            open: false,
        };
    },
    methods: {
        onToggleMenu() {
            this.open = !this.open;
        },
    },
    mounted() {
        this.$bus.$on('toggle-menu', this.onToggleMenu);
    },
    beforeDestroy() {
        this.$bus.$off('toggle-menu', this.onToggleMenu);
    },
};
</script>
