<template>
    <button class="app-hamburger" type="button" @click="onClick">
        <span></span>
        <span></span>
        <span></span>
    </button>
</template>

<script>
export default {
    methods: {
        onClick() {
            this.$emit('click');
        },
    },
};
</script>

<style lang="postcss">
.app-hamburger {
    position: relative;
    display: inline-flex;
    width: 3rem;
    height: 2.5rem;
    padding: 0;
    align-items: stretch;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
    border: none;
    cursor: pointer;
    > span {
        display: block;
        height: 2px;
        background-color: var(--global-color-inverse);
    }
    &::after {
        position: absolute;
        content: '';
        display: block;
        left: 50%;
        top: 50%;
        width: 4rem;
        height: 3.5rem;
        transform: translate(-50%, -50%);
    }
}
</style>
