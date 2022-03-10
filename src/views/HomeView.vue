<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HeadBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadBar from '@/components/head-bar.vue'

export default {
  name: 'headBar',
  components: {
   HeadBar
  }
}
</script>
