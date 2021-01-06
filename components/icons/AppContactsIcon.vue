<template>
    <i :class="[className, iconName]"></i>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            className: 'app-contacts-icon',
        };
    },
    computed: {
        iconName() {
            return this.name ? `${this.className}--${this.name}` : '';
        },
    },
};
</script>
<style lang="postcss">
.app-contacts-icon {
    display: inline-block;
    background-repeat: no-repeat;
    background-image: url('../../static/img/contacts-icons-sprite.png');
    margin-right: 7px;
    &--mail {
        width: 18px;
        height: 13px;
        background-position: -4px -5px;
    }
    &--skype {
        width: 15px;
        height: 15px;
        background-position: -5px -53px;
    }
    &--telegram {
        width: 19px;
        height: 15px;
        background-position: -5px -78px;
    }
    &--phone {
        width: 16px;
        height: 15px;
        background-position: -5px -28px;
    }
    &--whatsapp {
        width: 15px;
        height: 15px;
        background-position: -5px -103px;
    }
}
</style>
