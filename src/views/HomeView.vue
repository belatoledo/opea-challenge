<template>
  <div class="bg-opea">
    <NavBar msg="Welcome to Your Vue.js App"/>
    <SearchBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    SearchBar
}
}
</script>
