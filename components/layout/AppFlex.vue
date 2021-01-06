<template>
    <component :is="tag" :class="classes">
        <slot />
    </component>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        spaceBetween: {
            type: Boolean,
            default: false,
        },
        spaceAround: {
            type: Boolean,
            default: false,
        },
        left: {
            type: Boolean,
            default: false,
        },
        center: {
            type: Boolean,
            default: false,
        },
        right: {
            type: Boolean,
            default: false,
        },
        stretch: {
            type: Boolean,
            default: false,
        },
        top: {
            type: Boolean,
            default: false,
        },
        middle: {
            type: Boolean,
            default: false,
        },
        bottom: {
            type: Boolean,
            default: false,
        },
        noLast: {
            type: Boolean,
            default: false,
        },
        row: {
            type: Boolean,
            default: false,
        },
        rowReverse: {
            type: Boolean,
            default: false,
        },
        column: {
            type: Boolean,
            default: false,
        },
        'column@xl': {
            type: Boolean,
            default: false,
        },
        'column@l': {
            type: Boolean,
            default: false,
        },
        'column@m': {
            type: Boolean,
            default: false,
        },
        'column@s': {
            type: Boolean,
            default: false,
        },
        columnReverse: {
            type: Boolean,
            default: false,
        },
        nowrap: {
            type: Boolean,
            default: false,
        },
        wrap: {
            type: Boolean,
            default: false,
        },
        wrapReverse: {
            type: Boolean,
            default: false,
        },
        wrapStretch: {
            type: Boolean,
            default: false,
        },
        wrapTop: {
            type: Boolean,
            default: false,
        },
        wrapMiddle: {
            type: Boolean,
            default: false,
        },
        wrapBottom: {
            type: Boolean,
            default: false,
        },
        wrapBetween: {
            type: Boolean,
            default: false,
        },
        wrapAround: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        availableClasses: [
            'spaceBetween',
            'spaceAround',
            'left',
            'center',
            'right',
            'stretch',
            'top',
            'middle',
            'bottom',
            'noLast',
            'row',
            'rowReverse',
            'column',
            'column\@xl',
            'column\@l',
            'column\@m',
            'column\@s',
            'columnReverse',
            'nowrap',
            'wrap',
            'wrapReverse',
            'wrapStretch',
            'wrapTop',
            'wrapMiddle',
            'wrapBottom',
            'wrapBetween',
            'wrapAround',
        ],
    }),
    computed: {
        classes: function() {
            let classes = ['flex'];

            for (let [propKey, propValue] of Object.entries(this.$props)) {
                // If the prop is a breakpoint and it has a value
                if (this.availableClasses.includes(propKey) && propValue) {
                    classes.push('flex--' + propKey.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase());
                }
            }
            return classes;
        },
    },
};
</script>

<style lang="postcss">
.flex {
    display: flex;
    &__inline {
        display: inline-flex;
    }

    &--space-between {
        justify-content: space-between;
    }
    &--space-around {
        justify-content: space-around;
    }
    &--left {
        justify-content: flex-start;
    }
    &--center {
        justify-content: center;
    }
    &--right {
        justify-content: flex-end;
    }
    &--stretch {
        align-items: stretch;
    }
    &--top {
        align-items: flex-start;
    }
    &--middle {
        align-items: center;
    }
    &--bottom {
        align-items: flex-end;
    }

    &--no-last:after {
        content: '';
        -webkit-box-flex: 1;
        flex: auto;
    }

    &--row {
        flex-direction: row;
    }
    &--row-reverse {
        flex-direction: row-reverse;
    }
    &--column {
        flex-direction: column;

        &\@xl {
            @media (--less-than-xl) {
                flex-direction: column;
            }
        }
        &\@l {
            @media (--less-than-l) {
                flex-direction: column;
            }
        }
        &\@m {
            @media (--less-than-m) {
                flex-direction: column;
            }
        }
        &\@s {
            @media (--less-than-s) {
                flex-direction: column;
            }
        }
    }
    &--column-reverse {
        flex-direction: column-reverse;
    }

    &--nowrap {
        flex-wrap: nowrap;
    }
    &--wrap {
        flex-wrap: wrap;
    }
    &--wrap-reverse {
        flex-wrap: wrap-reverse;
    }
    &--wrap-stretch {
        align-content: stretch;
    }
    &--wrap-top {
        align-content: flex-start;
    }
    &--wrap-middle {
        align-content: center;
    }
    &--wrap-bottom {
        align-content: flex-end;
    }
    &--wrap-between {
        align-content: space-between;
    }
    &--wrap-around {
        align-content: space-around;
    }
}
</style>
