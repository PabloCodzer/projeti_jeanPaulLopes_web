<script setup>
  import Futer from '/src/components/Footer.vue'
  import {ref,onMounted } from "vue";
  import {db} from '/src/firebase.js'
  import {getDocs, collection, addDoc ,deleteDoc, doc} from "firebase/firestore"
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { fas } from '@fortawesome/free-solid-svg-icons';

  // armazena coisas nesse arraylist
  const filmesTodos = ref([])

  const carrinhoExportacao = ref([])

  onMounted(async()=>{
    let filmesCollection = await getDocs(collection(db,'produtos'))
    filmesCollection.forEach((filme)=>{
        filmesTodos.value.push({...filme.data(), id: filme.id})
    })
  });

async function adicionar_no_carrinho(filme)
{
  
  const carrinho = ref({
    fkid: filme.id,
    nome: filme.nome,
    usuario: "nome_usuario"
  });

  
  carrinhoExportacao.value.push(carrinho)
  alert("Item Adicionado ao carrinho");
  
  carrinhoExportacao.value.forEach((item) => {
    console.log(item);
  });

  // alert(carrinhoExportacao.value.length)
  addDoc(collection(db, 'carrinho'), carrinho.value)
 
}

</script>

<template>
  <main>
    <div class="container mt-5 custom-border ">
    <h1> Lista de Todos os filmes </h1>
    <div class="row mt-5" >
           
      <div class="col-md-4 mt-2 mb-2" v-for="(filme, id) in filmesTodos" :key="filme.id">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Card Image">
          <div class="card-body">
            <h5 class="card-title">{{filme.nome}} </h5>
            <p class="card-text">{{ filme.descricao  }}</p>
            <div class="container mt-5 col-sm-12 mb-5">
              <div class="card">
                <div class="card-header text-center">  
                  <h1 class="col-sm-12"><p class="card-text font-italic fs-5 text-end">Preço: R$  {{filme.preco }}  </p></h1>
                </div>
                <button class="col-sm-12 mb-2 btn btn-outline-success" @click="adicionar_no_carrinho(filme)">adicionarao carrinho</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5"></div>
  <Futer />
 
  </main>
</template>

<style>

    .custom-border {
      border: 1px solid black;
      padding: 20px;
      border-radius: 10px;
    };

</style>