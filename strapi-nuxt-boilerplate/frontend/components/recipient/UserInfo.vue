<template>
    <div class="user-info">
        <div class="user-info__details">
            <div class="user-info__details__image" :style="'background-image: url(' + user.image + ')'"></div>
            <div class="user-info__details__name">
                <h3>{{user.name}}</h3>
                <p>{{user.company}}</p>
            </div>
        </div>
        <div class="user-info__contacts">
            <p>{{user.email}}</p>
            <p>{{user.telephone}}</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'UserInfo',
  props: {
      user: Object
  },
  data () {
    return {

    }
  },
}
</script>