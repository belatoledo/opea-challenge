<template>
  <div>
    <form class="px-3">
      <div class="row mb-3">
        <label for="inputName" class="mb-1 text-xs text-primary">Nome</label>
        <div class="col-12">
          <input class="form-control" id="inputName">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputCnpj" class="mb-1 text-xs text-primary">CNPJ</label>
        <div class="col-12">
          <input type="number" class="form-control" id="inputCnpj">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputEmail3" class="mb-1 text-xs text-primary">E-mail</label>
        <div class="col-12">
          <input type="email" class="form-control" id="inputEmail3">
        </div>
      </div>
      <div class="d-flex flex-row justify-content-between">
        <button class="btn btn-outline-detail border border-rounded-3">
          <i class="bi bi-trash-fill text-default text-primary "></i>
        </button>
        <div class="d-flex gap-3">
          <button class="btn btn-outline-detail fw-medium">Cancelar</button>
          <button type="submit" class="btn btn-primary fw-medium">Cadastrar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ModalForm',
}
</script>

<style scoped lang="scss">
.input {
  width: 100%;
}
</style>