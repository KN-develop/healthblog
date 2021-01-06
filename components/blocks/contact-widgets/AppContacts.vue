<template>
    <AppPapers class="app-contacts" id="app-contacts">
        <div>
            <h2 class="app-contacts__title">Контакты</h2>
            <ul class="app-contacts__list text--m">
                <li class="app-contacts__item">
                    <i class="fa fa-envelope"></i>
                    E-mail:&nbsp;<a href="mailto:n_13@bk.ru">n_13@bk.ru</a>
                </li>
                <li class="app-contacts__item">
                    <i class="fa fa-phone"></i>
                    Телефон:&nbsp;<a href="tel:+79062800302">+7(906)280-03-02</a>
                </li>
                <li class="app-contacts__item">
                    <i class="fa fa-telegram"></i>
                    Telegram:&nbsp;<a href="https://tlgg.ru/codeNk">@codeNk</a>
                </li>
                <li class="app-contacts__item">
                    <i class="fa fa-vk"></i>
                    ВКонтакте:&nbsp;<a href="https://vk.com/nova_d" target="_blank">vk.com/nova_d</a>
                </li>
            </ul>
        </div>
    </AppPapers>
</template>
<script>
import AppPapers from '~/components/layout/AppPapers';
export default {
    components: {
        AppPapers,
    },
};
</script>
<style>
.app-contacts {
    &__title {
        text-align: center;
        text-transform: uppercase;
        margin-top: 0;
        letter-spacing: 0.1em;
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
        list-style: none;
        margin: 0;
        padding: 30px;
        font-family: var(--global-font-family-addit);

        a {
            text-decoration: none;
            color: var(--global-link-color);

            &:hover,
            &:focus {
                color: var(--global-link-color-hover);
            }
        }

        @media (--less-than-l) {
            padding: 15px;
        }

        @media (--less-than-m) {
            grid-template-columns: 1fr;
        }
    }

    &__item {
        display: flex;
        align-items: center;
        white-space: nowrap;
        i {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 8px;
            width: 40px;
            height: 40px;
            font-size: 18px;
            line-height: 40px;
            text-align: center;
            background-color: #f54f36;
            color: white;
            border-radius: 50%;
        }
    }
}
</style>
