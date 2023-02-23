<template>
    <div class="app__container">
      <div class="container dark">
            <Logo dark />
            <ButtonLightMode />
            <h2>You’ve scanned:</h2>
            <div class="dotted-line border-dark"></div>
            <UserInfo :user="user"/>
            <ButtonSection :user="user"/>
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
                image: '',
                telephone: '0776969696969',
                email: 'Big.chungus69@gmail.com'
               },
    }
  },
  methods: {
  }
}
</script>