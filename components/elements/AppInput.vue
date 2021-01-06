<template>
    <component :is="tag" class="app-input">
        <slot />
    </component>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: 'input',
        },
        type: {
            type: String,
            default: 'text',
        },
    },
};
</script>

<style lang="postcss">
.app-input {
    padding: 12px;
    border-radius: 2px;
    border: thin solid transparent;
}
</style>
