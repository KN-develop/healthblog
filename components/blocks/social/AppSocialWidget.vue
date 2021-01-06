<template>
    <component :is="tag">
        <div class="app-social-widget">
            <h4 class="app-social-widget__title text--m margin-top--remove margin-bottom--s">Мы в социальных сетях</h4>
            <ul class="app-social-widget__list">
                <li class="app-social-widget__item">
                    <a class="app-social-widget__link" href="#" title="vkontakte">
                        <img :src="'./icons/icon-vk.svg'" alt="vkontakte" />
                    </a>
                </li>
                <li class="app-social-widget__item">
                    <a class="app-social-widget__link" href="#" title="facebook">
                        <img :src="'./icons/icon-fb.svg'" alt="facebook" />
                    </a>
                </li>
                <li class="app-social-widget__item">
                    <a class="app-social-widget__link" href="#" title="instagram">
                        <img :src="'icons/icon-instagram.svg'" alt="instagram" />
                    </a>
                </li>
                <li class="app-social-widget__item">
                    <a class="app-social-widget__link" href="#" title="odnoklassniki">
                        <img :src="'./icons/icon-odnoklassniki.svg'" alt="odnoklassniki" />
                    </a>
                </li>
            </ul>
        </div>
    </component>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: 'div',
        },
    },
};
</script>

<style lang="postcss">
.app-social-widget {
    &__list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        width: calc(100% + 6px);
        margin: -3px;
        align-items: stretch;
        justify-content: space-between;
    }

    &__item {
        flex-shrink: 0;
    }

    &__link {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        padding: 3px;
        border-radius: 3px;
        color: var(--global-color-inverse);
        text-decoration: none;
        transition-property: all;
        transition: var(--global-transition-standard);

        img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
        }

        &:hover,
        &:focus {
            background-color: var(--global-color-inverse);
            opacity: 0.5;
        }
    }
}
</style>
