<template>
    <div class="card">
        <div class="card__info">
            <div class="image"></div>
            <div class="text">
                <h3>Big Chungus</h3>
                <p>Penguin Breeder</p>
            </div>
        </div>
        <div class="card__contact">
            <p>BigChungus@onqor.co.uk</p>
            <p>0778236382112</p>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
    name: 'Card',
    components: {
        VueMarkdown
    },
    props: {
        card: Array,
    },
    
    data(){
        return {

        }
    },

    methods: {
    }
}
</script>