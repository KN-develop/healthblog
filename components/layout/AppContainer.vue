<template>
    <div class="container">
        <slot />
    </div>
</template>

<script>
export default {
    data: () => ({}),
};
</script>

<style lang="postcss">
.container {
    box-sizing: border-box;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: env(--xl);

    @media (--less-than-xl) {
        //max-width: env(--l);
    }

    @media (--less-than-l) {
        //max-width: env(--m);
    }

    @media (--less-than-m) {
        //max-width: env(--s);
    }

    @media (--less-than-s) {
        margin-left: 0;
        margin-right: 0;
        max-width: none;
    }
}
</style>
