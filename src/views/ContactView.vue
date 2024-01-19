<script>
import contact from '../components/contact.vue'

  export default{
    name: 'ContactView',
    components:{
      contact,
    },
    methods:{
        adds(){
            window.location.href = "/addContact"
        }
    }
}
</script>

<template>
  <div class="contact-global-content">
    <button @click="adds()">+</button>
    <div class="contact-part">
      <contact />
    </div>
  </div>
</template>

<style scoped>
  .contact-global-content{
    position: relative;
    border: 3px solid rgb(245, 155, 20);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .contact-part{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  button{
    width: 50px;
    height: auto;
    background-color: orange;
    align-self: end;
    font-size: 24px;
  }
</style>
