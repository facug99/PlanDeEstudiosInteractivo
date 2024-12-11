<template>
    <div class="band-list-container">
        <h2>Lista de Bandas</h2>
        <table class="band-list">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Género</th>
                    <th>Año de Formación</th>
                    <th>Lugar de Formación</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="band in bands" :key="band.id">
                    <td>{{ band.name }}</td>
                    <td>{{ band.genre }}</td>
                    <td>{{ band.formed_year }}</td>
                    <td>{{ band.formed_location }}</td>
                </tr>

            </tbody>
        </table>
    </div>

</template>
<style scoped>
/* Contenedor principal */
.band-list-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Encabezado de la lista */
.band-list-container h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
    font-size: 1.8em;
    font-weight: bold;
}

/* Estilo de la tabla */
.band-list {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    font-family: Arial, sans-serif;
}

/* Encabezado de la tabla */
.band-list thead th {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    font-size: 1.1em;
    text-transform: uppercase;
}

/* Filas de la tabla */
.band-list tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
}

.band-list tbody tr:nth-child(even) {
    background-color: #ffffff;
}

.band-list tbody tr:hover {
    background-color: #e8f5e9;
    cursor: pointer;
}

/* Celdas de la tabla */
.band-list td,
.band-list th {
    padding: 10px;
    border: 1px solid #ddd;
}

/* Resaltar primera columna */
.band-list tbody td:first-child {
    font-weight: bold;
    color: #4CAF50;
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 600px) {
    .band-list-container {
        padding: 10px;
    }

    .band-list thead {
        display: none;
    }

    .band-list tr {
        display: block;
        margin-bottom: 10px;
    }

    .band-list td {
        display: flex;
        justify-content: space-between;
        padding: 8px;
        border: none;
        border-bottom: 1px solid #ddd;
    }

    .band-list td:before {
        content: attr(data-label);
        font-weight: bold;
        text-transform: uppercase;
        color: #555;
    }
}
</style>
<script>
import axios from 'axios';
export default {
    name: "BandsComponent",
    data() {
        return {
            bands: [],
        };
    },
    mounted() {
        axios.get('/api/bands')
            .then(response => {
                this.bands = response.data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    },
   
};
</script>