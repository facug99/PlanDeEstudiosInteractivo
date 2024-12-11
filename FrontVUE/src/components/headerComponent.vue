<template>
    <header>
        <div class="hamburger-menu" @click="abrirMenu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <nav class="oculto">
            <ul class="listaMenu">
                <router-link to="/bands"><li>Bands</li></router-link>
                <router-link to="/albums"><li>Albums</li></router-link>
               
            </ul>
        </nav>
        <router-link to="/"><h1>LocalSound</h1></router-link>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    methods: {
        abrirMenu() {
            let menu = document.querySelector('.hamburger-menu');
            let nav = document.querySelector('nav');
            menu.classList.toggle('active');
            nav.classList.toggle('oculto');
            nav.classList.toggle('open');
        }
    }

};

</script>

<style >
header {
    display: flex;
    background-color: blueviolet;
}


header h1 {
    margin-left: 40%;
    color: black;
}

/* Estilos del contenedor del menú hamburguesa */


.hamburger-menu {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 2%;
    width: 30px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

/* Estilos de las barras */
.bar {
    width: 100%;
    height: 4px;
    background-color: black;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Efecto al hacer clic */
.hamburger-menu.active .bar:nth-child(1) {
    transform: rotate(45deg) translate(5px, 10px);
}

.hamburger-menu.active .bar:nth-child(2) {
    opacity: 0;
}

.hamburger-menu.active .bar:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -10px);
}

/*
nav
*/
.oculto {
    display: none;
}

.open {
    position: absolute;
    top: 43px;
    left: 0px;
}

/* Estilos para la lista del menú */


.listaMenu li {
    width: 250%;
    height: 250%;
    border: solid blueviolet 2px;
    background-color: lightslategray;
    display: flex;
    justify-content: center;

}

.listaMenu li a {
    color: black;
}
</style>
