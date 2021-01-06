<template>
    <div
        class="app-text-input text--m"
        :class="{ 'app-text-input--focus': focus, 'app-text-input--with-error': error }"
    >
        <label :for="id" class="app-text-input__label" :class="{ 'app-text-input__label--top': withText || focus }">
            {{ label }}
        </label>
        <div class="app-text-input__container">
            <input
                :type="type"
                :id="id"
                :name="name"
                :placeholder="placeholder"
                :disabled="disabled"
                v-model="currentValue"
                @focus="onFocus"
                @blur="onBlur"
                @input="onInput"
                class="text--m"
            />
        </div>
        <div class="app-text-input__info text--xs">
            <transition name="input-error">
                <span class="app-text-input__error" v-if="error">{{ computedErrorMessage }}</span>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text',
        },
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
        required: {
            type: Boolean,
            default: false,
        },
        errorMessage: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            currentValue: this.value,
            error: false,
            focus: false,
            withText: !!this.value,
            errorValidate: '',
        };
    },
    computed: {
        computedErrorMessage() {
            return this.errorValidate ? this.errorValidate : this.errorMessage;
        },
    },
    methods: {
        onInput() {
            this.$emit('input', this.currentValue);
        },
        onFocus() {
            this.focus = true;
            this.error = false;
            this.errorValidate = '';
        },
        checkError() {
            try {
                const value = this.currentValue.replace(/\s+/g, '');

                if (!this.currentValue || !this.currentValue.length) {
                    this.error = this.required;
                    this.withText = false;
                } else {
                    this.withText = true;
                    if (this.type === 'email') {
                        this.error = !/.+@.+/.test(value);
                        if (this.error) this.errorValidate = 'E-mail заполнен не верно';
                    }
                }
                this.focus = false;
            } catch (e) {
                this.focus = false;
                this.error = true;
            }
        },
        onBlur() {
            // this.checkError()
        },
        /**
         * Обновляет компонент
         */
        updateData() {
            this.error = false;
            this.onBlur();
        },
        hasErrors() {
            this.error = false;
            this.checkError();

            return this.error;
        },
    },
};
</script>
<style lang="postcss">
.app-text-input {
    position: relative;
    margin-top: 20px;

    input,
    textarea {
        box-sizing: border-box;
        width: 100%;
        padding: 8px 0;
        background: white;
        transition: box-shadow var(--global-transition-hover-off);
        box-shadow: none;
        border: none;
        border-bottom: thin solid var(--global-color-muted);
        outline: none;

        &:hover,
        &:focus {
            &::after {
                transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
                transform: translateX(-50%) scaleX(1);
            }
        }

        &:disabled {
            background: var(--global-color-muted);
        }
    }

    textarea::placeholder,
    input::placeholder {
        position: absolute;
        top: 15px;
        left: 16px;
        color: var(--global-color-muted);
        z-index: 2;
    }

    &__label {
        position: absolute;
        top: 6px;
        left: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
        color: var(--global-color-muted);
        transform-origin: left;
        transition-property: transform;
        transition-duration: 200ms;
        z-index: 2;
        pointer-events: none;

        &--top {
            transition-duration: 200ms;
            max-width: 133%;
            transform: translateY(-18px) scale(0.75);
        }
    }

    &__error {
        color: var(--global-color-error);
    }

    &__container {
        position: relative;
        margin-bottom: 8px;

        &::after {
            position: absolute;
            content: '';
            bottom: -1px;
            left: 50%;
            height: 2px;
            background-color: var(--global-color-accent);
            transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
            width: 100%;
            transform: translateX(-50%) scaleX(0);
            z-index: 2;
        }
    }

    &__info {
        min-height: 14px;
        line-height: 14px;
    }

    &__button {
        width: 100%;
        height: 48px;
        margin-top: 2px;
        border: 2px solid black;
        border-radius: 2px;
        text-transform: uppercase;
        font-weight: bold;
        box-sizing: border-box;
        background: white;
        transition-property: border, background-color, color;
        transition-duration: $transition-hover-off;

        /*@media w-from($screen-md) {
            position: absolute;
            top: -2px;
            right: 0;
            max-width: 150px;
        }

        @include w-from($screen-lg) {
            max-width: 180px;

            &:hover {
                background: $color-table;
                transition-duration: $transition-hover-on;
            }
        }*/

        &:disabled {
            border: none;
            background: $color-border-2;
            color: white;
            transition-duration: $transition-hover-on;
        }
    }

    &--focus {
        .app-text-input__container {
            &::after {
                transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
                transform: translateX(-50%) scaleX(1);
            }
        }
        .app-text-input__label {
            color: var(--global-color-accent);
        }
    }

    &--with-error {
        .app-text-input__container {
            &::after {
                background-color: var(--global-color-error);
                transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
                transform: translateX(-50%) scaleX(1);
            }
        }

        .app-text-input__label {
            color: var(--global-color-error);
        }
        input {
            color: var(--global-color-error);
            caret-color: var(--global-color-error);
        }
    }
}
</style>
