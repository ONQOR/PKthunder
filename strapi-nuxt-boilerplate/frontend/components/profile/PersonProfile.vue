<template>
    <div class="person-profile">
        <h2>Persons Profile</h2>
        <div class="person-profile__card">
             <div class="person-profile__card__top"></div>
             <div class="person-profile__card__line"></div>
             <div class="person-profile__card__bottom">
               <h2>{{profile.name}}</h2>
               <p>{{profile.company}}</p>
               <div class="contacts">
                    <p>{{profile.telephone}}</p>
                    <p>{{profile.email}}</p>
               </div>
             </div>
             <div class="person-profile__card__image" :style="'background-image: url(' + profile.image + ')'"></div>
        </div>
        <Button buttonText="View"/>
        <div class="person-profile__buttons">
           <Button buttonText="Edit"/>
           <Button buttonText="Delete"/>
        </div>
    </div>
</template>

<script>

export default {
  name: 'PersonProfile',
  props: {
    profile: Object
  },
  data () {
    return {
    }
  },
}
</script>