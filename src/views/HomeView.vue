<template>
  <div class="bg-opea">
    <SearchBar />

    <div class="btn-spacing mx-2">
      <button class="btn btn-outline-border-opea rounded-start-5 bg-opea d-flex flex-row align-items-center justify-content-start" type="button"> 
        <i class="bi bi-clipboard2-data-fill text-lg text-detail border border-detail rounded-circle px-2"></i>
        <span class="btn-text text-detail fw-medium">Adicionar empresa</span> 
      </button>

      <EnterpriseCard class="mt-2"/>
    </div>

    <OpenModal class="mt-5" />

  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import EnterpriseCard from '@/components/EnterpriseCard.vue';
import OpenModal from '@/components/OpenModal.vue';

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    EnterpriseCard,
    OpenModal
  }
}
</script>

<style scoped lang="scss">
@import '../scss/custom.scss';
.btn {
  height: 56px;
  min-width: 100%;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.btn-text {
  margin: 0 auto;
}
</style>
