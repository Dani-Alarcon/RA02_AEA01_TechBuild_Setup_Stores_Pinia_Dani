<template>
    <header>
        <nav >
            <h1>TechBuilds</h1>
            <span>Configurator</span>
            <p class="icons">🛒</p>
        </nav>
    </header>
</template>

<style scoped>
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

span {
    color: white;
    background-color: blue;
    font-weight: bold;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 1rem;
}
.icons{
    font-size: 30px;
    margin: 0; 
}
</style>