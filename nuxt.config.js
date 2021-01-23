import merge from 'webpack-merge';
import envConfig from './env/nuxt.config';
import fs from 'fs';
import path from 'path';

export default merge(
    {
        mode: 'universal',

        globalName: 'app',

        server: {
            https: {
                key: fs.readFileSync(path.resolve(__dirname, 'ssl/private.key')),
                cert: fs.readFileSync(path.resolve(__dirname, 'ssl/certificate.crt')),
            },
        },

        globals: {
            id: globalName => `${globalName}`,
        },
        generate: {
            routes: ['/'],
        },

        router: {
            middleware: 'preload',
        },

        /*
         * Хедеры страницы.
         */
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            title: 'Иванова Кристина - врач, специалист по традиционной китайской медицине',
            meta: [
                {
                    charset: 'utf-8',
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Сайт специалиста по здоровью',
                },
                {
                    hid: 'keyword',
                    name: 'Сайт специалиста по здоровью',
                    content: 'здоровье, бады, массаж',
                },
                {
                    //hid: 'og:locale',
                    name: 'og:locale',
                    content: 'ru_RU',
                },
                {
                    //hid: 'og:url',
                    name: 'og:url',
                    content: 'http://kristinaivanova.ru/',
                },
                {
                    //hid: 'og:title',
                    name: 'og:title',
                    content: 'Иванова Кристина - врач, специалист по традиционной китайской медицине',
                },
                {
                    //hid: 'og:description',
                    name: 'og:description',
                    content: 'Сайт специалиста по здоровью',
                },
                {
                    //hid: 'og:image',
                    name: 'og:image',
                    content: 'http://kristinaivanova.ru/img/avatar.jpg',
                },
                {
                    //hid: 'og:image:width',
                    name: 'og:image:width',
                    content: '630',
                },
                {
                    //hid: 'og:image:height',
                    name: 'og:image:height',
                    content: '630',
                },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
                {
                    rel: 'stylesheet',
                    href:
                        'https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800,900&display=swap&subset=latin,cyrillic',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=latin,cyrillic',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Cuprum:700|PT+Sans:400,700&subset=latin,cyrillic',
                },
                {
                    rel: 'stylesheet',
                    href: '/styles/bootstrap.min.css',
                },
                {
                    rel: 'stylesheet',
                    href: '/styles/elegant-icons.css',
                },
                {
                    rel: 'stylesheet',
                    href: '/styles/font-awesome.min.css',
                },
                {
                    rel: 'stylesheet',
                    href: '/styles/blog-template.css',
                },
            ],
        },

        /*
         * Цвет прогресс-бара.
         */
        loading: { color: '#f54f36' },

        /*
         * Глобальный CSS
         */
        css: ['@/assets/pcss/index.pcss', 'swiper/dist/css/swiper.css'],

        /*
         * Плагины, загружаемые перед монтированием приложения.
         */
        plugins: [
            '~/plugins/scroll-lock.client.js',
            { src: '~/plugins/vue-awesome-swiper.js', mode: 'client' },
            '~/plugins/event-bus.js',
        ],

        /*
         * Модули Nuxt.js.
         */
        devModules: [],
        modules: [
            '@nuxtjs/axios',
            '@nuxtjs/eslint-module',
            '@nuxtjs/pwa',
            'cookie-universal-nuxt',
            '@nuxtjs/yandex-metrika',
            /*[
                '@nuxtjs/router',
                {
                    /!* module options *!/
                },
            ],*/
        ],

        components: {
            dirs: [
                '~/components',
                {
                    path: '~/components/blog/',
                    prefix: 'Blog',
                    extension: ['vue'],
                },
                {
                    path: '~/components/admin/',
                    prefix: 'Admin',
                    extension: ['vue'],
                },
                {
                    path: '~/components/common/',
                    prefix: 'Common',
                    extension: ['vue'],
                },
            ],
        },

        /*
         * Конфигурация Axios.
         * @see https://axios.nuxtjs.org/options
         */
        /*proxy: {
            '/api': {
                target: '',
                pathRewrite: { '^/api': '' },
            },
        },*/
        axios: {
            baseURL: 'http://localhost:4000',
        },

        /*
         * Конфигурация сборки
         */
        build: {
            extractCSS: false,
            analyze: false,
            postcss: {
                plugins: {
                    'postcss-import': {},
                    'postcss-nested': {},
                    'postcss-preset-env': {},
                    'postcss-normalize': {},
                    cssnano: {},
                },
                preset: {
                    stage: 0,
                    importFrom: [
                        {
                            environmentVariables: {
                                '--xs': '23em', // px
                                '--s': '34em', // 550px
                                '--m': '48em', // 768px
                                '--l': '64em', // 1024px
                                '--xl': '85em', // 1366px
                                '--max-font-size': '4rem', // 40px
                                '--max-font-scale-ratio': '.82',
                            },
                            customMedia: {
                                '--less-than-xs': 'only screen and (width <= env(--xs))',
                                '--less-than-s': 'only screen and (width <= env(--s))',
                                '--less-than-m': 'only screen and (width <= env(--m))',
                                '--less-than-l': 'only screen and (width <= env(--l))',
                                '--less-than-xl': 'only screen and (width <= env(--xl))',
                                /* По возможности, эти медиа запросы не использовать */
                                '--more-than-xs': 'only screen and (width > env(--xs))',
                                '--more-than-s': 'only screen and (width > env(--s))',
                                '--more-than-m': 'only screen and (width > env(--m))',
                                '--more-than-l': 'only screen and (width > env(--l))',
                                '--more-than-xl': 'only screen and (width > env(--xl))',
                            },
                        },
                    ],
                },
            },
            /*
             * Расширение конфигурации webpack.
             */
            extend(config, ctx) {},
        },
    },
    envConfig
);
