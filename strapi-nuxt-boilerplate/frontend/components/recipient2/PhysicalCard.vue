<template>
    <div class="physical-card">
       <div class="physical-card__top">
           <p>{{user.name}}</p>
           <p>For all your penguin breeder needs</p>
           <img :src="cardImage" />
       </div>
       <div class="physical-card__bottom">
           <p>{{user.telephone}}</p>
           <p>{{user.email}}</p>
           <div class="qr" :style="'background-image: url(' + qrImage + ')'"></div>
       </div>
    </div>
</template>

<script>

export default {
  name: 'PhysicalCard',
  props: {
      user: Object
  },
  data () {
    return {
      qrImage: require("~/static/images/qr.png"),
      cardImage: require("~/static/images/pinguins.png"),
    }
  },
  mounted() {
  }
}
</script>