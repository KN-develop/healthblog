<template>
    <app-color-box class="page__part padding-horizontal--s" v-bind="$props">
        <app-container>
            <slot />
        </app-container>
    </app-color-box>
</template>

<script>
import AppColorBox from '~/components/layout/AppColorBox';
import AppContainer from '~/components/layout/AppContainer';

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
    components: {
        AppColorBox,
        AppContainer,
    },
    data: () => ({}),
};
</script>
