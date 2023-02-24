<template>
    <svg @click="clicked()" class="arrow-left" width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9.5H27M27 9.5L18.5 1M27 9.5L18.5 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script>
export default {
    name: 'Arrow',
    props: {
    },
    methods: {
        clicked() {
            this.$emit("clicked")
        }
    }
}
</script>