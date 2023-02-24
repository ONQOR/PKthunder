<template>
    <div class="app__container">
      <div class="container dark">
            <Logo dark />
            <BusinessCard v-if="stepper == 0" :cards="cards" @clicked="openProfile($event)" />
            <div v-if="stepper == 1">
                <PersonProfile :profile="cards[indexCard]"/>
                <Arrow @clicked="backToCards($event)"/>
            </div>


      </div>
    </div>
</template>

<script>
import '../assets/scss/styles.scss'

export default {
  name: 'profile',
  data () {
    return {
        stepper: 0,
        indexCard: 0,
        cards: [
            {
                name: 'Big Changus',
                company: 'Penguin Breeder',
                image: require("~/static/images/image.png"),
                telephone: '0776969696969',
                email: 'Big.chungus69@gmail.com',
            },
            {
                name: 'Red Changus',
                company: 'Penguin Changus',
                image: require("~/static/images/image.png"),
                telephone: '0789898989969',
                email: 'Red.chungus69@gmail.com'
            },
            {
                name: 'Blue Changus',
                company: 'Penguin Herd',
                image: require("~/static/images/image.png"),
                telephone: '0766666696969',
                email: 'Blue.chungus69@gmail.com'
            },
        ]
    }
  },
  methods: {
      openProfile(index) {
          this.indexCard = index
          this.stepper = 1
      },
      backToCards() {
          this.stepper = 0
      }

  }
}
</script>