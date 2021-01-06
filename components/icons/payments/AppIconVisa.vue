<template>
    <g>
        <defs>
            <linearGradient
                id="visa-color-1"
                gradient-units="userSpaceOnUse"
                x1="3.82"
                y1="12.25"
                x2="34.87"
                y2="12.25"
            >
                <stop offset="0" style="stop-opacity:1; stop-color:#1A1E5A" />
                <stop offset="0.45098" style="stop-opacity:1; stop-color:#122D98" />
                <stop offset="1" style="stop-opacity:1; stop-color:#122D98" />
            </linearGradient>
            <linearGradient id="visa-color-2" gradient-units="userSpaceOnUse" x1="-0" y1="1.75" x2="39.04" y2="1.75">
                <stop offset="0" style="stop-opacity:1; stop-color:#1A1E5A" />
                <stop offset="1" style="stop-opacity:1; stop-color:#122D98" />
            </linearGradient>
            <linearGradient id="visa-color-3" gradient-units="userSpaceOnUse" x1="-0" y1="22.76" x2="39.04" y2="22.76">
                <stop offset="0" style="stop-opacity:1; stop-color:#FA9B00" />
                <stop offset="1" style="stop-opacity:1; stop-color:#F4CA12" />
            </linearGradient>
        </defs>
        <g>
            <path
                class="color-1"
                d="M19.88 10.44c-0.02,1.4 1.25,2.17 2.19,2.64l0 0c0.98,0.48 1.31,0.78 1.3,1.21l0 0c-0.01,0.65 -0.78,0.94 -1.5,0.95l0 0c-1.26,0.02 -1.99,-0.34 -2.58,-0.61l0 0 -0.46 2.12c0.59,0.27 1.67,0.5 2.79,0.52 2.64,0 4.36,-1.3 4.37,-3.32l0 0c0.01,-2.56 -3.54,-2.7 -3.52,-3.84l0 0c0.01,-0.35 0.34,-0.72 1.06,-0.81l0 0c0.36,-0.05 1.35,-0.08 2.48,0.43l0 0 0.44 -2.06c-0.6,-0.22 -1.38,-0.43 -2.35,-0.43l0 0c-2.48,0 -4.22,1.32 -4.24,3.21zm10.82 -3.03c-0.48,0 -0.89,0.28 -1.07,0.71l0 0 -3.76 8.99 2.63 0 0.52 -1.45 3.22 0 0.31 1.45 2.32 0 -2.03 -9.7 -2.14 0zm0.37 2.62l0.76 3.64 -2.08 0 1.32 -3.64zm-14.38 -2.62l-2.07 9.7 2.51 0 2.07 -9.7 -2.51 0zm-3.71 0l-2.61 6.6 -1.06 -5.61c-0.12,-0.63 -0.61,-0.99 -1.16,-0.99l0 0 -4.27 0 -0.06 0.28c0.87,0.19 1.87,0.5 2.47,0.83l0 0c0.37,0.2 0.48,0.38 0.6,0.85l0 0 2 7.74 2.65 0 4.07 -9.7 -2.64 0z"
            />
            <polygon class="color-2" points="39.04,3.5 39.04,0 -0,0 -0,3.5 " />
            <polygon class="color-3" points="39.04,24.51 39.04,21.01 -0,21.01 -0,24.51 " />
        </g>
    </g>
</template>

<script>
export default {
    data: () => ({
        id: 'visa',
        viewBox: '-0.5 -1 40 26.5',
    }),
};
</script>

<style lang="postcss">
.icon-visa {
    .color-1 {
        fill: url(#visa-color-1);
    }
    .color-2 {
        fill: url(#visa-color-2);
    }
    .color-3 {
        fill: url(#visa-color-3);
    }
}
</style>
