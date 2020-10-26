<template>
    <div>
        <v-text-field type="text" v-model="search" label="Search locations"></v-text-field>
        <v-layout row wrap class="d-flex justify-center layoutLocationsEpisodes">
            <v-flex v-for="location in updateVisibleLocations" :key="location.id" xs5 sm3 lg2 class="ma-3 classicThumbnail cardsThumbnails"> 
                <v-card class="d-flex flex-column align-center text-center">
                    <v-card-title v-text="location.name"></v-card-title>
                    <v-card-subtitle class="primary--text font-italic">{{ location.type }}</v-card-subtitle>
                    <v-card-text class="grey--text">{{ location.dimension }}</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-pagination v-model="currentPage" :length="Math.ceil(filteredlocations.length / pageSize)" circle></v-pagination>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Locations',

        mounted: function(){
            let URL1 = "https://rickandmortyapi.com/api/location?page=1";
            let URL2 = "https://rickandmortyapi.com/api/location?page=2";
            let URL3 = "https://rickandmortyapi.com/api/location?page=3";
            let URL4 = "https://rickandmortyapi.com/api/location?page=4";
            let URL5 = "https://rickandmortyapi.com/api/location?page=5";
            let URL6 = "https://rickandmortyapi.com/api/location?page=6";
            const promise1 = axios.get(URL1);
            const promise2 = axios.get(URL2);
            const promise3 = axios.get(URL3);
            const promise4 = axios.get(URL4);
            const promise5 = axios.get(URL5);
            const promise6 = axios.get(URL6);
            Promise.all([
                promise1,
                promise2,
                promise3,
                promise4,
                promise5,
                promise6
            ])
                .then(response => this.locations = response[0].data.results.concat(
                    response[1].data.results, response[2].data.results, response[3].data.results, response[4].data.results, response[5].data.results))
                .catch(this.locations = [{name: 'No posts found.'}]);
        },

        data() {
            return{
                locations: [],
                search: '',
                currentPage: 1,
                pageSize: 20
            }
        },
        computed: {
            filteredlocations: function(){
                return this.locations.filter((location) => {
                    return location.name.toLowerCase().match(this.search.toLowerCase());
                });
            },
            updateVisibleLocations: function(){
                return this.filteredlocations.slice((this.currentPage -1) * this.pageSize, ((this.currentPage - 1) * this.pageSize) + this.pageSize);
            }
        }
    }
</script>