<template>
    <section class="hero">
        <client-only>
            <swiper class="hero__slider" :options="config">
                <swiper-slide style="overflow: hidden" v-for="slide in getSlides" :key="`slide-${slide.href}`">
                    <NuxtLink :to="slide.href" class="row" :title="slide.title">
                        <div class="col-lg-12 p-0">
                            <div
                                class="hero__inside__item hero__inside__item--wide set-bg"
                                :style="`background-image: url(${slide.image})`"
                            >
                                <div class="hero__inside__item__text">
                                    <div class="hero__inside__item--meta">
                                        <span>08</span>
                                        <p>Aug</p>
                                    </div>
                                    <div class="hero__inside__item--text">
                                        <ul class="label">
                                            <li>Vegan</li>
                                            <li>Desserts</li>
                                        </ul>
                                        <h4>
                                            Vegan White Peach Mug Cobbler With CardamomVegan<br />
                                            White Peach Mug Cobbler With Cardamom
                                        </h4>
                                        <ul class="widget">
                                            <li>by <span>Admin</span></li>
                                            <li>3 min read</li>
                                            <li>20 Comment</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </swiper-slide>
            </swiper>
        </client-only>
    </section>
</template>
<script>
export default {
    data() {
        return {
            config: {
                autoplay: true,
                loop: true,
            },
        };
    },

    computed: {
        getSlides() {
            return this.$store.state.mainSlider.slides || [];
        },
    },

    async fetch() {
        await this.$store.dispatch('mainSlider/fetch');
    },
};
</script>
