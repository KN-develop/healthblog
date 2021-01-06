<template>
    <AppPapers clas="app-portfolio" id="app-portfolio">
        <div class="app-portfolio__wrapper">
            <h2 class="app-portfolio__title margin-bottom--l">Портфолио</h2>
            <p class="app-portfolio__nda margin-bottom--xl text--center text--s">
                Я нормально отношусь к соглашению о неразглашении (NDA), поэтому работы на которые такое соглашение было
                подписано в портфолио не представлены, например я работал на разработке отдельных частей таких сайтов
                как ru.benetton.com, vans.ru, gut-shoes.ru, crocs.ru и др. Могу лишь сказать что именно на этих проектах
                я получил хороший опыт разработки фронтенда для интернет-магазинов и в частности таких компонентов как
                каталог, фильтр товаров, карточка товара, корзина, оформление заказа.
            </p>
            <section v-swiper:standardSlider="swiperOptions">
                <div class="swiper-wrapper">
                    <article
                        class="app-portfolio__item swiper-slide margin-bottom--xl"
                        v-for="(item, index) in portfolio"
                        :key="index"
                    >
                        <h3
                            class="app-portfolio__item-title margin-top--remove margin-bottom--m margin-horizontal--xl padding-vertical--s text--l text--center"
                            v-html="item.name"
                        ></h3>
                        <div class="app-portfolio__item-grid">
                            <div class="app-portfolio__poster margin-bottom--m">
                                <img :src="item.poster" :alt="item.name" />
                            </div>
                            <div class="app-portfolio__inner-grid">
                                <div v-for="(field, index) in item.fieldsOne" :key="index">
                                    <h4 class="text--m margin-bottom--s margin-top--remove">{{ field.name }}</h4>
                                    <p v-if="field.text">{{ field.text }}</p>
                                    <ul class="fa-ul" v-if="field.listCheck">
                                        <li v-for="(item, index) in field.listCheck" :key="index">
                                            <i class="fa-li fa fa-check"></i>{{ item }}
                                        </li>
                                    </ul>
                                    <ul class="fa-ul" v-if="field.list">
                                        <li v-for="(item, index) in field.list" :key="index">{{ item }}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="app-portfolio__inner-grid">
                                <div v-for="(field, index) in item.fieldsTwo" :key="index">
                                    <h4 class="text--m margin-bottom--s margin-top--remove">{{ field.name }}</h4>
                                    <p v-if="field.text">{{ field.text }}</p>
                                    <ul class="fa-ul" v-if="field.listCheck">
                                        <li v-for="(item, index) in field.listCheck" :key="index">
                                            <i class="fa-li fa fa-check"></i>{{ item }}
                                        </li>
                                    </ul>
                                    <ul class="fa-ul" v-if="field.list">
                                        <li v-for="(item, index) in field.list" :key="index">{{ item }}</li>
                                    </ul>
                                </div>
                                <a :href="item.slug" target="_blank" v-if="item.slug">ссылка на сайт</a>
                                <br />
                                <a :href="item.git" target="_blank" v-if="item.git">ссылка на исходники</a>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    </AppPapers>
</template>
<script>
import AppPapers from '~/components/layout/AppPapers';

