<template>
    <section class="plugin-tabs">
        <!--<h2 class="plugin-tabs__heading margin-bottom&#45;&#45;remove">Табы на ванильном js</h2>-->
        <div class="js-tabs">
            <hgroup class="plugin-tabs__head">
                <h3 class="plugin-tabs__title js-tabs-title" data-tab="tab-1" data-active="true">Новинки</h3>
                <h3 class="plugin-tabs__title js-tabs-title" data-tab="tab-2">Популярные товары</h3>
                <h3 class="plugin-tabs__title js-tabs-title" data-tab="tab-3">Ожидаем поставку</h3>
            </hgroup>
            <div class="plugin-tabs__body">
                <ul class="plugin-tabs__list js-tabs-bodie" data-tab="tab-1" data-active="true">
                    <li class="plugin-tabs__item" v-for="tab in 4" :key="tab">
                        <ProductCard />
                    </li>
                </ul>
                <ul class="plugin-tabs__list js-tabs-bodie" data-tab="tab-2">
                    <li class="plugin-tabs__item" v-for="tab in 3" :key="tab">
                        <ProductCard />
                    </li>
                </ul>
                <ul class="plugin-tabs__list js-tabs-bodie" data-tab="tab-3">
                    <li class="plugin-tabs__item" v-for="tab in 2" :key="tab">
                        <ProductCard />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
import ProductCard from '~/components/collections/product/ProductCard';

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            tabs: [],
        };
    },
    methods: {
        initTabs() {
            const tabs = Array.from(document.querySelectorAll('.js-tabs'));
            if (tabs.length) {
                class Tabs {
                    constructor(root) {
                        this._root = root;
                        this._heads = null;
                        this._bodies = null;
                        this._activeTab = '';

                        this.toggle = this.toggle.bind(this);
                    }

                    init() {
                        this._heads = Array.from(this._root.querySelectorAll('.js-tabs-title'));
                        this._bodies = Array.from(this._root.querySelectorAll('.js-tabs-bodie'));

                        this.bind();
                    }

                    destroy() {
                        this.unbind();
                        this._bodies = null;
                        this._heads = null;
                        this._root = null;
                    }

                    toggle(e) {
                        if (e) {
                            const tab = e.target.dataset.tab;
                            if (tab !== this._activeTab) {
                                this._activeTab = tab;
                                this._heads.forEach(head => {
                                    if (head.dataset.tab === tab) {
                                        head.dataset.active = 'true';
                                    } else {
                                        head.dataset.active = 'false';
                                    }
                                });
                                this._bodies.forEach(body => {
                                    if (body.dataset.tab === tab) {
                                        body.dataset.active = 'true';
                                    } else {
                                        body.dataset.active = 'false';
                                    }
                                });
                            }
                        }
                    }

                    bind() {
                        this._heads.forEach(head => head.addEventListener('click', this.toggle));
                    }

                    unbind() {
                        this._heads.forEach(head => head.removeEventListener('click', this.toggle));
                    }
                }

                const tabsFabric = root => {
                    const instance = new Tabs(root);
                    instance.init();

                    return instance;
                };

                tabs.forEach(tab => this.tabs.push(tabsFabric(tab)));
            }
        },
    },
    mounted() {
        this.initTabs();
    },
    beforeDestroy() {
        this.tabs.forEach(tab => tab.unbind());
    },
};
</script>
<style lang="postcss" scoped>
.plugin-tabs {
    &__head {
        display: flex;
        flex-wrap: wrap;
        padding-top: 12px;
        margin: 0 -5px 12px;
    }

    &__title {
        margin: 5px;
        color: #b7b7b7;
        border-bottom: 3px solid transparent;
        cursor: pointer;
        font-size: 24px;

        &[data-active='true'] {
            color: #85a71e;
            border-bottom-color: #85a71e;
        }
    }

    &__list {
        display: none;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        width: 100%;
        list-style: none;
        margin: 0;
        padding: 0;

        @media (--less-than-m) {
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 16px;
        }
        @media (--less-than-s) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 12px;
        }
        @media (--less-than-xs) {
            grid-template-columns: 1fr;
        }

        &[data-active='true'] {
            display: grid;
        }
    }

    &__item {
        width: 100%;
    }
}
</style>
