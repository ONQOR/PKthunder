<template>
    <div class="app__container">
      <div class="container dark">
            <Logo dark />
            <BusinessCard v-if="stepper == 0" :cards="cards" @clicked="openProfile($event)" />
            <PersonProfile v-if="stepper == 1" :profile="cards[indexCard]"/>

      </div>
    </div>
</template>

<script>
import '../assets/scss/styles.scss'

export default {
  name: 'recipient',
  data () {
    return {
        stepper: 0,
        indexCard: 0,
        cards: [
            {
                name: 'Big Changus',
                company: 'Penguin Breeder',
                image: '',
                telephone: '0776969696969',
                email: 'Big.chungus69@gmail.com'
            },
            {
                name: 'Big Changus',
                company: 'Penguin Breeder',
                image: '',
                telephone: '0776969696969',
                email: 'Big.chungus69@gmail.com'
            },
            {
                name: 'Big Changus',
                company: 'Penguin Breeder',
                image: '',
                telephone: '0776969696969',
                email: 'Big.chungus69@gmail.com'
            },
        ]
    }
  },
  methods: {
      openProfile(index) {
          this.indexCard = index
          this.stepper = 1
      }
  }
}
</script>