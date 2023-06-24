<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <header>

    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">Filmes</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <RouterLink class="nav-link"  to="/about">Sobre</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link"  to="/reservas">Reservas</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link"  to="/disponiveis">Cadastro Títulos</RouterLink>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
