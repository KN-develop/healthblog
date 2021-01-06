<template>
    <header class="app-main-header">
        <img alt="Николай Иванов" src="img/avatar-2.jpg" class="app-main-header__avatar" />
        <h1 class="app-main-header__title text--xxl">Николай Иванов</h1>
        <hr />
        <h3 class="app-main-header__text text--l">
            <vue-typed-js :strings="strings" :loop="true" :typeSpeed="60" :backSpeed="20" :cursorChar="'_'">
                <div class="text--center" style="width: 100%;">
                    <span class="text--center block">Веб разработчик.</span>&nbsp;<b class="typing"></b>
                </div>
            </vue-typed-js>
            Живу и работаю в Архангельске. Создаю сайты как с нуля, так и на основе CMS (Opencart, Bitrix, Wordpress и
            др.). Разрабатываю интерактивные интерфейсы (формы, динамические каталоги, видео-трансляции, авторизацию,
            анимации и т.д.).<br />
            В своей работе использую разнообразные инструменты (в зависимости от задачи и проекта). Предпочитаю писать
            код на чистом JS (по необходимости использую JQuery). Мой основной фреймворк на текущий момент это Vue.js и
            его экосистема (Vuex, Vue Router, Nuxt.js, Nuxt-Axios, Nuxt-Auth) Не вижу ничего плохого в том что бы под
            конкретный проект изучить другой фреймворк или библиотеку, например React.js или Angular.
        </h3>
        <hr />
        <!--<p>
            Живу и работаю в Архангельске. Создаю сайты как с нуля, так и на основе CMS (Opencart, Bitrix, Wordpress и
            др.). Разрабатываю интерактивные интерфейсы (JS, jQuery, Vue.js, Nuxt.js, etc..). Читаю документацию на
            английском языке. C удовольствием работаю в команде.
        </p>
        <p>
            Живу и работаю в Архангельске. Создаю сайты как с нуля, так и на основе CMS (Opencart, Bitrix, Wordpress и
            др.). Разрабатываю интерактивные интерфейсы (JS, jQuery, Vue.js, Nuxt.js, etc..). Читаю документацию на
            английском языке. C удовольствием работаю в команде.
        </p>
        <p>
            Живу и работаю в Архангельске. Создаю сайты как с нуля, так и на основе CMS (Opencart, Bitrix, Wordpress и
            др.). Разрабатываю интерактивные интерфейсы (JS, jQuery, Vue.js, Nuxt.js, etc..). Читаю документацию на
            английском языке. C удовольствием работаю в команде.
        </p>
        <p>
            Живу и работаю в Архангельске. Создаю сайты как с нуля, так и на основе CMS (Opencart, Bitrix, Wordpress и
            др.). Разрабатываю интерактивные интерфейсы (JS, jQuery, Vue.js, Nuxt.js, etc..). Читаю документацию на
            английском языке. C удовольствием работаю в команде.
        </p>
        <p>
            Живу и работаю в Архангельске. Создаю сайты как с нуля, так и на основе CMS (Opencart, Bitrix, Wordpress и
            др.). Разрабатываю интерактивные интерфейсы (JS, jQuery, Vue.js, Nuxt.js, etc..). Читаю документацию на
            английском языке. C удовольствием работаю в команде.
        </p>
        <p>
            Живу и работаю в Архангельске. Создаю сайты как с нуля, так и на основе CMS (Opencart, Bitrix, Wordpress и
            др.). Разрабатываю интерактивные интерфейсы (JS, jQuery, Vue.js, Nuxt.js, etc..). Читаю документацию на
            английском языке. C удовольствием работаю в команде.
        </p>
        <p>
            Живу и работаю в Архангельске. Создаю сайты как с нуля, так и на основе CMS (Opencart, Bitrix, Wordpress и
            др.). Разрабатываю интерактивные интерфейсы (JS, jQuery, Vue.js, Nuxt.js, etc..). Читаю документацию на
            английском языке. C удовольствием работаю в команде.
        </p>
        <p>
            Живу и работаю в Архангельске. Создаю сайты как с нуля, так и на основе CMS (Opencart, Bitrix, Wordpress и
            др.). Разрабатываю интерактивные интерфейсы (JS, jQuery, Vue.js, Nuxt.js, etc..). Читаю документацию на
            английском языке. C удовольствием работаю в команде.
        </p>
        <p>
            Живу и работаю в Архангельске. Создаю сайты как с нуля, так и на основе CMS (Opencart, Bitrix, Wordpress и
            др.). Разрабатываю интерактивные интерфейсы (JS, jQuery, Vue.js, Nuxt.js, etc..). Читаю документацию на
            английском языке. C удовольствием работаю в команде.
        </p>
        <p>
            Живу и работаю в Архангельске. Создаю сайты как с нуля, так и на основе CMS (Opencart, Bitrix, Wordpress и
            др.). Разрабатываю интерактивные интерфейсы (JS, jQuery, Vue.js, Nuxt.js, etc..). Читаю документацию на
            английском языке. C удовольствием работаю в команде.
        </p>
        <p>
            Живу и работаю в Архангельске. Создаю сайты как с нуля, так и на основе CMS (Opencart, Bitrix, Wordpress и
            др.). Разрабатываю интерактивные интерфейсы (JS, jQuery, Vue.js, Nuxt.js, etc..). Читаю документацию на
            английском языке. C удовольствием работаю в команде.
        </p>
        <p>
            Живу и работаю в Архангельске. Создаю сайты как с нуля, так и на основе CMS (Opencart, Bitrix, Wordpress и
            др.). Разрабатываю интерактивные интерфейсы (JS, jQuery, Vue.js, Nuxt.js, etc..). Читаю документацию на
            английском языке. C удовольствием работаю в команде.
        </p>-->
    </header>
</template>
<script>
import { VueTypedJs } from 'vue-typed-js';

export default {
    components: {
        VueTypedJs,
    },
    data() {
        return {
            strings: ['оплата за результат', 'делаю с душой', 'гарантия качества'],
        };
    },
};
</script>
<style lang="postcss">
.app-main-header {
    text-align: center;

    &__avatar {
        display: inline-block;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
    }
    &__title {
        text-transform: uppercase;
    }
    &__text {
        font-weight: normal;
        font-family: var(--global-font-family-addit);

        .block {
            @media (--less-than-s) {
                display: block;
            }
        }

        b {
            color: var(--global-color-error);
            text-transform: uppercase;
        }

        .typed-cursor {
            color: var(--global-color-error);
        }
    }
}
</style>
