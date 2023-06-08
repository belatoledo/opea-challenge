<template>
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control bg-white" type="search" placeholder="Buscar empresa..." aria-label="Search">
      <button class="btn" type="submit">
        <img src="../assets/search-icon.svg" alt="Buscar">
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
}
</script>

<style scoped lang="scss">
@import '../scss/custom.scss';
.container-fluid {
  margin-top: 30px;
}

.form-control {
  height: 28px;

  @include tablet-landscape-up {
    width: 280px;
    position: absolute;
    right: 45px;
  }
}
.btn {
  position: absolute;
  display: flex;
  align-self: center;
  right: 6px;
  border: none;

  @include tablet-landscape-up {
    top: 88px;
    right: 45px;
  }
}
</style>