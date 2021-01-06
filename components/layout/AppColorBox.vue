<template>
    <div :class="classObject">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        default: {
            type: Boolean,
            default: false,
        },
        primary: {
            type: Boolean,
            default: false,
        },
        secondary: {
            type: Boolean,
            default: false,
        },
        muted: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({}),
    computed: {
        classObject: function() {
            const classObject = {};
            const self = this;
            Object.keys(this._props).forEach(function(key) {
                classObject['background--' + key] = self[key];
            });
            return classObject;
        },
    },
};
</script>
