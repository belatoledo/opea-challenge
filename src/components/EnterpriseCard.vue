<template>
  <div>
    <div v-for="data in dataList" :key="data.id" class="card mb-2 border border-secondary rounded-start-5 bg-white" >
      <div class="mobile-spacing mx-2 d-flex align-items-center justify-content-between text-secondary">
        <div class="d-flex align-items-center">
          <i class="bi bi-clipboard2-data-fill text-lg text-secondary border border-secondary rounded-circle ms-1 px-2"></i>
          <div class="mobile-spacing ms-4 d-flex flex-column text-start text-break">
            <p class="m-0 text-md">{{data.name}}</p>
            <p class="m-0">{{data.cnpj}} | <span class="text-xs">Email: {{data.email}}</span></p>
          </div>
        </div>
        <div class="d-flex gap-1 mobile-icons">
        <button class="btn btn-outline-border-opea border border-rounded-3">
          <i class="bi bi-pencil-fill text-default text-primary "></i>
        </button>
        <button class="btn btn-outline-border-opea border border-rounded-3">
          <i class="bi bi-trash-fill text-default text-primary"></i>
        </button>
      </div>
      </div>
    </div>
    </div>
</template>

<script>
import { api } from '../api'
export default {
  name: 'EntrepriseCard',

  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    api.get('/clients')
      .then((response) => {
        this.dataList = response.data
        console.log(this.dataList)
      })
      .catch((error) => {
        console.log(error)
      })
  }
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

.mobile-icons {
  @include small-iphone-only {
    display: flex;
    flex-direction: column;
    padding: 4px 0;
  }
}
</style>