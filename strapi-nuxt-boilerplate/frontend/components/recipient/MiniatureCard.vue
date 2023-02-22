<template>
    <div @click="clicked()" class="miniature-card">
       <div class="miniature-card__top"></div>
       <div class="miniature-card__bottom">
          <h3>{{card.name}}</h3>
          <p>{{card.company}}</p>
       </div>
       <div class="miniature-card__image" :style="'background-image: url(' + card.image + ')'">
       </div>
    </div>
</template>

<script>

export default {
  name: 'MiniatureCard',
  props: {
     card: Object
  },
  data () {
    return {
    }
  },
  methods: {
      clicked() {
          this.$emit("clicked");
      }
  }
}
</script>