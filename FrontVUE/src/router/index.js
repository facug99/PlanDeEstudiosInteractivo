import { createRouter, createWebHistory } from 'vue-router';

// Importar Componentes
import Home from '../components/HomeComponent.vue';
import Bands from '../components/BandsComponent.vue';
import Albums from '../components/AlbumsComponent.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/bands',
        name: 'bands',
        component: Bands
    },
    {
        path: '/albums',
        name: 'albums',
        component: Albums
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
