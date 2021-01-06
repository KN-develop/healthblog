<template>
    <footer class="footer padding-top--xl padding-bottom--xl padding-horizontal--m">
        <app-container>
            <div class="footer__container">
                <div class="footer__container-column">
                    <div class="footer__logo">
                        <img src="#" alt="shenmgmen" />
                    </div>
                    <app-tel-widget />
                </div>
                <div class="footer__container-column">
                    <app-social-widget />
                    <app-working-time-widget />
                </div>
                <div class="footer__container-column footer__container-column--menu">
                    <app-footer-menu />
                </div>
                <div class="footer__container-column hidden@l">
                    <app-address-widget />
                </div>
            </div>
        </app-container>
    </footer>
</template>

<script>
import AppFlex from '~/components/layout/AppFlex';
import AppContainer from '~/components/layout/AppContainer';
import AppFooterMenu from '~/components/blocks/footer/AppFooterMenu';
import AppSocialWidget from '~/components/blocks/social/AppSocialWidget';
import AppWorkingTimeWidget from '~/components/blocks/working-time/AppWorkingTimeWidget';
import AppTelWidget from '~/components/blocks/contact-widgets/AppTelWidget';
import AppAddressWidget from '~/components/blocks/address-widgets/AppAddressWidget';

export default {
    components: {
        AppFlex,
        AppContainer,
        AppFooterMenu,
        AppSocialWidget,
        AppWorkingTimeWidget,
        AppTelWidget,
        AppAddressWidget,
    },
    data: () => ({}),
};
</script>

<style lang="postcss">
.footer {
    background-color: var(--global-color-green);
    color: var(--global-color-inverse);

    &__container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
        justify-items: left;

        @media (--less-than-l) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (--less-than-m) {
            grid-template-columns: 1fr 1fr;
            justify-items: left;
        }

        @media (--less-than-s) {
            grid-template-columns: 1fr;
        }
    }

    &__container-column {
        @media (--less-than-m) {
            grid-column-start: 1;
            grid-column-end: 2;
        }

        &--menu {
            @media (--less-than-m) {
                grid-column-start: 2;
                grid-column-end: 3;
                grid-row-start: -1;
                grid-row-end: 3;
            }
            @media (--less-than-s) {
                grid-column-start: unset;
                grid-column-end: unset;
                grid-row-start: unset;
                grid-row-end: unset;
            }
        }
    }

    &__logo {
        margin-bottom: 12px;
        height: 50px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}
</style>