export default {
    components: {
        AppPapers,
    },
    data() {
        return {
            swiperOptions: {
                roundLengths: true,
                slidesPerView: 1,
                speed: 500,
                loop: true,
                effect: 'slide',
                touchMoveStopPropagation: false,
                autoplay: {
                    delay: 5000,
                },
                breakpoints: {
                    480: {
                        touchMoveStopPropagation: true,
                    },
                },
            },
            portfolio: [
                {
                    name: 'Landing Page для курса лекций "How&nbsp;to&nbsp;hair"',
                    poster: '/img/portfolio/portfolio-1.jpg',
                    slug: 'https://klavacurly.ru/',
                    fieldsOne: [
                        {
                            name: 'Цель:',
                            text:
                                'С верстать страницу по макету, адаптивно резиново. Сайт должен корректо отображаться на всех ширинах и работать во всех популярных браузерах включая MS Edge.',
                        },
                        {
                            name: 'Что делал:',
                            listCheck: [
                                'Кроссбраузерная адаптивная верстка на 4 разрешения, с учетом того что сайт должен отображаться корректно в том числе на промежуточных ширинах',
                                'Скрипты открытия/закрытия выпадающих списков и меню',
                                'Скрипт всплывающих окон, позволяющий добавлять в последствии неограниченное их количество',
                                'Разработка формы отправки заявок с валидацией на стороне клиента',
                            ],
                        },
                    ],
                    fieldsTwo: [
                        {
                            name: 'Использованные технологии:',
                            listCheck: [' CSS/HTML', ' JavaScript', ' JQuery', ' Vue.js'],
                        },
                        {
                            name: 'Результаты и достижения:',
                            text:
                                'Полностью протестированная и готовая к внедрению страница. Корректно отрабатывающая форма офомления заявок с сообщениями об ошибках. Работа делалась удаленно в постоянном диалоге с дизайнером',
                        },
                    ],
                },
                {
                    name: 'Макеты для системы бронирования трансферов',
                    poster: '/img/portfolio/portfolio-3.jpeg',
                    slug: 'https://collin-ivo.github.io/portfolio/meetme24/home-page.html',
                    fieldsOne: [
                        {
                            name: 'Цель:',
                            text:
                                'Сверстать страницы и большое количество UI-компонентов которые бэкенд-программист будет использовать для разработки сайта. Все компоненты должны быть адаптивны и стилизованы по методолгии БЕМ (Блок Элемент Модификатор)',
                        },
                        {
                            name: 'Что делал:',
                            listCheck: [
                                'Кроссбраузерная адаптивная верстка на 3 разрешения',
                                'Скрипты открытия/закрытия меню, попапы с анимацией',
                                'Вся разметка выполнена по БЭМ',
                            ],
                        },
                    ],
                    fieldsTwo: [
                        {
                            name: 'Использованные технологии:',
                            listCheck: [' CSS/HTML', ' JavaScript', ' JQuery'],
                        },
                        {
                            name: 'Результаты и достижения:',
                            text:
                                'Это была моя первая объемная работа по верстке с непростой логикой переключения меню и большим количеством мелких элементов.',
                        },
                    ],
                },
                {
                    name: 'Учебный макет из трех страниц (2018 год)',
                    poster: '/img/portfolio/portfolio-2.jpeg',
                    slug: 'https://collin-ivo.github.io/portfolio/mishka/index.html',
                    fieldsOne: [
                        {
                            name: 'Цель:',
                            text:
                                'С верстать адаптивно страницу по макету. Сайт должен корректо отображаться на всех ширинах и работать во всех популярных браузерах включая MS Edge.',
                        },
                        {
                            name: 'Что делал:',
                            listCheck: [
                                'Кроссбраузерная адаптивная верстка на 3 разрешения',
                                'Скрипт открытия/закрытия меню',
                                'Вся разметка выполнена по БЭМ',
                            ],
                        },
                    ],
                    fieldsTwo: [
                        {
                            name: 'Использованные технологии:',
                            listCheck: [' CSS/HTML', ' JavaScript', ' JQuery'],
                        },
                        {
                            name: 'Результаты и достижения:',
                            text: 'Моя первая страница сверстанная по всем индустриальным стандартам',
                        },
                    ],
                },
                {
                    name: 'Демонстрационная работа на Vue.js',
                    poster: '/img/portfolio/portfolio-4.png',
                    slug: 'http://9062800302.myjino.ru/',
                    git: 'https://github.com/Collin-ivo/finance-shoots-front',
                    fieldsOne: [
                        {
                            name: 'Цель:',
                            text:
                                'Сделать демонстрционный кусок приложения, выводящий данные полученные с сервера и позволяющий создавать новые карточки.',
                        },
                        {
                            name: 'Что делал:',
                            listCheck: [
                                'Кроссбраузерная адаптивная верстка',
                                'Вся разметка выполнена по БЭМ',
                                'Вызовы методов api сервера',
                                'Отправка данных на сервер',
                                'Предпросмотр создаваемой карточки',
                            ],
                        },
                    ],
                    fieldsTwo: [
                        {
                            name: 'Использованные технологии:',
                            listCheck: [
                                ' CSS/HTML',
                                ' JavaScript',
                                ' Vue.js',
                                ' Vuex',
                                ' Vue Router',
                                ' Vue Cli 3',
                                ' Elements.js',
                            ],
                        },
                        {
                            name: 'Результаты и достижения:',
                            text: 'Все красиво и шустро работает',
                        },
                    ],
                },
            ],
        };
    },
    /*methods: {
        reloadSlider() {
            this.standardSlider.reload();
        },
    },
    mounted() {
        window.addEventListener('resize', this.reloadSlider);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.reloadSlider);
    },*/
};
</script>
<style lang="postcss">
.app-portfolio {
    &__title {
        text-align: center;
        text-transform: uppercase;
        margin-top: 0;
        letter-spacing: 0.1em;
    }

    &__nda {
        font-family: var(--global-font-family-addit);
    }

    &__item {
        min-height: 100%;
        background-color: white;
    }

    &__item-title {
        border-top: thin dashed var(--global-color);
        border-bottom: thin dashed var(--global-color);
        font-family: var(--global-font-family-addit);
        font-weight: normal;
    }

    &__item-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;

        @media (--less-than-xl) {
            display: block;
        }

        @media (--less-than-l) {
            display: grid;
        }

        @media (--less-than-m) {
            display: block;
        }

        p,
        ul {
            font-family: var(--global-font-family-addit);
        }
    }

    &__inner-grid {
        display: block;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;

        @media (--less-than-xl) {
            display: grid;
        }

        @media (--less-than-l) {
            display: block;
        }

        @media (--less-than-m) {
            display: grid;
        }

        @media (--less-than-s) {
            display: block;
        }
    }

    &__poster {
        overflow: hidden;
        max-height: 500px;

        img {
            display: block;
            width: 100%;
        }

        @media (--less-than-xl) {
            max-height: 300px;
        }

        @media (--less-than-l) {
            max-height: 500px;
        }

        @media (--less-than-m) {
            max-height: 300px;
        }
    }
}
</style>
