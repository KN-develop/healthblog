<template>
    <div class="app-slider-standard">
        <app-slider-button class="app-slider-standard__button app-slider-standard__button--prev" :prev="true" />
        <div class="app-slider-standard__container" v-swiper:standardSlider="sliderOptions">
            <div class="swiper-wrapper">
                <div
                    class="app-slider-standard__slide swiper-slide padding-horizontal--s"
                    v-for="(item, index) in slides"
                    :key="index"
                >
                    <slot :params="item" />
                </div>
            </div>
        </div>
        <app-slider-button class="app-slider-standard__button app-slider-standard__button--next" />
    </div>
</template>
<script>
import AppContainer from '../layout/AppContainer';
import AppSliderButton from '../elements/AppSliderButton';

export default {
    components: {
        AppContainer,
        AppSliderButton,
    },
    props: {
        slides: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            sliderOptions: {
                navigation: {
                    nextEl: '.app-slider-standard__button--next',
                    prevEl: '.app-slider-standard__button--prev',
                    disabledClass: 'app-slider-standard__button--disabled',
                },
                slidesPerView: 2,
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                    },
                },
                watchOverflow: true,
            },
        };
    },
};
</script>
<style lang="postcss">
.app-slider-standard {
    position: relative;

    &__button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        &--prev {
            right: 100%;
        }
        &--next {
            left: 100%;
        }
        &--disabled {
            opacity: 0.2;
            pointer-events: none;
        }

        @media (--less-than-m) {
            display: none;
        }
    }

    &__slide {
        box-sizing: border-box;
    }
}
</style>
