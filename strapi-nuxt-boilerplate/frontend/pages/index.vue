<template>
  <div class="pkthunder-login">
    <!-- <BlockBuilder v-for="(item, index) in this.blocks" :key="index" :blockComponent="item" /> -->
    <h1>
      welcome to PK thunder
    </h1>
    <p>please sign in to view and edit your details</p>

    <input type="text" placeholder="Name" v-model="name">

    <input type="text" placeholder="Password" v-model="password">

    <div class="pkthunder-login__button" v-on:click="accsessControl()">
      <p>login</p>
    </div>
    <img src="/images/pkThunder.jpg" />
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'HomePage', 
    data(){
      return {
        page: this.$route.params.page,
        pageID:'',
        blocks: '',
        name: '',
        password: '',
        theUserData: '',
      }
    },
    methods: {
      accsessControl(){
        console.log('click', this.user);
        axios.post('http://localhost:1337/api/auth/local', {
            identifier: this.name,
            password: this.password,
        })
        .then(response => {
            // Handle success.
            this.enter = true;
            this.theApiKey = 'Bearer ' + response.data.jwt
            console.log('enter', response );
            this.theUserData = response;
        })
        .catch(error => {
            // Handle error.
            this.error = true;
        });
      }
    },
    beforeMount(){
        require('@/assets/scss/login.scss');
    },
  }
</script>
