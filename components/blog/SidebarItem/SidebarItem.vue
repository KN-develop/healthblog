<template>
    <div>
        <div class="sidebar__item__title">
            <h6>{{ title }}</h6>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['title'],
};
</script>
