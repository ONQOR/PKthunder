<template>
  <div>
    <Header />
    <!-- <BlockBuilder v-for="(item, index) in this.blocks" :key="index" :blockComponent="item" /> -->
  </div>
</template>

<script>
import '~/assets/scss/styles.scss'
import axios from 'axios';
export default {
  name: 'HomePage', 
  data(){
    return {
      page: this.$route.params.page,
      pageID:'',
      blocks: ''
    }
  },
  methods: {
    async asyncData() {
      const thePageID = await fetch(
          'http://localhost:1337/api/pages?filters[isHome]=true'
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
      if(thePageData.data.attributes.dynamic_content){
        this.blocks = thePageData.data.attributes.dynamic_content
      }
      // console.log(this.$router.params);
    }
  },

  mounted(){
    this.asyncData();
  }
  
}
</script>
