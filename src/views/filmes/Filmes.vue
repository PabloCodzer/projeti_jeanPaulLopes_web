<script setup>
  import Futer from '/src/components/Footer.vue'
  import {ref,onMounted } from "vue";
  import {db} from '/src/firebase.js'
  import {getDocs, collection, deleteDoc, doc} from "firebase/firestore"

  // armazena coisas nesse arraylist
  const filmesTodos = ref([])

  onMounted(async()=>{
    let filmesCollection = await getDocs(collection(db,'produtos'))
    filmesCollection.forEach((filme)=>{
        filmesTodos.value.push({...filme.data(), id: filme.id})
    })
  });
</script>

<template>
  <body>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Lista de todos os Filmes <RouterLink to="/cadastrar" class="btn btn-primary float-end">Cadastrar</RouterLink></h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <!-- <th>id</th> -->
              <th>Nome</th>
              <th>Descrção</th>
              <th>Quantidade Disponível</th>
              <th>Preço</th>
              <th> AÇÂO </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(filme, id) in filmesTodos" :key="filme.id">
              
              <!-- <td>{{ filme.id }}</td> -->
              <td>{{ filme.nome }}</td>
              <td>{{ filme.descricao }}</td>
              <td>{{ filme.quantidade }}</td>
              <td>{{ filme.preco }}</td>
              <td>
                <RouterLink to="/editar" class="btn btn-warning m-2">Editar</RouterLink>
                <button @click="excluir_filmeLista( filme.id )" to="/filmes/excluir" class="btn btn-danger m-2">Exclui</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </body>
  <Futer></Futer>
</template>
  
  <style>
  
  </style>
  
<script>
 async function excluir_filmeLista(id)
  {
    alert(id)
    await deleteDoc(doc(db,'produtos', id));
    location.reload();
  }
</script>