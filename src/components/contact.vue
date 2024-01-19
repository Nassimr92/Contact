<script>
import { useAddContactStore } from '@/stores/addContact'
export default{
    name: 'contact',
    setup(){
        const personneStore = useAddContactStore()
        return{
          personneStore,
        }
    },
    computed:{
        contacts(){
            return this.personneStore.personnes
        }
    },
    
}
</script>
<template>
    <div class="contact-single" v-for="contact in contacts">
        <h2>{{ contact.nom }}</h2>
        <p>{{ contact.number }}</p>
        
    </div>
</template>
<style scoped>
    .contact-single{
    display: flex;
    justify-content: space-between;
  }
  h2{
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    color: white;
    letter-spacing: 1.04px;
  }
  p{
    font-size: 20px;
    font-weight: 500;
    color: grey;
    letter-spacing: 1.04px;
  }
  img{
    width: 5%;
  }
</style>
