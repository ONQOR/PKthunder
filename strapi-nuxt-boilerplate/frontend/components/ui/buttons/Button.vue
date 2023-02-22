<template>
    <button @click="clicked()">{{buttonText}}</button>
</template>
  
<script>
    export default {
        name: "Button",
        props: {
            buttonText: String
        },
        methods: {
            clicked() {
               this.$emit("clicked");
            }
        }
    }
</script>
  