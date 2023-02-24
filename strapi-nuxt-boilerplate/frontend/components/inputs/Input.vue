<template>
    <div class="input">
        <label v-if="this.label">{{ this.label }}</label>
        <input @input="filled()" v-model="text"/>
    </div>

</template>

<script>
    export default {
        name: "Input",
        props: {
            label: String,
        },
        data () {
            return {
                text: "default",
            }
        },
        methods: {
            filled() {
                this.$emit('filled', this.text)
            }
        }
    }
</script>


