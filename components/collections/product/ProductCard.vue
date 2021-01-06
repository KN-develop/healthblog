<template>
    <article class="product-block">
        <a href="#" class="product-block__image">
            <img src="http://placehold.it/150x150.jpg/79bcb8" alt="Наименование товара" />
        </a>
        <a class="product-block__name margin-vertical--l" href="#">Наименование товара</a>
        <div class="product-block__prices">
            <p class="product-block__price margin-vertical--remove">272 руб</p>
            <!--<p class="product-block__price product-block__price&#45;&#45;new">272 руб</p>
            <p class="product-block__price product-block__price&#45;&#45;old">272 руб</p>-->
        </div>
        <footer class="product-block__footer">
            <button class="product-block__button button button buy" type="button">
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 22 20">
                    <path
                        d="M19.9597468,6.8486092 L19.1912156,6.8486092 L15.7501011,0.337645919 C15.5863711,0.027845921 15.2033078,-0.0900219742 14.8944947,0.0740619862 C14.5856816,0.238315236 14.4680626,0.622602665 14.6317926,0.932402663 L17.7585675,6.84852456 L3.93327487,6.84852456 L7.06004973,0.932402663 C7.22377973,0.622602665 7.10616075,0.238315236 6.79734765,0.0740619862 C6.48857674,-0.0901489415 6.1054713,0.027845921 5.94174129,0.337645919 L2.50066895,6.8486092 L1.64029539,6.8486092 C0.735835812,6.8486092 0,7.58679657 0,8.49414659 C0,9.40149661 0.735835812,10.139684 1.64029539,10.139684 L1.68581579,10.139684 C1.68720798,10.148741 1.68826267,10.1578403 1.6898658,10.1668973 L3.00966213,17.5908395 C3.25785168,18.9868016 4.46386809,20 5.87732085,20 L15.8144371,20 C17.2278899,20 18.4339485,18.9868016 18.6820959,17.5908395 L20.0018922,10.1668973 C20.0035797,10.1574594 20.0047188,10.1479792 20.0061531,10.1385413 C20.8891814,10.113698 21.6,9.38587965 21.6,8.49414659 C21.6000422,7.58675425 20.8642064,6.8486092 19.9597468,6.8486092 Z M17.4360856,17.3679274 C17.2957697,18.1573249 16.6137653,18.7302856 15.8144793,18.7302856 L5.87736304,18.7302856 C5.07807711,18.7302856 4.39611484,18.1573672 4.25575675,17.3679274 L2.97080736,10.139684 L18.7211194,10.139684 L17.4360856,17.3679274 Z M19.9597468,8.8698849 L1.64029539,8.8698849 C1.43374499,8.8698849 1.26575403,8.70135708 1.26575403,8.49414659 C1.26575403,8.2869361 1.43374499,8.11836597 1.64029539,8.11836597 L19.9597468,8.11836597 C20.166255,8.11836597 20.3342882,8.28689378 20.3342882,8.49414659 C20.3342882,8.70135708 20.1662972,8.8698849 19.9597468,8.8698849 Z"
                        id="Shape"
                    />
                    <path
                        d="M10.6,11.2 C10.2686221,11.2 10,11.4830787 10,11.8321965 L10,17.3678035 C10,17.7169634 10.2686621,18 10.6,18 C10.9313779,18 11.2,17.7169213 11.2,17.3678035 L11.2,11.8321965 C11.2,11.4830366 10.9313779,11.2 10.6,11.2 Z"
                        id="Shape"
                    />
                    <path
                        d="M8.39191544,17.2627246 L7.54313815,11.7273227 C7.4903869,11.3829799 7.19313837,11.1508615 6.88000692,11.2088911 C6.56656855,11.2668786 6.35529498,11.593016 6.4080846,11.9373166 L7.25690025,17.4727185 C7.30424211,17.7814934 7.54789536,18 7.8236981,18 C7.85546395,18 7.88765181,17.9971343 7.91995476,17.9911502 C8.23343149,17.9331627 8.44470506,17.6070253 8.39191544,17.2627246 Z"
                        id="Shape"
                    />
                    <path
                        d="M14.3200043,11.2088073 C14.0069067,11.1511141 13.7097306,11.3828983 13.6568635,11.7272454 L12.808074,17.2627155 C12.755322,17.6069783 12.9665986,17.9331197 13.2800415,17.9911501 C13.3123833,17.9971343 13.3445332,18 13.3762995,18 C13.6521446,18 13.8958014,17.7814907 13.9431055,17.472712 L14.791895,11.9372418 C14.8447621,11.592937 14.6334472,11.2667955 14.3200043,11.2088073 Z"
                        id="Shape"
                    />
                </svg>
                <span>в корзину</span>
            </button>
        </footer>
    </article>
