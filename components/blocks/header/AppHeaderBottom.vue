<template>
    <div class="app-header-bottom">
        <app-container class="app-header-bottom__wrapper padding-top--l padding-bottom--m padding-horizontal--m">
            <div class="app-header-bottom__logo">
                <img src="#" alt="shengmen" />
            </div>
            <app-flex class="app-header-bottom__content">
                <AppTelWidget class="--header app-header-bottom__tel" />
                <app-flex class="app-header-bottom__addresses">
                    <AppWorkingTimeWidget class="--header" />
                </app-flex>
            </app-flex>
        </app-container>
    </div>
</template>

<script>
import AppFlex from '~/components/layout/AppFlex';
import AppContainer from '~/components/layout/AppContainer';
import AppWorkingTimeWidget from '~/components/blocks/working-time/AppWorkingTimeWidget';
import AppTelWidget from '~/components/blocks/contact-widgets/AppTelWidget';

export default {
    components: {
        AppFlex,
        AppContainer,
        AppWorkingTimeWidget,
        AppTelWidget,
    },
};
</script>

<style lang="postcss">
.app-header-bottom {
    &__wrapper {
        display: grid;
        grid-template-columns: 285fr 895fr;
        grid-gap: 20px;

        @media (--less-than-m) {
            grid-template-columns: 1fr;
            justify-items: center;
        }
    }

    &__tel {
        margin-right: auto;
        margin-left: 0;
    }

    &__content {
        width: 100%;
    }
}
</style>
