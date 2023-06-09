<template>
  <div class="card border border-secondary rounded-start-5 bg-white">
    <div class="mobile-spacing mx-2 d-flex align-items-center text-secondary">
      <i class="bi bi-clipboard2-data-fill text-lg text-secondary border border-secondary rounded-circle ms-1 px-2"></i>
      <div class="mobile-spacing ms-4 d-flex flex-column text-break">
      <p class="m-0 text-md">Nome da empresa</p>
      <p class="m-0">CNPJ: 00.000.0001-00 - <span class="text-xs">Email: opea@opea.com</span></p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'EntrepriseCard',
}
</script>

<style scoped lang="scss">
@import '../scss/custom.scss';

.card {
  height: 56px;
  min-width: 100%;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  @include smaller-phones {
    height: max-content;
  }

  @include phone-only {
    height: max-content;
  }
}

.mobile-spacing {
  margin: 3px;

  @include smaller-phones  {
    margin: 0px;
  }
}
</style>