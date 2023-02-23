<template>
    <div class="button-light-mode" @click="setActive()">
        <div></div>
        <LightOff v-if="isActive == false" />
        <LightOn v-if="isActive == true" />
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
        this.isActive ? sitebody.classList.add("theme-light") : sitebody.classList.remove("theme-light");
        this.$emit("active", this.isActive);
      },
  }
}
</script>