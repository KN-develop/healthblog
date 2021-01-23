<template>
    <div>
        <AppPopup />
        <AppPage>
            <section class="admin">
                <nav class="admin-nav" v-if="$store.getters['auth/getAuth']">
                    <ul class="admin-nav__list">
                        <li class="admin-nav__item">
                            <NuxtLink to="/admin/posts">Статьи</NuxtLink>
                        </li>
                    </ul>
                </nav>
                <Nuxt keep-alive />
            </section>
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

<style lang="postcss">
.admin {
    display: grid;
    grid-template-columns: 1fr 11fr;
}
</style>
