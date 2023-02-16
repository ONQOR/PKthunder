<template>
    <div class="app__container">
        <!-- <Nuxt /> -->
        <div class="container">
          <Logo />
          <Input />
          <Input />
          <Input />

          <ImgColor />
          <Card /> 

        </div>
    </div>
</template>

<script>
import '../assets/scss/styles.scss'

export default {
  name: 'DefaultLayout',
  data () {
    return {
    }
  }
}
</script>
