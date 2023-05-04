<template>
    <v-card-text>
      <v-text-field
        class="elevation-1 bg-primary"
        :loading="loading"
        variant="solo"
        
        label="Buscar"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
    </v-card-text>
    <MirasButton/>
</template>

<style>
</style>
<script setup>
import MirasButton from './MirasButton.vue';

</script>