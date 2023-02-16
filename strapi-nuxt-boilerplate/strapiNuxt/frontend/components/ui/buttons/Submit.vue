<template>
    <button @click="display()">Submit</button>
</template>
  
<script>
    export default {
        name: "Submit",
        props: {
            inputValue: String
        },
        methods: {
            display() {
                console.log( this.inputValue )
            }
        }
    }
</script>
  