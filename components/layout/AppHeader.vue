<template>
    <header class="header">
        <app-header />
    </header>
</template>

<script>
import AppContainer from '~/components/layout/AppContainer';
import AppHeader from '~/components/blocks/header/AppHeader';

export default {
    components: {
        AppContainer,
        AppHeader,
    },
    data: () => ({}),
};
</script>

<style lang="postcss">
.header {
}
</style>
