<template>
  <div> football </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'InspirePage', 
  mounted() {
    const options = {
      url: 'http://localhost:1337/api/articles',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'lication/json;charset=UTF-8'
      },
      data: {
        name: 'David',
        age: 45
      }
    };

    axios(options)
      .then(response => {
        console.log(response);
      });
  },
  
}
</script>
