<script setup>

import { UserSessionStore } from "../stores/userSessionStore";
const userSession = UserSessionStore()
</script>
<template>
    <header>
        <nav>
            <h1>TechBuilds</h1>
            <p id="configurator">Configurator</p>
            <div class="usuari">
                <p>Hola, <span class="github-link" @click="userSession.gitHub">{{ userSession.usuari }}</span>
                </p>
            </div>

        </nav>
    </header>
</template>

<style scoped>
* {
    color: white;
}

header {
    background-color: #0D1526;
    width: 100%;
    padding: 15px 0;
}

nav {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 5px;
}

h1 {
    color: #1e78ff;
    margin: 0;
}

#configurator {
    background-color: blue;
    font-weight: bold;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 1rem;
}

.usuari {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
</style>