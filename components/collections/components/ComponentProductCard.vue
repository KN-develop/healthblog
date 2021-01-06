<template>
    <div class="component-product-card">
        <ul class="component-product-card__list">
            <li class="component-product-card__item">
                <ProductCard />
            </li>
        </ul>
    </div>
</template>
<script>
import ProductCard from '~/components/collections/product/ProductCard';
export default {
    components: {
        ProductCard,
    },
};
</script>
<style lang="postcss">
.component-product-card {
    &__list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-flow: row dense;
        grid-gap: 10px;
    }
}
</style>
