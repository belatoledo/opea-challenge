<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="mx-4 container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/assets/logo-opea.svg" alt="Logo" width="108" height="32" class="d-inline-block align-text-top">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="navbar offcanvas-header">
            <img src="@/assets/logo-opea.svg" alt="Logo" width="108" height="32" class="d-inline-block align-text-top">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item d-flex justify-content-end">
              <a href="#" class="mt-1 text-default fw-medium text-detail text-decoration-none">Nome de usuário
                <i class="bi bi-person-circle ms-1 text-primary opacity-50 text-lg"></i>
              </a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import '../scss/custom.scss';

.navbar {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
