<template>
    <div class="app__container">
        <SignIn />
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
  name: 'login',
  data () {
    return {
    }
  },
}
</script>
