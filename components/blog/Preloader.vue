<template>
    <transition name="fade">
        <div v-show="show" style="background-color: white;position: fixed;top: 0;left: 0;width: 100%;height: 100%;">
            <div class="loader"></div>
        </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            show: true,
        };
    },
    methods: {
        fade() {
            this.show = false;
        },
    },
    mounted() {
        setTimeout(this.fade, 1000);
    },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
</style>
