<template>
    <div class="app-registration">
        <button class="app-popup__close" type="button" title="закрыть" @click="onClosePopup"></button>
        <div class="app-registration__left"></div>
        <div class="app-registration__right">
            <h2 class="app-registration__title">
                Регистрация
            </h2>
            <div class="app-registration__social">
                <div class="app-registration__subtitle">
                    Через соцсети:
                </div>
                <app-flex tag="ul" class="app-registration__social-list" middle>
                    <li class="app-registration__icon">
                        <nuxt-link to="#">
                            <app-icon>
                                <app-icon-vkontakte />
                            </app-icon>
                        </nuxt-link>
                    </li>
                    <li class="app-registration__icon">
                        <nuxt-link to="#">
                            <app-icon>
                                <app-icon-odnoklassniki />
                            </app-icon>
                        </nuxt-link>
                    </li>
                    <li class="app-registration__icon">
                        <nuxt-link to="#">
                            <app-icon>
                                <app-icon-facebook />
                            </app-icon>
                        </nuxt-link>
                    </li>
                </app-flex>
            </div>

            <form novalidate="novalidate" class="app-registration__form" @submit.prevent="onRegister">
                <div class="app-registration__subtitle">
                    С помощью e-mail:
                </div>
                <app-text-input
                    :name="'firstName'"
                    :type="'text'"
                    :id="'reg-name'"
                    :required="true"
                    :label="'Имя'"
                    :error-message="nameRules"
                />
                <app-text-input
                    :name="'email'"
                    :type="'email'"
                    :id="'reg-email'"
                    :required="true"
                    :label="'Электронная почта'"
                    :error-message="emailRules"
                />
                <app-text-input
                    :name="'password'"
                    :type="'password'"
                    :id="'reg-pass'"
                    :required="true"
                    :label="'Пароль'"
                    :error-message="passwordRules"
                />

                <app-flex class="app-registration__links" space-between middle>
                    <app-checkbox :id="'auth-remember'" :name="'auth-remember'" :text="'Запомнить пароль'" />
                    <nuxt-link :to="'#'">Забыли пароль?</nuxt-link>
                </app-flex>

                <div class="app-registration__button">
                    <app-button type="submit" class="text--m --orange">
                        <slot><span>Войти</span></slot>
                    </app-button>
                    <a class="app-registration__toggle-popup" @click.prevent="onToggleForm" href="#"
                        >Уже есть аккаунт</a
                    >
                </div>
            </form>
            <div class="app-registration__desc">
                Регистрируясь на сайте, вы принимаете условия
                <nuxt-link :to="'#'">пользовательского соглашения</nuxt-link>
                и подтверждаете свое совершеннолетие.
            </div>
        </div>
    </div>
</template>

<script>
import AppFlex from '../../layout/AppFlex';
import AppTextInput from '../../elements/AppTextInput';
import AppIcon from '../../icons/AppIcon';
import AppIconFacebook from '../../icons/social/AppIconFacebook';
import AppIconVkontakte from '../../icons/social/AppIconVkontakte';
import AppIconOdnoklassniki from '../../icons/social/AppIconOdnoklassniki';
import AppCheckbox from '../../elements/AppCheckbox';
import AppButton from '../../elements/AppButton';

export default {
    components: {
        AppFlex,
        AppTextInput,
        AppIcon,
        AppIconFacebook,
        AppIconOdnoklassniki,
        AppIconVkontakte,
        AppCheckbox,
        AppButton,
    },
    data: () => ({
        valid: false,
        firstName: '',
        email: '',
        password: '',
        nameRules: 'Имя обязательное поле',
        emailRules: 'E-mail обязательное поле',
        passwordRules: 'Пароль обязательное поле',
    }),
    methods: {
        onClosePopup() {
            this.$emit('close-popup');
        },
        onToggleForm() {
            this.$emit('toggle-popup', 'app-login');
        },
        onRegister() {},
    },
};
</script>

<style lang="postcss">
.app-registration {
    display: flex;
    align-items: stretch;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;

    &__left {
        box-sizing: border-box;
        max-width: 360px;

        @media (--less-than-m) {
            display: none;
        }
    }

    &__right {
        box-sizing: border-box;
        max-width: 550px;
        padding: 7rem 5rem 5rem 5rem;
        font-weight: 400;
    }

    &__toggle-popup {
        display: inline-block;
        align-self: center;
        margin: 16px auto 0;
    }

    &__title {
        @include fixed-font-size(3rem);
        font-weight: 500;
        color: #212121;
        margin-bottom: 4rem;
    }

    &__social {
        margin-bottom: 2rem;

        &-list {
            list-style: none;
            padding: 0;

            .icon {
                color: #fff;
                display: block;
                height: 5rem;
                padding: 0.7rem;
                border-radius: 50%;
            }
        }
    }

    &__icon {
        + li {
            margin-left: 1rem;
        }
    }

    &__form {
        padding-bottom: 18px;
    }

    &__links {
        margin: 35px 0;
    }

    &__desc {
        text-align: left;
    }

    &__button {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
}
</style>
