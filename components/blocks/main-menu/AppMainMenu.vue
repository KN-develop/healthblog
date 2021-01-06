<template>
    <div class="app-main-menu">
        <nav class="app-main-menu__wrapper">
            <h2 class="app-main-menu__title">
                <nuxt-link to="/">Николай Иванов <span>Веб разработчик</span></nuxt-link>
            </h2>
            <ul class="app-main-menu__list text--s">
                <!--<li class="alert"><span class="text&#45;&#45;xxl">Сайт в разработке</span></li>-->
                <li class="app-main-menu__item" v-for="(item, index) in getMainMenu" :key="index">
                    <component :is="item.type" class="app-main-menu__item-link" :to="item.link" :href="item.link">
                        {{ item.title }}
                    </component>
                </li>
            </ul>
            <AppFlex class="app-main-menu__links">
                <a href="mailto:n_13@bk.ru" title="Напишите мне письмо на почту">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M10.688,95.156C80.958,154.667,204.26,259.365,240.5,292.01c4.865,4.406,10.083,6.646,15.5,6.646
        c5.406,0,10.615-2.219,15.469-6.604c36.271-32.677,159.573-137.385,229.844-196.896c4.375-3.698,5.042-10.198,1.5-14.719
        C494.625,69.99,482.417,64,469.333,64H42.667c-13.083,0-25.292,5.99-33.479,16.438C5.646,84.958,6.313,91.458,10.688,95.156z"
                        />
                        <path
                            d="M505.813,127.406c-3.781-1.76-8.229-1.146-11.375,1.542C416.51,195.01,317.052,279.688,285.76,307.885
        c-17.563,15.854-41.938,15.854-59.542-0.021c-33.354-30.052-145.042-125-208.656-178.917c-3.167-2.688-7.625-3.281-11.375-1.542
        C2.417,129.156,0,132.927,0,137.083v268.25C0,428.865,19.135,448,42.667,448h426.667C492.865,448,512,428.865,512,405.333
        v-268.25C512,132.927,509.583,129.146,505.813,127.406z"
                        />
                    </svg>
                </a>
                <a
                    target="_blank"
                    href="https://arkhangelsk.hh.ru/resume/a4399d1cff066888080039ed1f676e4e753079"
                    title="Мое резюме"
                >
                    <img src="/icons/min-hh-red.png" alt="HeadHunter" />
                </a>
                <a href="https://vk.com/nova_d" target="_blank" title="Моя страница вконтакте">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.962 511.962">
                        <path
                            d="M507.399,370.471c-1.376-2.304-9.888-20.8-50.848-58.816c-42.88-39.808-37.12-33.344,14.528-102.176
			c31.456-41.92,44.032-67.52,40.096-78.464c-3.744-10.432-26.88-7.68-26.88-7.68l-76.928,0.448c0,0-5.696-0.768-9.952,1.76
			c-4.128,2.496-6.784,8.256-6.784,8.256s-12.192,32.448-28.448,60.032c-34.272,58.208-48,61.28-53.6,57.664
			c-13.024-8.416-9.76-33.856-9.76-51.904c0-56.416,8.544-79.936-16.672-86.016c-8.384-2.016-14.528-3.36-35.936-3.584
			c-27.456-0.288-50.72,0.096-63.872,6.528c-8.768,4.288-15.52,13.856-11.392,14.4c5.088,0.672,16.608,3.104,22.72,11.424
			c7.904,10.72,7.616,34.848,7.616,34.848s4.544,66.4-10.592,74.656c-10.4,5.664-24.64-5.888-55.2-58.72
			c-15.648-27.04-27.488-56.96-27.488-56.96s-2.272-5.568-6.336-8.544c-4.928-3.616-11.84-4.768-11.84-4.768l-73.152,0.448
			c0,0-10.976,0.32-15.008,5.088c-3.584,4.256-0.288,13.024-0.288,13.024s57.28,133.984,122.112,201.536
			c59.488,61.92,127.008,57.856,127.008,57.856h30.592c0,0,9.248-1.024,13.952-6.112c4.352-4.672,4.192-13.44,4.192-13.44
			s-0.608-41.056,18.464-47.104c18.784-5.952,42.912,39.68,68.48,57.248c19.328,13.28,34.016,10.368,34.016,10.368l68.384-0.96
			C488.583,400.807,524.359,398.599,507.399,370.471z"
                        />
                    </svg>
                </a>
                <a href="https://github.com/Collin-ivo" target="_blank" title="Мой репозиторий в гите">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="438.549"
                        height="438.549"
                        viewBox="0 0 438.549 438.549"
                    >
                        <path
                            d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
		c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
		c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
		c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
		c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
		c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
		c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
		c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
		c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
		c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
		c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
		c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
		c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
		c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
		c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
		c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
		c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
		c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
		c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
		C438.536,184.851,428.728,148.168,409.132,114.573z"
                        />
                    </svg>
                </a>
            </AppFlex>
        </nav>
    </div>
