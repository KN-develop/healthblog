<template>
    <div class="app-slider-main">
        <div
            class="app-slider-main__container"
            v-swiper:standardSlider="sliderOptions"
            @slideChange="slideChange"
            @init="slideChange"
        >
            <div class="swiper-wrapper">
                <div
                    class="app-slider-main__slide swiper-slide padding-horizontal--s"
                    v-for="(item, index) in slides"
                    :key="index"
                >
                    <slot :params="item" />
                </div>
            </div>
            <div class="app-slider-main__pagination"></div>
        </div>
    </div>
</template>
<script>
import AppContainer from '../layout/AppContainer';

import { mapActions } from 'vuex';

export default {
    components: {
        AppContainer,
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
                pagination: {
                    el: '.app-slider-main__pagination',
                    type: 'bullets',
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                },
                slidesPerView: 1,
                watchOverflow: true,
                loop: true,
            },
        };
    },
    methods: {
        ...mapActions('main-banner', ['analyzeImage']),
        slideChange() {
            const currentImage = this.slides[this.standardSlider.realIndex].images.s;

            this.analyzeImage(currentImage);
        },
    },
};
</script>
<style lang="postcss">
.app-slider-main {
    position: relative;

    &__container {
        height: 100%;
        overflow: hidden;
    }

    &__pagination {
        position: absolute;
        bottom: 20px;
        z-index: 1;
        text-align: center;
        &.swiper-pagination-bullets .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            margin: 0 1rem;
            display: inline-block;
            border-radius: 50%;
            background: #41403c;
            opacity: 1;

            &-active {
                opacity: 1;
                background: #b2b2b0;
            }
        }
    }

    &__slide {
        box-sizing: border-box;
    }
}
</style>
