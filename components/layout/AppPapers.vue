<template>
    <div class="app-papers">
        <component :is="tag" class="app-papers__content">
            <slot />
        </component>
    </div>
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
.app-papers {
    position: relative;
    margin: 45px 15px;
    z-index: 1;
    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: thin solid rgba(0, 0, 0, 0.15);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        background-color: var(--global-color-inverse);
        z-index: 0;
    }

    &::before {
        left: -8px;
        transform: rotate(1.5deg);
    }

    &::after {
        top: -6px;
        left: 6px;
        transform: rotate(358.5deg);
    }

    &__content {
        position: relative;
        padding: 30px;
        left: 8px;
        top: 10px;
        border: thin solid rgba(0, 0, 0, 0.15);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        background-color: var(--global-color-inverse);
        z-index: 2;

        @media (--less-than-m) {
            padding: 15px;
        }
    }
}
</style>
