<template>
    <component :is="tag" class="app-progress-bar">
        <div
            class="app-progress-bar__cell"
            v-for="item in cells"
            :key="item"
            :class="{ 'app-progress-bar__cell--active': item <= rate }"
        ></div>
    </component>
</template>
<script>
export default {
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        rate: {
            type: Number,
            default: 0,
        },
        cells: {
            type: Number,
            default: 5,
        },
    },
};
</script>
<style lang="postcss">
.app-progress-bar {
    display: flex;
    align-items: stretch;
    justify-content: stretch;

    &__cell {
        box-sizing: border-box;
        height: 10px;
        background-color: #f7f7f9;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15) inset;
        flex-grow: 1;

        &--active {
            background-color: #f54f36;
        }

        & + div {
            margin-left: 6px;
        }
    }
}
</style>
