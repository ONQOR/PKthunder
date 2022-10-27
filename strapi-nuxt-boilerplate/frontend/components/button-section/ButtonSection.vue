<template>
    <div class="button-section">
       <h2>{{blockData.subtitle}}</h2>
        <div class="dotted-line border-light"></div>
        <Card />
       <h1>{{blockData.title}}</h1>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
    name: 'Button Section',
    components: {
        VueMarkdown
    },
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


