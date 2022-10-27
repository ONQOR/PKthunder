<template>
    <div>
        <h1>{{ blockData.title }}</h1>
        <img style="width: 200px" :src="'http://localhost:1337' + blockData.hero_image.data.attributes.url" />
    </div>
</template>

<script>

export default {
    name: 'HeroSection',
    props: {
        blockData: Array,
    },
    
    data(){
        return {

        }
    },

    methods: {
    }
}
</script>


