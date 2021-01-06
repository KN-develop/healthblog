<template>
    <component :is="computedTag" class="app-button" :href="!!to && to" :class="computedClasses" @click="onClickButton">
        <slot />
    </component>
</template>

<script>
export default {
    props: {
        asLink: {
            type: Boolean,
            default: false,
        },
        to: {
            type: String,
            default: '',
        },
    },
    data: () => ({
        buttonClass: 'app-button--button',
        linkClass: 'app-button--link',
    }),
    computed: {
        computedTag() {
            return this.asLink ? 'a' : 'button';
        },
        computedClasses() {
            const result = [];
            !this.asLink && result.push(this.buttonClass);
            this.asLink && result.push(this.linkClass);
            return result;
        },
    },
    methods: {
        onClickButton(evt) {
            this.removeRipple();
            this.createRipple(evt);
            this.$emit('app-click');
        },
        createRipple(evt) {
            const offsetInfo = this.$el.getBoundingClientRect();
            const rippleContainer = document.createElement('div');
            rippleContainer.style.position = 'fixed';
            rippleContainer.style.zIndex = 99;
            rippleContainer.style.width = offsetInfo.width + 'px';
            rippleContainer.style.left = offsetInfo.left + 'px';
            rippleContainer.style.top = offsetInfo.top + 'px';
            rippleContainer.style.height = offsetInfo.height + 'px';
            rippleContainer.className = 'ripple-container';
            rippleContainer.style.overflow = 'hidden';
            this.$el.appendChild(rippleContainer);

            // fixed the bug
            const maxLength = offsetInfo.width > offsetInfo.height ? offsetInfo.width : offsetInfo.height;
            const circleD = maxLength * 2;

            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = circleD + 'px';
            ripple.style.height = circleD + 'px';
            ripple.style.borderRadius = '500px';
            ripple.style.left = `${evt.x - offsetInfo.left - circleD / 2}px`;
            ripple.style.top = `${evt.y - offsetInfo.top - circleD / 2}px`;
            ripple.className = 'ripple';
            rippleContainer.appendChild(ripple);

            ripple.addEventListener('animationend', this.removeRipple, false);
        },
        removeRipple() {
            const rippleContainer = this.$el.querySelector('.ripple-container');
            if (rippleContainer) {
                rippleContainer.remove();
            }
        },
    },
};
</script>

<style lang="postcss">
.app-button {
    box-sizing: border-box;
    position: relative;
    box-shadow: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    border: none;
    cursor: pointer;
    transition-duration: var(--global-transition-hover-off);

    &::before {
        position: absolute;
        display: none;
        content: '';
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--global-background-secondary);
        opacity: 0;
        transition: opacity 500ms;
    }

    &:hover,
    &:focus {
        transition-duration: var(--global-transition-hover-on);
        &::before {
            opacity: 0.05;
            transition: opacity 500ms;
        }
    }

    &--button {
        background: #65b812;
        color: var(--global-color-inverse);
        border-radius: 2px;
        width: 100%;
        min-height: 5rem;
        padding: 0 2rem;
        overflow: hidden;

        &::before {
            display: block;
        }
    }

    &--link {
        display: inline-flex;
        text-decoration: none;
        &.--red {
            color: var(--global-color-red);
        }
        &:hover {
            color: var(--global-link-color);
        }
    }

    &.--shadow-bottom {
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
            0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }

    &.--orange {
        background: #f2960c;
    }

    &.--yellow {
        background: var(--global-color-yellow);
        color: var(--global-color);
    }

    &.--grey {
        background-color: #eaeaea;
        color: var(--global-color);
    }

    &.--violet {
        background-color: #7e6795;
        color: white;
    }

    .ripple {
        animation: 2s cubic-bezier(0, 0, 0.2, 1) 0s normal forwards 1 running ripple;
        background-color: rgba(255, 255, 255, 0.4);
    }

    @keyframes ripple {
        0% {
            opacity: 1;
            transform: scale(0);
        }
        80% {
            transform: scale(1);
        }
        100% {
            opacity: 0;
        }
    }
}
</style>
