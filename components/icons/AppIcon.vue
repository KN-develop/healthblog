<template>
    <svg
        v-if="hasSlot"
        v-show="viewBox"
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        :class="classObject"
        :width="width"
        :height="height"
        :viewBox="viewBox"
        :aria-labelledby="id"
    >
        <g :fill="color">
            <slot />
        </g>
    </svg>
</template>

<script>
export default {
    props: {
        width: {
            type: [Number, String],
            required: false,
        },
        height: {
            type: [Number, String],
            required: false,
        },
        color: {
            type: String,
            default: 'currentColor',
        },
        grayscale: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        id: null,
        viewBox: null,
    }),
    computed: {
        hasSlot() {
            return !!this.$slots.default;
        },
        classObject: function() {
            const classObject = {
                grayscale: this.grayscale,
            };
            classObject['icon-' + this.id] = true;
            return classObject;
        },
    },
    mounted() {
        const child = this.$slots.default[0].child;
        if (child) {
            this.viewBox = child.viewBox || null;
            this.id = child.id || null;
        }
    },
};
</script>

<style lang="postcss">
.icon {
    display: inline-block;
    &.grayscale {
        filter: grayscale(95%) contrast(70%);
        transition: 0.5s;
        &:hover {
            filter: grayscale(0%) contrast(100%);
        }
    }
}
</style>
