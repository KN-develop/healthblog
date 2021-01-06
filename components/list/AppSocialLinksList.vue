<template>
    <section
        class="app-social-links-list padding-bottom--m@xl padding-top--m@xl padding-horizontal--m padding-top--l padding-bottom--l"
    >
        <p class="app-social-links-list__label text--m"><span>Следите за нами </span><span>в соц. сетях</span></p>
        <app-flex middle nowrap tag="ul" class="app-social-links-list__icons padding-left--remove">
            <li class="app-social-links-list__icon">
                <nuxt-link to="#">
                    <app-icon>
                        <app-icon-vkontakte />
                    </app-icon>
                </nuxt-link>
            </li>
        </app-flex>
    </section>
</template>

<script>
import AppIcon from '~/components/icons/AppIcon';
import AppIconVkontakte from '../icons/social/AppIconVkontakte';
import AppIconOdnoklassniki from '../icons/social/AppIconOdnoklassniki';
import AppIconFacebook from '../icons/social/AppIconFacebook';
import AppIconYoutube from '../icons/social/AppIconYoutube';
import AppFlex from '../layout/AppFlex';

export default {
    components: {
        AppFlex,
        AppIcon,
        AppIconVkontakte,
        AppIconOdnoklassniki,
        AppIconFacebook,
        AppIconYoutube,
    },
};
</script>

<style lang="postcss">
.app-social-links-list {
}
</style>
