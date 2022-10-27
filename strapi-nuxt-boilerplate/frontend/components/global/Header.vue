<template>
    <div class="header">
        <img :src="this.$store.state.apiroute.url + logoOnqorUrl" :alt="logoOnqorAlt"/>
    </div>
</template>

<script>

export default {
    name: "Header",
    props: {
    },
    data() {
        return {
            logoOnqorUrl: "",
            logoOnqorAlt: "",
        };
    },
    methods: {
        async asyncData() {
            const header = await fetch(this.$store.state.apiroute.url + "/api/header" + '?populate=deep,5'
            ).then((res) => {
                return res.json();
            });
            this.logoOnqorUrl = header.data.attributes.logo.data.attributes.url;
            this.logoOnqorAlt = header.data.attributes.logo.data.attributes.alternativeText;
        }
    },
    mounted() {
        this.asyncData();
    },
}
</script>


