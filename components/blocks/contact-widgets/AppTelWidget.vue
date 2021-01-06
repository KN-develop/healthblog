<template>
    <component :is="tag" class="app-tel-widget">
        <a class="app-tel-widget__tel text--l" href="tel:+79062800302">+7(906)450-50-08</a>
        <button class="app-tel-widget__button text--m" type="button">заказать обратный звонок</button>
    </component>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        mod: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="postcss">
.app-tel-widget {
    &__tel {
        text-decoration: none;
        color: var(--global-color-inverse);
        font-weight: bold;
        letter-spacing: 0.1em;
        transition: var(--global-transition-standard);

        &:hover,
        &:focus {
            opacity: 0.7;
        }
    }

    &__button {
        display: block;
        padding: 0;
        color: var(--global-color-inverse);
        border: none;
        background: transparent;
        text-decoration: none;
        box-shadow: none;
        border-bottom: thin dashed var(--global-color-inverse);
        cursor: pointer;
        transition: var(--global-transition-standard);

        &:hover,
        &:focus {
            opacity: 0.7;
        }
    }

    &.--header {
        .app-tel-widget__tel {
            color: var(--global-color-green);
        }
        .app-tel-widget__button {
            color: var(--global-color-muted);
            border-bottom-color: var(--global-color);

            &:hover,
            &:focus {
                opacity: 1;
                color: var(--global-color-sky);
                border-bottom-color: var(--global-color-sky);
            }
        }
    }
}
</style>
