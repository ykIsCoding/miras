<script setup>
import MirasButton from "../components/MirasButton.vue";
import MirasSearchBar from "../components/MirasSearchBar.vue";
import MirasTextFieldVue from "../components/MirasTextField.vue";
import MirasThemeToggle from "../components/MirasThemeToggle.vue";
</script>

<template>
    <div class="v-col h-100 v-row align-center justify-center">
        <div class="v-container w-50 h-50 align-self-center d-flex flex-column">
            <div class="ma-2 v-row justify-center align-center">
                <h1>Bienvenida al Miras</h1>
            </div>
            <div class="ma-2 v-row justify-center align-center d-flex-3-2">
                <MirasSearchBar />
            </div>
            
        </div>
    </div>
</template>
