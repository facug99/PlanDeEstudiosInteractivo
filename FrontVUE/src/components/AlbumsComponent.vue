<template>
    <div class="band-list-container">
        <h1>Albumes</h1>
        <table class="music-table">
    <thead>
      <tr>
        <th>Título</th>
        <th>Año</th>
        <th>Banda</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="album in albums" :key="album.id">
        <td>{{album.title  }}</td>
        <td>{{ album.year }}</td>
        <td>{{ getBandName(album.band_id) }}</td>
      </tr>
     
    </tbody>
  </table>
    </div>

</template>
<style scoped>
/* styles.css */
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color: #f4f4f9;
}
h1{
    margin-left: 45%;
}
.music-table {
  width: 100%;
  max-width: 800px;
  margin: auto;
  border-collapse: collapse;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.music-table th, .music-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

.music-table thead {
  background-color: #4CAF50;
  color: white;
}

.music-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.music-table tbody tr:hover {
  background-color: #ddd;
}


</style>
<script>
import axios from 'axios';
export default {
    name: "BandsComponent",
    data() {
        return {
            albums: [],
            bands: [],
            
        };
    },
    mounted() {
        axios.get('/api/albums')
            .then(response => {
                console.log(response.data);
                this.albums = response.data;

            })
            .catch(error => {
                console.error('Error:', error);
            });
            axios.get('/api/bands')
            .then(response => {
                console.log(response.data);
                this.bands = response.data;

            })
            .catch(error => {
                console.error('Error:', error);
            });
    },
    methods:{
     // Obtener el nombre de la banda basado en el ID
     getBandName(id) {
      const band = this.bands.find(band => band.id === id);
      return band ? band.name : 'Desconocido';  // Si no encuentra la banda, devuelve 'Desconocido'
    }
},
    
};
</script>