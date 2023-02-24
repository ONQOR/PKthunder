<template>
    <div class="app__container">
      <div class="container dark recipient2">
            <Logo dark />
            <ButtonLightMode @active="active($event)"/>
            <h2>You’ve scanned:</h2>
            <UserInfo :user="user"/>
            <div class="dotted-line" :class="lightMode ? 'border-dark' : 'border-light'"></div>
            <ButtonsSection :user="user"/>
            <PhysicalCard :user="user"/>
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
          this.lightMode = event
      }
  }
}
</script>