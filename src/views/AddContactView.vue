<script>
import { useAddContactStore } from '@/stores/addContact'
export default {
  name: 'addContact',
  setup() {
    const personneStore = useAddContactStore()
    return {
      personneStore,
    }
  },
  data() {
    return {
      perso: {
        nom: '',
        number: ''
      },
    }
  },
  methods: {
    isNumberValid(number) {
      const regex = /^[0-9]{10}$/;
      return regex.test(number) && (number[1] === '6' || number[1] === '7');
    },
    ajoutPerso() {
      if (this.isNumberValid(this.perso.number)) {
        this.personneStore.ajoutPersonne(this.perso);
        this.perso = {
          nom: '',
          number: ''
        };
      } else {
        alert('Le numero n est pas valide il doit soit manquer des chiffres ou si non votre ne commence pas par 06 ou 07.');
      }
    }
  }
}
</script>

<template>
  <div class="addContact-global-content">
    <form @submit.prevent="ajoutPerso()">
      <div class="adding">
        <h2>Name</h2>
        <input type="text" v-model="perso.nom">
      </div>
      <div class="adding">
        <h2>Number</h2>
        <input type="text" v-model="perso.number">
      </div>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>
<style scoped>
  .addContact-global-content{
    border: 3px solid rgb(245, 155, 20);
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    gap: 60px;
  }
  .adding:first-child{
    justify-content: center;
  }
  .adding{
    display: flex;
    flex-direction: column;
  }
  input{
    align-self: flex-start;
    border: none;
    border-bottom: 2px solid white(245, 155, 20);
    width: 140%;
  }
  button{
    border: 3px solid white(255, 115, 0);
    background-color: white(245, 155, 20);

    font-size: 24px;
  }
</style>
