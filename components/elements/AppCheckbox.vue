<template>
    <div class="app-checkbox form__field checkbox mod-account" :class="{ 'mod-error': error }">
        <input class="visually-hidden" type="checkbox" :id="id" :name="name" v-model="computedChecked" />
        <label :for="id" class="app-checkbox__label">
            <span class="app-checkbox__custom-checkbox">
                <svg
                    class="app-checkbox__custom-checked"
                    v-if="checked"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                >
                    <path d="M1,11.3l4.661,4.824L15,2.923,13.966,1.372,5.559,12.189,1.847,9.448Z"></path>
                </svg>
            </span>
            <span>
                {{ text }}
                <a v-if="linkText" :href="linkHref" target="_blank">{{ linkText }}</a>
            </span>
        </label>
    </div>
</template>
<script>
export default {
    data: () => {
        return {};
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        error: {
            type: Boolean,
            default: false,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            default: '',
        },
        linkText: {
            type: String,
            default: '',
        },
        linkHref: {
            type: String,
            default: '#',
        },
        required: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        computedChecked: {
            get() {
                return this.checked;
            },
            set(value) {
                this.$emit('input', value);
            },
        },
    },
};
</script>
<style lang="postcss">
.app-checkbox {
    input.visually-hidden {
        position: absolute !important;
        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0 !important;
        border: 0 !important;
        height: 1px !important;
        width: 1px !important;
        overflow: hidden;
    }

    &__label {
        display: flex;
        align-items: center;
    }
    &__custom-checkbox {
        position: relative;
        display: block;
        width: 30px;
        height: 30px;
        margin-right: 12px;
        border: thin solid #c3c3c3;
        cursor: pointer;
    }
    &__custom-checked {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &.mod-error {
        input {
            border-color: $color-red;
        }
    }

    &.mod-account {
        @include w-from($screen-md) {
            margin-left: 166px;
            max-width: 380px;
        }
    }
}
</style>
