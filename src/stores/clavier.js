import {defineStore} from "pinia"

export const useClavierStore = defineStore('clavier', {
    state:()=>({
        clavierText : "",
        errorMessage: ""
    }),
    actions:{
        incrementClavier(clavier){
            if (this.clavierText.replace(/ /g, '').length < 10) {
                if (this.clavierText.replace(/ /g, '').length % 2 === 0 && this.clavierText.length > 0) {
                    this.clavierText += " ";
                }
                this.clavierText += clavier;
            } else {
                this.errorMessage = "Tu ne peux ajouter plus de 10 charactere.";
            }
        },
        resetClavier(){
            this.clavierText = "";
            this.errorMessage = "";
        }
    }
})