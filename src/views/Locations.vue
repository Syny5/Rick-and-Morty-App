<template>
    <div>
        <v-text-field type="text" v-model="search" label="Search locations"></v-text-field>
        <v-layout row wrap class="d-flex justify-center layoutLocationsEpisodes">
            <v-flex v-for="location in filteredlocations" :key="location.id" xs5 sm3 lg2 class="ma-3 classicThumbnail cardsThumbnails"> 
                <v-card class="d-flex flex-column align-center text-center">
                    <v-card-title v-text="location.name"></v-card-title>
                    <v-card-subtitle class="primary--text font-italic">{{ location.type }}</v-card-subtitle>
                    <v-card-text class="grey--text">{{ location.dimension }}</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Locations',

        mounted: function(){
            axios.get('https://rickandmortyapi.com/api/location')
                .then(response => this.locations = response.data.results)
                .catch(this.locations = [{name: 'No posts found.'}]);
        },

        data() {
            return{
                locations: [],
                search: ''
            }
        },
        computed: {
            filteredlocations: function(){
                return this.locations.filter((location) => {
                    return location.name.toLowerCase().match(this.search.toLowerCase());
                });
            }
        }
    }
</script>