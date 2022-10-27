<template>
  <BlockBuilder :ID="this.pageID" />
</template>

<script>
export default {
    
  data(){
    return {
      page: this.$route.params.cat.page,
      cat: this.$route.cat,
      postTypeSlug: 'blogs'
    }
  },
  methods: {
    // http://localhost:1337/api/blogs?filter[slug]=great-news this will get iq by slug
    // http://localhost:1337/api/blogs/1?categories?filters[slug]=news
    async asyncData() {
      const thePageID = await fetch(
          'http://localhost:1337/api/' + this.postTypeSlug + '?filter[slug]=' + this.page
          // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
      ).then((res) => {
        // can set up 404 redirection here
        return res.json();
      });
      
      var pageID = thePageID.data[0].id;

      const thePostDataCat = await fetch(
          'http://localhost:1337/api/' + this.postTypeSlug +  '/' + pageID + '?categories?filters[slug]=' + cat 
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
