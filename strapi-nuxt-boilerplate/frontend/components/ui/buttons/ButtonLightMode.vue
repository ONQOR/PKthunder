<template>
    <div class="button-light-mode" @click="setActive()">
        <div></div>
        <LightOff v-if="isActive == true" />
        <LightOn v-if="isActive == false" />
    </div>
</template>

<script>

export default {
  name: 'ButtonLightMode',
  props: {
     card: Object
  },
  data () {
    return {
      isActive: true
    }
  },
  methods: {
      setActive() {
        this.isActive = !this.isActive;
        let sitebody = document.body;
        this.isActive ? sitebody.classList.remove("theme-light") : sitebody.classList.add("theme-light");
        this.$emit("active", this.isActive);
      },
  }
}
</script>