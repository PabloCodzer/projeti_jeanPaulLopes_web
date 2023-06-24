<script setup>
import Futer from '/src/components/Footer.vue'
import { Alert } from 'bootstrap';
import {db} from '/src/firebase.js';
import {collection, addDoc, doc } from "firebase/firestore";
import {v4 as uuidv4} from 'uuid';
import { ref } from 'vue';



async function addTODO()
{

  var nome = document.getElementById("nome").value;
  var descricao = document.getElementById("descricao").value;
  var quantidade = document.getElementById("quantidade").value;
  var preco = document.getElementById("preco").value;

  const registro = ref({
    id: uuidv4(),
    nome: nome,
    descricao: descricao,
    quantidade: quantidade,
    preco: preco
  })
  addDoc(collection(db, 'produtos'), registro.value)
  console.log(registro.value);
}

</script>

<template>
    <main>
      <body>
      <div class="container mt-5 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h2>Adicionar Filme</h2>
            <div class="card-body">
              
            <form @submit.prevent="addTODO">
            <label class="col-sm-12" for="nome">Nome:</label>
            <input class="col-sm-12" type="text" id="nome" name="nome" ><br><br>

            <label class="col-sm-12" for="descricao">Descrição:</label>
            <textarea  class="col-sm-12" id="descricao" name="descricao" ></textarea><br><br>

            <label class="col-sm-12" for="quantidade">Quantidade:</label>
            <input class="col-sm-12" type="number" id="quantidade" name="quantidade" ><br><br>

            <label class="col-sm-12" for="preco">Preço:</label>
            <input class="col-sm-12" type="number" step="0.01" id="preco" name="preco" ><br><br>

            <input class="col-sm-4" type="submit" value="Adicionar">
            </form>
          </div>
          </div>
        </div>
    </div>   
  </body>
  
  </main>
  <Futer></Futer>
</template>
