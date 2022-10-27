<template>
  <BlockBuilder :ID="this.pageID" />
</template>

<script>
export default {
    
  data(){
    return {
      page: this.$route.params.page,
      pageID:''
    }
  },
  methods: {
    async asyncData() {
      const thePageID = await fetch(
          'http://localhost:1337/api/pages?filters[slug]=' + this.page
          // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
      ).then((res) => {
        // can set up 404 redirection here
      return res.json();
      });
      var pageID = thePageID.data[0].id;

      const thePageData = await fetch(
          'http://localhost:1337/api/pages/' + pageID + '?populate[dynamic_content][populate]=*'
        ).then((res) => {
        // can set up 404 redirection here
        return res.json();
      });

      console.log('thePageData', thePageData);
      // console.log(this.$router.params);
    }
  },

  mounted(){
    this.asyncData();
  }
  
}
</script>
