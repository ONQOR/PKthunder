<template>
    <div class="business-card">
      <h2>Select Business Card</h2>
      <div class="business-card__cards">
         <MiniatureCard v-for="(card, index) in cards" :key="index" :card="card" @clicked="clicked($event, index)"/>
      </div>
    </div>
</template>

<script>

export default {
  name: 'BusinessCard',
  props: {
    cards: Array
  },
  data () {
    return {
        clicked(event, index) {
           this.$emit("clicked", index);
        }
    }
  },
}
</script>