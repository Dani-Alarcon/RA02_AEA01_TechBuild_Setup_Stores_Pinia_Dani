<template>
    <header class="main-header">
        <nav class="nav-container">
            <h1 class="logo-text">TechBuilds</h1>
            <span class="badge">Configurator</span>
        </nav>
    </header>
</template>

<style scoped>
.main-header {
    background-color: #0D1526;
    width: 100%;
    padding: 15px 0;
}

.nav-container {
    max-width: 1200px; 
    margin: 0 auto;    
    display: flex;
    align-items: center;
    gap: 10px;        
    padding: 0 20px;
}

.logo-text {
    color: #1e78ff;
    margin: 0;
    font-size: 1.5rem;
}

.badge {
    color: white;
    background-color: blue;
    font-weight: bold;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
}
</style>