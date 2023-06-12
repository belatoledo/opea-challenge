<!-- eslint-disable no-undef -->
<template>
  <div>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content mx-auto">
          <div class="modal-header text-black opacity-25">
            <h1 class="modal-title px-3 text-md" id="exampleModalToggleLabel">Adicionar Empresa</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="p-3 border border-top-3">
            <form class="px-3" @submit.prevent="saveData">
              <div class="row mb-3">
                <label for="inputName" class="mb-1 text-xs text-primary">Nome</label>
                <div class="col-12">
                  <input class="form-control" id="inputName" v-model="enterprise.name" required>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputCnpj" class="mb-1 text-xs text-primary">CNPJ</label>
                <div class="col-12">
                  <input type="text" class="form-control" id="inputCnpj" v-model="enterprise.cnpj" required>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputEmail3" class="mb-1 text-xs text-primary">E-mail</label>
                <div class="col-12">
                  <input type="email" class="form-control" id="inputEmail3" v-model="enterprise.email" required>
                </div>
              </div>
              <div class="d-flex flex-row justify-content-end">
                <div class="d-flex gap-3">
                  <button type="reset" class="btn btn-outline-detail px-4 fw-medium" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" class="btn btn-primary px-4 fw-medium">Cadastrar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalForm',
  data() {
    return {
      enterprises: [],
      enterprise: {
        name: '',
        cnpj: '',
        email: ''
      }
    }
  },
  methods: {
    saveData() {
        this.$emit('add-new-enterprise', this.enterprise)
        this.cleanForm()
      }
    },
    cleanForm() {
      this.newEnterprise = {
        name: '',
        cnpj: '',
        email: ''
      }
    }
 }

</script>

<style scoped lang="scss">
@import '../scss/custom.scss';
.input {
  width: 100%;
}
</style>