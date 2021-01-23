<template>
    <AppFlex center>
        <AppLogin @auth-true="onAuthTrue" />
    </AppFlex>
</template>
<script>
import AppLogin from '@/components/blocks/popups/AppLogin';
import AppFlex from '@/components/layout/AppFlex';
export default {
    components: {
        AppFlex,
        AppLogin,
    },
    methods: {
        onAuthTrue() {
            this.$router.replace(this.$route.query?.redirect || '/');
        },
    },
};
</script>
