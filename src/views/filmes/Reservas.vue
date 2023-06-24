<script setup>
  import Futer from '/src/components/Footer.vue'
  import {ref,onMounted } from "vue";
  import {db} from '/src/firebase.js'
  import {getDocs, collection, deleteDoc, doc, query, where } from "firebase/firestore"

  // armazena coisas nesse arraylist
  const filmesTodos = ref([])
  const filmeCarrinho = ref([])

  var valor_total = 0;

  onMounted(async()=>{
    let filmesCarrinhoCollection = await getDocs(collection(db,'carrinho'))
    filmesCarrinhoCollection.forEach((filme)=>{
        filmesTodos.value.push({...filme.data(), id: filme.id}) 
    });
    filmesTodos.value.forEach((doc) => {
        console.log(doc.fkid)
        busca_dados_carrinho(doc.nome)
    });
   
  });

async function busca_dados_carrinho(nome)
{
    const querySnapshot = await getDocs(query(collection(db, "produtos"), where('nome', "==", nome)));
    querySnapshot.forEach((filme) => {
        console.log(filme.id, " => ", filme.data());
        filmeCarrinho.value.push({...filme.data(), id: filme.id}) 
    });

    filmeCarrinho.value.forEach((doc) => {
        console.log(doc.preco)
        valor_total = valor_total +(doc.preco/1)
        
    });
}


 async function excluir_filmeLista(nome)
  {
    let id_carrinho;
    const querySnapshot = await getDocs(query(collection(db, "carrinho"), where('nome', "==", nome)));
    querySnapshot.forEach((filme) => {
        //console.log(filme.id, " => ", filme.data());
      //  filmeCarrinho.value.push({...filme.data(), id: filme.id}) 
      console.log(filme.id);
      id_carrinho = filme.id;
    });
    await deleteDoc(doc(db,'carrinho',id_carrinho));
    location.reload();
  }

</script>


<template>
    <body>
      <div class="container mt-5 custom-border ">
      <h1> Valor Total do Carrinho: R$  {{valor_total }} </h1>
      <h1 class="col-sm-12"><p class="card-text font-italic fs-5 text-end"> </p></h1>
      <div class="row mt-5" >
             
        <div class="col-md-4 mt-2 mb-2" v-for="(filme, id) in filmeCarrinho" :key="filme.id">
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
                  <button class="col-sm-12 mb-2 btn btn-outline-danger" @click="excluir_filmeLista(filme.nome)">remover carrinho</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5"></div>
    <Futer />
   
    </body>
  </template>
  
  <style>
  
      .custom-border {
        border: 1px solid black;
        padding: 20px;
        border-radius: 10px;
        min-height: 100vh;
      };
      body {
      min-height: 1000vh;
      display: flex;
      flex-direction: column;
    }
  </style>