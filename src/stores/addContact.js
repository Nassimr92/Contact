import {defineStore} from "pinia"

export const useAddContactStore = defineStore('personne', {
    state:()=>({
        personnes : [
            {
              nom:'Franck',
              number:'0779138362'
            }, 
            {
              nom:'Jett',
              number:'0928392890'
            },
            {
              nom:'Flanck',
              number:'9890293029'
            }
          ],
    }),
    actions:{
        ajoutPersonne(personne){
            this.personnes.push(personne)
        }
    }
})