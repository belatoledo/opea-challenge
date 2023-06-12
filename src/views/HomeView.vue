<template>
  <div class="bg-opea">
    <search-bar />

    <div class="btn-spacing mx-2">
      <button class="btn btn-outline-border-opea rounded-start-5 bg-opea d-flex flex-row align-items-center justify-content-start" type="button"> 
        <i class="bi bi-clipboard2-data-fill text-lg text-detail border border-detail rounded-circle px-2"></i>
        <span class="btn-text">
          <a class="text-detail text-center fw-medium text-decoration-none" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Adicionar empresa</a>
          <modal-form class="text-start" @add-new-enterprise="saveNewEnterprise" />
        </span> 
      </button>

      <enterprise-card v-for="enterprise in enterprises" :key="enterprise.id" :enterprise="enterprise" @removed-enterprise="removeEnterprise" class="mt-2"/>
    </div>

  </div>
</template>

<script>
import { api } from '../api'
import SearchBar from '@/components/SearchBar.vue';
import EnterpriseCard from '@/components/EnterpriseCard.vue';
import ModalForm from '@/components/ModalForm.vue';

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    EnterpriseCard,
    ModalForm
  },
  data() {
    return {
      enterprises: [],
      loadEnterprises: false
    };
  },
  methods: {
    getEnterprises() {
      api.get('/clients')
        .then((response) => {
          this.enterprises = response.data
          console.log(this.enterprises)
       })
        .catch((error) => {
          console.log(error)
        });
    },
    saveNewEnterprise(enterprise) {
      api.post('/clients', enterprise)
        .then(response => {
          this.enterprises.push(response.data)
        })
        .catch(error => {
          console.error(error)
        });
    },
    removeEnterprise(enterprise) {
      api.delete(`/clients/${enterprise.id}`)
        .then(() => {
          this.enterprises = this.enterprises.filter(e => e.id !== enterprise.id)
        })
        .catch(error => {
          console.error(error)
        });
    }
  },
  watch: {
    enterprises: {
      handler() {
        if (!this.loadEnterprises) {
          this.getEnterprises();
          this.loadEnterprises = true
        } else {
          this.loadEnterprises = false
        }
      },
      immediate: true,
      deep: true
    }
  },
  
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
