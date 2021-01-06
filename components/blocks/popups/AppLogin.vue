<template>
    <div class="app-login padding--l">
        <button class="app-popup__close" type="button" title="закрыть" @click="onClosePopup"></button>
        <h2 class="app-login__title">
            Вход
        </h2>
        <div class="app-login__social">
            <div class="app-login__subtitle">
                Через соцсети:
            </div>
            <app-flex tag="ul" class="app-login__social-list" middle>
                <li class="app-login__icon">
                    <nuxt-link to="#">
                        <app-icon>
                            <app-icon-vkontakte />
                        </app-icon>
                    </nuxt-link>
                </li>
                <li class="app-login__icon">
                    <nuxt-link to="#">
                        <app-icon>
                            <app-icon-odnoklassniki />
                        </app-icon>
                    </nuxt-link>
                </li>
                <li class="app-login__icon">
                    <nuxt-link to="#">
                        <app-icon>
                            <app-icon-facebook />
                        </app-icon>
                    </nuxt-link>
                </li>
            </app-flex>
        </div>

        <form novalidate="novalidate" class="app-login__form" @submit.prevent="onAuth">
            <div class="app-login__subtitle">
                С помощью e-mail:<span class="text--error" v-if="!valid">&nbsp;Неверный логин или пароль</span>
            </div>
            <app-text-input
                :name="'email'"
                :type="'email'"
                :id="'auth-email'"
                :required="true"
                :label="'Логин или электронная почта'"
                :error-message="emailRules"
                @input="inputEmail"
                ref="authEmail"
            />
            <app-text-input
                :name="'password'"
                :type="'password'"
                :id="'auth-pass'"
                :required="true"
                :label="'Пароль'"
                :error-message="passwordRules"
                @input="inputPassword"
                ref="authPass"
            />

            <app-flex class="app-login__links" space-between middle>
                <app-checkbox
                    :id="'auth-remember'"
                    :name="'auth-remember'"
                    :text="'Запомнить меня'"
                    :checked="rememberUser"
                    @input="e => (rememberUser = e)"
                />
                <nuxt-link :to="'#'">Забыли пароль?</nuxt-link>
            </app-flex>

            <div class="app-login__button">
                <app-button type="submit" class="text--m --orange">
                    <slot><span>Войти</span></slot>
                </app-button>
                <a class="app-login__toggle-popup" @click.prevent="onToggleForm" href="#">Регистрация</a>
            </div>
        </form>
        <div class="app-login__desc">
            Регистрируясь на сайте, вы принимаете условия
            <nuxt-link :to="'#'">пользовательского соглашения</nuxt-link> и подтверждаете свое совершеннолетие.
        </div>
    </div>
</template>

<script>
import AppFlex from '../../layout/AppFlex';
import AppTextInput from '../../elements/AppTextInput';
import AppCheckbox from '../../elements/AppCheckbox';
import AppButton from '../../elements/AppButton';
import AppIcon from '../../icons/AppIcon';
import AppIconFacebook from '../../icons/social/AppIconFacebook';
import AppIconVkontakte from '../../icons/social/AppIconVkontakte';
import AppIconOdnoklassniki from '../../icons/social/AppIconOdnoklassniki';

export default {
    components: {
        AppFlex,
        AppTextInput,
        AppCheckbox,
        AppButton,
        AppIcon,
        AppIconVkontakte,
        AppIconOdnoklassniki,
        AppIconFacebook,
    },
    data: () => ({
        rememberUser: true,
        valid: true,
        email: '',
        password: '',
        emailRules: 'Это обязательное поле',
        passwordRules: 'Пароль обязательное поле',
    }),
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    updated() {},
    activated() {},
    deactivated() {},
    methods: {
        inputEmail(e) {
            this.email = e;
            this.valid = true;
        },
        inputPassword(e) {
            this.password = e;
            this.valid = true;
        },
        onClosePopup() {
            this.$emit('close-popup');
        },
        onToggleForm() {
            this.$emit('toggle-popup', 'app-registration');
        },

        /**
         * Проверяет форму авторизации на наличие ошибок
         * @returns {boolean}
         */
        hasAuthErrors() {
            let formHasError = false;

            formHasError = formHasError ? true : this.$refs.authEmail.hasErrors();
            formHasError = formHasError ? true : this.$refs.authPass.hasErrors();

            return formHasError;
        },
        async onAuth() {
            if (!this.hasAuthErrors()) {
                try {
                    await this.$store.dispatch('auth/authWithPass', {
                        data: [this.email, this.password],
                        remember: this.rememberUser,
                    });
                    await this.$store.dispatch('customer/fetchCustomerData');
                    this.onClosePopup();
                } catch (e) {
                    this.valid = false;
                }
            }
        },
    },
};
</script>

<style lang="postcss">
.app-login {
    box-sizing: border-box;
    max-width: 550px;
    //padding: 7rem 5rem 5rem 5rem;
    background-color: #fff;
    font-weight: 400;
    border-radius: 4px;

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
                width: 8rem;
                padding: 0.7rem;
                border-radius: 8rem;
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
