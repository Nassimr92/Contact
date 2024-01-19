<script>
import { useJournalStore } from '@/stores/journal'
export default{
    name: 'CartePerso',
    setup(){
        const journalStore = useJournalStore()
        return{
          journalStore,
        }
    },
    computed:{
        calls(){
            return this.journalStore.callsText
        }
    },
    
}
</script>
<template>
    <div class="journal-single" v-for="call in calls">
      <h2>{{ call.nom }}</h2>
      <p>{{ call.date }}</p>
      
    </div>
</template>
<style scoped>
    .journal-single{
    display: flex;
    flex-direction: column;
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
