<template>
    <div>
        <AppPopup />
        <AppPage class="page--index height-min__stretch">
            <BlogHeader />
            <nuxt keep-alive />
            <BlogFooter />
        </AppPage>
    </div>
</template>

<script>
import AppPopup from '../components/blocks/popups/AppPopup';
import AppPage from '~/components/layout/AppPage';
import AppContainer from '~/components/layout/AppContainer';

export default {
    components: {
        AppPopup,
        AppPage,
        AppContainer,
    },
};
</script>

<style lang="postcss"></style>