</template>

<script>
import AppFlex from '~/components/layout/AppFlex';

export default {
    components: {
        AppFlex,
    },
    computed: {
        getMainMenu() {
            return [
                {
                    title: 'Портфолио',
                    link: '/#app-portfolio',
                    type: 'a',
                },
                {
                    title: 'Профессиональные навыки',
                    link: '/#app-skills',
                    type: 'a',
                },
                {
                    title: 'Контакты',
                    link: '/#app-contacts',
                    type: 'a',
                },
                {
                    title: 'Коллекции',
                    link: '/collections',
                    type: 'nuxt-link',
                },
            ];
        },
    },
};
</script>

<style lang="postcss">
.app-main-menu {
    position: sticky;
    top: var(--global-indent-xl);
    &__wrapper {
        position: relative;
        display: block;
        margin-bottom: 30px;
        background-color: white;
        z-index: 10;
        box-shadow: 4px 4px rgba(0, 0, 0, 0.05);

        @media (--less-than-l) {
            margin-left: var(--global-indent-m--neg);
            margin-right: var(--global-indent-m--neg);
        }
    }

    &__title {
        padding: 14px 26px;
        margin: 0;
        font-weight: normal;
        color: var(--global-color);
        text-transform: uppercase;
        text-align: center;
        font-size: 27px;
        white-space: nowrap;

        a {
            color: inherit;
            text-decoration: none;
            transition: var(--global-transition-standard);
        }

        span {
            display: block;
            text-align: center;
            font-size: 14px;
            font-weight: normal;
        }
    }

    &__list {
        position: relative;
        list-style: none;
        margin: 0 0 26px;
        padding: 0;
        font-weight: 500;

        .alert {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            background-color: green;
            opacity: 0.6;

            span {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) rotate(-15deg);
                color: red;
                text-align: center;
                text-transform: uppercase;
                pointer-events: none;
            }
        }

        @media (--less-than-l) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin: unset;
        }

        @media (--less-than-s) {
            display: block;
        }
    }

    &__item {
        position: relative;
        &:not(:last-child) {
            border-bottom: thin solid transparent;
        }

        &:hover {
            .app-main-menu__sublist {
                opacity: 1;
                pointer-events: auto;
            }
        }
    }

    &__item-link {
        box-sizing: border-box;
        display: inline-block;
        width: 100%;
        padding: 14px 26px;
        text-decoration: none;
        color: var(--global-color);
        transition: var(--global-transition-standard);
        text-transform: uppercase;
        text-align: center;

        @media (--less-than-m) {
            padding: 6px 14px;
        }

        &:hover,
        &:focus {
            background-color: #eeeeee;
        }
    }

    &__sublist {
        list-style: none;
        margin: 0;
        position: absolute;
        left: 100%;
        top: 0;
        display: flex;
        min-width: 600px;
        padding: 10px 0;
        flex-wrap: wrap;
        background-color: var(--global-color-inverse);
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        color: var(--global-color);
        box-shadow: var(--global-box-shadow-s);
        pointer-events: none;
        opacity: 0;
        z-index: -1;
    }

    &__subitem {
        width: 33%;
        img {
            flex-shrink: 0;
            width: 32px;
            height: 32px;
            margin-right: 10px;
            object-fit: cover;
            background-color: var(--global-color-green);
            border-radius: 50%;
        }
    }

    &__subitem-link {
        display: inline-flex;
        align-items: center;
        padding: 3px 20px 8px;
        color: var(--global-color);
        text-decoration: none;
        transition: var(--global-transition-standard);

        &:hover {
            color: var(--global-color-green);
        }
    }

    &__links {
        justify-content: center;
        border-top: thin dashed var(--global-color);

        /*@media (--less-than-l) {
            margin-left: auto;
            margin-right: 0;
            border-top: none;
            align-items: center;
            border-left: thin dashed var(--global-color);
        }*/

        a {
            display: block;
            padding: 10px;
            filter: grayscale(100%);
            transition: var(--global-transition-standard);

            &:hover,
            &:focus,
            &.active {
                filter: none;
            }
        }

        img {
            display: block;
            width: 20px;
            height: 20px;
            object-fit: cover;
        }

        svg {
            display: block;
            width: 20px;
            height: 20px;
            object-fit: cover;
            //fill: #fba24e;
            fill: #e1011c;
        }
    }
}
</style>
