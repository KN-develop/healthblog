<template>
    <section class="payment-list padding-left--m padding-top--xl padding-bottom--l">
        <p class="margin-bottom--l">Оплачивайте любым удобным способом</p>
        <app-flex space-between no-last middle wrap tag="ul" class="payment-list__icons padding-left--remove">
            <li class="margin-right--m margin-bottom--m">
                <nuxt-link to="#">
                    <app-icon grayscale>
                        <app-icon-visa />
                    </app-icon>
                </nuxt-link>
            </li>
        </app-flex>
    </section>
</template>

<script>
import AppFlex from '~/components/layout/AppFlex';
import AppIcon from '~/components/icons/AppIcon';
import AppIconVisa from '~/components/icons/payments/AppIconVisa';
import AppIconMastercard from '~/components/icons/payments/AppIconMastercard';
import AppIconMir from '~/components/icons/payments/AppIconMir';
import AppIconPaypal from '~/components/icons/payments/AppIconPaypal';
import AppIconYandexMoney from '~/components/icons/payments/AppIconYandexMoney';
import AppIconAlfaClick from '~/components/icons/payments/AppIconAlfaClick';
import AppIconMts from '~/components/icons/payments/AppIconMts';
import AppIconBeeline from '~/components/icons/payments/AppIconBeeline';
import AppIconTele2 from '~/components/icons/payments/AppIconTele2';
import AppIconMegafon from '~/components/icons/payments/AppIconMegafon';
import AppIconSberbank from '~/components/icons/payments/AppIconSberbank';
import AppIconEuroset from '~/components/icons/payments/AppIconEuroset';
import AppIconQiwi from '~/components/icons/payments/AppIconQiwi';
import AppIconSvyaznoy from '~/components/icons/payments/AppIconSvyaznoy';
import AppIconWebmoney from '~/components/icons/payments/AppIconWebmoney';
import AppIconPrivat24 from '../icons/payments/AppIconPrivat24';

export default {
    components: {
        AppFlex,
        AppIconMastercard,
        AppIconVisa,
        AppIconMir,
        AppIconPaypal,
        AppIcon,
        AppIconYandexMoney,
        AppIconAlfaClick,
        AppIconMts,
        AppIconBeeline,
        AppIconTele2,
        AppIconMegafon,
        AppIconSberbank,
        AppIconEuroset,
        AppIconQiwi,
        AppIconSvyaznoy,
        AppIconWebmoney,
        AppIconPrivat24,
    },
    data: () => ({}),
};
</script>

<style lang="postcss">
.payment-list {
    &__icons {
        list-style: none;
        .icon {
            display: block;
            height: var(--global-indent-l);
        }
    }
}
</style>
