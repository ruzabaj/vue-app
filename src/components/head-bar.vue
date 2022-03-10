<template>
  <div class="d-flex">
    <rightside></rightside>
       <!-- <try></try> -->
       
  </div>
</template>
    

<script>
import RightSide from './rightside.vue'

  export default {
    name:'HeadBar',
     
    data() {
      return {
        query:'',
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    
    methods: {
      
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }, 
    components :{
      'rightside':RightSide
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
