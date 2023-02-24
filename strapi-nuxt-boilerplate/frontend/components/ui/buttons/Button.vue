<template>
    <button :class="square ? 'square' : null" @click="clicked()">{{buttonText}}</button>
</template>
  
<script>
    export default {
        name: "Button",
        props: {
            buttonText: String,
            square: Boolean
        },
        methods: {
            clicked() {
               this.$emit("clicked");
            }
        }
    }
</script>
  