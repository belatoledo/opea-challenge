<template>
  <div id="app" class="bg-opea">
    <NavBar />
    <router-view class="px-2"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
  }
}
</script>

