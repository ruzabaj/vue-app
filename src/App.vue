<template>
  <div id="app">
    <header class="d-flex">
      <link rel="shortcut icon" href="susankya logo 1.svg " type="image/x-icon">
      <right-side></right-side>
      <side-bar></side-bar>
    </header>
    <div class="app-main-container" :class="toggleStatus ? 'toggle-active-container': ''">
      <router-view/>
    </div>
  </div>
</template>

<script>
import RightSide from './components/rightside.vue'
import SideBar from './components/side-bar.vue'

export default {
  components: {
    RightSide,
    SideBar,
  },
  data: () => ({
    toggleStatus: false,
  }),
  created() {
    this.$bus.on('toggle-status', (status) => {
      this.toggleStatus = status;
    })
  },
  destroyed() {
    this.$bus.off('toggle-status');

  }
}
</script>
<style >
/* @import '../src/css/sidebar.css'; */

.no-underline{
  text-decoration: none !important;
}
.centered{
  display: flex;
  text-align: center;
  align-items: center;
}

.app-main-container.toggle-active-container {
  padding-left: 200px;
}

</style>
