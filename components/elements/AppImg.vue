<template>
    <img :src="this.source" :alt="this.alt" />
</template>

<script>
export default {
    data: () => ({
        isVisible: false,
    }),
    props: {
        src: {
            type: String,
            required: true,
        },
        srcLazy: {
            type: String,
            required: false,
        },
        alt: {
            type: String,
            required: false,
            default: '#',
        },
    },
    computed: {
        source() {
            if (this.isVisible && this.srcLazy) {
                return this.srcLazy;
            }
            return this.src;
        },
    },
    mounted() {
        this.isVisible = true;
    },
};
</script>
