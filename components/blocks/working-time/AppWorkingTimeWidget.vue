<template>
    <component :is="tag" class="app-working-time-widget">
        <p class="app-working-time-widget__title">Время работы:</p>
        <p class="app-working-time-widget__time">пн-пт 11:00-20:00, сб 11:00-18:00</p>
    </component>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: 'div',
        },
    },
};
</script>

<style lang="postcss">
.app-working-time-widget {
    &.--header {
        .app-working-time-widget__title {
            opacity: 0.7;
            margin-top: 0;
        }
    }
}
</style>
