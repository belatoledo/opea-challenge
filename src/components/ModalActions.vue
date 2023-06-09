<!-- eslint-disable no-undef -->
<template>
  <div>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content mx-auto">
          <div class="modal-header text-black opacity-25">
            <h1 class="modal-title px-3 text-md" id="exampleModalToggleLabel">Cadastrar empresa</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="p-3 border border-top-3">
            <ModalForm />
          </div>
        </div>
      </div>
    </div>
    <a class="text-detail text-center fw-medium text-decoration-none" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Adicionar empresa</a>
  </div>
</template>

<script>
import ModalForm from './ModalForm.vue';

export default {
  name: 'ModalActions',
  components: {
    ModalForm,
  }

}
</script>

<style scoped lang="scss">
@import '../scss/custom.scss'
</style>