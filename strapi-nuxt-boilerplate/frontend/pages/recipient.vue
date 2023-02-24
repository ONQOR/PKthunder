<template>
    <div class="app__container">
      <div class="container dark">
            <Logo dark />
            <ButtonLightMode @active="active($event)"/>
            <h2>You’ve scanned:</h2>
            <div class="dotted-line" :class="lightMode ? 'border-dark' : 'border-light'"></div>
            <UserInfo :user="user"/>
            <ButtonsSection :user="user"/>
      </div>
    </div>
</template>

<script>

export default {
  name: 'recipient',
  data () {
    return {
        user: {
                name: 'Big Changus',
                company: 'Penguin Breeder',
                image: require("~/static/images/image.png"),
                telephone: '0776969696969',
                email: 'Big.chungus69@gmail.com'
               },
        lightMode: true
    }
  },
  methods: {
      active(event) {
          console.log(event, 'srdthfjgkhljgfgjlkjggljkgkug;uk;ku')
          this.lightMode = event
      }
  }
}
</script>