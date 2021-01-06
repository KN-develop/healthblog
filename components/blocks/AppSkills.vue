<template>
    <AppPapers id="app-skills">
        <div class="app-skills">
            <h2 class="app-skills__title">Профессиональные навыки</h2>
            <div class="app-skills__legend">1 - знаю основы, 5 - уверенно владею.</div>
            <h3 class="app-skills__subtitle text--l margin-bottom--m">Технологии веб-разработки:</h3>
            <div class="app-skills__skill margin-bottom--l" v-for="item in skills">
                <p class="text--uppercase margin-bottom--s text--s">{{ item.name }}</p>
                <AppProgressBar :rate="item.rate" />
            </div>
            <h3 class="app-skills__subtitle text--l margin-top--xl margin-bottom--m">Инструменты разработки:</h3>
            <div class="app-skills__skill margin-bottom--l" v-for="item in instruments">
                <p class="text--uppercase margin-bottom--s text--s">{{ item.name }}</p>
                <AppProgressBar :rate="item.rate" />
            </div>
            <h3 class="app-skills__subtitle text--l margin-top--xl margin-bottom--m">Программирование:</h3>
            <div class="app-skills__skill margin-bottom--l" v-for="item in programming">
                <p class="text--uppercase margin-bottom--s text--s">{{ item.name }}</p>
                <AppProgressBar :rate="item.rate" />
            </div>
        </div>
    </AppPapers>
</template>
<script>
import AppPapers from '~/components/layout/AppPapers';
import AppProgressBar from '~/components/AppProgressBar';
export default {
    components: {
        AppPapers,
        AppProgressBar,
    },
    data() {
        return {
            skills: [
                {
                    name: 'html',
                    rate: 5,
                },
                {
                    name: 'CSS (CSS3, Sass/SCSS, Less, pcss, Bootstrap)',
                    rate: 5,
                },
                {
                    name: 'JavaScript (ES6+, jQuery, Vue.js)',
                    rate: 4,
                },
                {
                    name: 'CMS/CMF (Wordpress, Opencart, 1C-Bitrix)',
                    rate: 2,
                },
                {
                    name: 'Асинхронное взаимодействие с сервером',
                    rate: 4,
                },
            ],
            instruments: [
                {
                    name: 'Терминал (Bash)',
                    rate: 3,
                },
                {
                    name: 'Инструменты управления проектами (Jira, Bitrix24, Asana и тд.)',
                    rate: 3,
                },
                {
                    name: 'Системы контроля версий (Git)',
                    rate: 4,
                },
                {
                    name: 'PHP',
                    rate: 2,
                },
                {
                    name: 'Python',
                    rate: 2,
                },
            ],
            programming: [
                {
                    name: 'Алгоритмы и структуры данных',
                    rate: 3,
                },
                {
                    name: 'Понимание принципов написания и организации кода',
                    rate: 4,
                },
                {
                    name: 'ООП (GOF) и Архитектурные принципы (GRASP)',
                    rate: 3,
                },
            ],
        };
    },
};
</script>
<style lang="postcss">
.app-skills {
    &__title {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    &__legend {
        font-family: var(--global-font-family-addit);
    }
}
</style>
