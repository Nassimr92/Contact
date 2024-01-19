import {defineStore} from "pinia"

export const useJournalStore = defineStore('phone', {
    state:()=>({
        callsText : [
            {
                nom:'Nuketon',
                date: "2025-12-10 12:12:12",
            },
            {
              nom:'Numero inconnu',
              date: "2024-1-1 00:00:01",
            }, 
            {
              nom:'Franck',
            date: "2023-31-12 23:59:59",
            }
          ],
    }),
    actions:{
        appel(phone){
            this.callsText.push(phone)
        }
    }
})