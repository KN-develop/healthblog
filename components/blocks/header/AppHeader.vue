<template>
    <div class="app-header">
        <app-top-header />
        <app-header-bottom />
    </div>
</template>

<script>
import AppButton from '../../elements/AppButton';
import AppFlex from '../../layout/AppFlex';
import AppHamburger from '../../elements/AppHamburger';
import AppTopHeader from './AppTopHeader';
import AppHeaderBottom from './AppHeaderBottom';

import { mapGetters } from 'vuex';

export default {
    components: {
        AppButton,
        AppFlex,
        AppHamburger,
        AppTopHeader,
        AppHeaderBottom,
    },
    data() {
        return {
            openedMenu: false,
        };
    },
    computed: {},
};
</script>
