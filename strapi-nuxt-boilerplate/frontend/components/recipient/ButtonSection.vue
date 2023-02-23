<template>
    <div class="button-section">
       <h2>Would you like to:</h2>
       <div class="button-section__buttons">
         <Button :buttonText="'Visit ' + lastName + ' Employee Page'" square />
         <Button :buttonText="'Visit ' + lastName + ' LinkedIn'" square />
         <Button :buttonText="'Add ' + lastName + ' to Contacts'" square />
         <Button buttonText="Add Business Card to Wallet" square />
         <Button buttonText="Arrange a Meeting" square />
         <Button :buttonText="'Visit the ' + user.company + ' Website'" square />
       </div>
    </div>
</template>

<script>

export default {
  name: 'ButtonSection',
  props: {
      user: Object
  },
  data () {
    return {
        lastName: ""
    }
  },
  mounted() {
    let lName = this.user.name.split(" ");
    this.lastName = lName[lName.length - 1];
  }
}
</script>