</template>
<style lang="postcss" scoped>
.product-block {
    position: relative;
    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 75px;
    border-radius: 4px;
    background-color: white;
    border: thin solid #eeeeee;
    color: black;
    transition-duration: var(--global-transition-standard);

    @media (hover: hover) {
        &:hover {
            box-shadow: 0 16px 34px 7px rgba(121, 121, 121, 0.1);

            .product-block__footer {
                animation-name: block-hover;
                animation-duration: 300ms;
                animation-fill-mode: forwards;
                opacity: 1;
                pointer-events: auto;
            }
        }
    }

    &__image {
        position: relative;
        display: block;

        &::before {
            content: '';
            display: block;
            padding-top: 100%;
        }
        img {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
        }
    }

    &__name {
        display: inline-block;
        color: black;
        text-decoration: none;
        transition: var(--global-transition-standard);

        @media (hover: hover) {
            &:hover {
                color: #79bcb8;
            }
        }
    }

    &__prices {
        font-size: 18px;
        color: #79bcb8;
        font-weight: bold;
    }

    &__price {
        display: inline-block;

        + p {
            margin-left: 15px;
        }

        &--old {
            color: var(--global-color-muted);
            text-decoration: line-through;
            font-weight: 500;
        }
        &--new {
            color: var(--global-color-error);
        }
    }

    &__footer {
        position: absolute;
        box-sizing: border-box;
        background-color: white;
        width: 100%;
        padding: 15px;
        bottom: -15px;
        left: 0;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        box-shadow: 0 1px 0 1px #eeeeee;
        transition-duration: var(--global-transition-standard);
        pointer-events: none;
        opacity: 0;

        @media (--less-than-m) {
            animation-name: block-hover;
            animation-duration: 300ms;
            animation-fill-mode: forwards;
            opacity: 1;
            pointer-events: auto;
        }
    }

    @keyframes block-hover {
        from {
            bottom: -15px;
        }
        to {
            bottom: -75px;
        }
    }

    .button {
        display: inline-block;
        box-sizing: border-box;
        padding: 13px 24px;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: 0.2px;
        line-height: 22px;
        text-align: center;
        color: $color-dark;
        border-radius: 4px;
        border: none;
        transition-duration: $transition-hover-off;

        svg {
            transition-duration: $transition-hover-off;
            flex-shrink: 0;
        }

        &:hover,
        &:focus {
            transition-duration: $transition-hover-on;

            svg {
                opacity: 0.6;
                transition-duration: $transition-hover-on;
            }
        }

        &.prime-on-light {
            background-color: $color-dark;
            color: white;

            &:hover,
            &:focus {
                background-color: $color-dark-light;
            }

            &:disabled,
            &.disabled {
                color: $color-dark-light;
                background-color: $color-dark-15;
                pointer-events: none;
            }
        }

        &.sec-on-light {
            background-color: transparent;
            border: thin solid $color-dark;

            &:hover,
            &:focus {
                color: $color-dark-light;
                border-color: $color-dark-30;
            }

            &:disabled,
            &.disabled {
                color: $color-dark-30;
                pointer-events: none;
            }
        }
        &.sec-on-dark {
            color: white;
            background-color: $color-dark;
            border: thin solid white;

            &:hover,
            &:focus {
                color: $color-dark;
                background-color: white;
            }

            &:disabled,
            &.disabled {
                color: $color-white-50;
                border-color: $color-white-50;
                pointer-events: none;
            }
        }

        &.sec-small-light {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 4px 12px 4px;
            background-color: transparent;
            border: thin solid $color-dark;

            &:hover,
            &:focus {
                color: $color-dark-light;
                border-color: $color-dark-30;
            }

            &:disabled,
            &.disabled {
                color: $color-dark-30;
                pointer-events: none;
            }
        }

        &.sec-small-icon-light {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 4px 12px 4px 24px;
            background-color: transparent;
            border: thin solid $color-dark;

            svg {
                display: inline-block;
                margin-left: 12px;
                width: 14px;
                height: 14px;
                fill: $color-dark;
            }

            &:hover,
            &:focus {
                color: $color-dark-light;
                border-color: $color-dark-30;
                svg {
                    fill: $color-dark-light;
                }
            }

            &:disabled,
            &.disabled {
                color: $color-dark-30;
                pointer-events: none;

                svg {
                    fill: $color-dark-30;
                }
            }
        }

        &.sec-small-icon-light--2 {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 5px 24px 5px 12px;
            background-color: $color-light-cloud;
            border: thin solid transparent;

            svg {
                display: inline-block;
                margin-right: 8px;
                width: 20px;
                height: 20px;
                fill: $color-dark;
            }

            &:hover,
            &:focus {
                color: $color-dark-light;
                svg {
                    fill: $color-dark-light;
                }
            }

            &:disabled,
            &.disabled {
                color: $color-dark-30;
                pointer-events: none;

                svg {
                    fill: $color-dark-30;
                }
            }
        }

        &.sec-small-icon-light--3 {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 5px 24px 5px 12px;
            background-color: transparent;
            border: thin solid $color-dark;

            svg {
                display: inline-block;
                margin-right: 8px;
                width: 20px;
                height: 20px;
                fill: $color-dark;
            }

            &:hover,
            &:focus {
                color: $color-dark-light;
                border-color: $color-dark-30;
                svg {
                    fill: $color-dark-light;
                }
            }

            &:disabled,
            &.disabled {
                color: $color-dark-30;
                pointer-events: none;

                svg {
                    fill: $color-dark-30;
                }
            }
        }

        &.buy {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            background-color: #79bcb8;
            color: white;
            border-radius: 4px;
            font-weight: 500;

            svg {
                margin-right: 8px;
            }

            span {
                white-space: nowrap;
            }

            &:hover {
                background-color: #9dd9d2;
            }
        }
    }
}
</style>
