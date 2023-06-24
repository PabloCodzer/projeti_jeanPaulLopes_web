<script setup>
import Futer from '/src/components/Footer.vue'
import { Alert } from 'bootstrap';
import {db} from '/src/firebase.js';
import {collection, addDoc, doc } from "firebase/firestore";
import {v4 as uuidv4} from 'uuid';
import { ref } from 'vue';




const filmesTodos = ref([])

onMounted(async()=>{
  let filmesCollection = await getDocs(collection(db,'produtos'))
  filmesCollection.forEach((filme)=>{
      filmesTodos.value.push({...filme.data(), id: filme.id})
  })
});

async function setvalores(filmesTodos)
{
  
}

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
     
  </body>
  
  </main>
  <Futer></Futer>
</template>
