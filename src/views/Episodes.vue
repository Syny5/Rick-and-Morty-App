<template>
    <div>
        <v-text-field type="text" v-model="search" label="Search episodes"></v-text-field>
        <v-layout row wrap class="d-flex justify-center layoutLocationsEpisodes">
            <v-flex v-for="episode in filteredEpisodes" :key="episode.id" xs5 sm3 lg2 class="ma-3 classicThumbnail cardsThumbnails"> 
                <v-card class="d-flex flex-column align-center text-center">
                    <v-card-title v-text="episode.name"></v-card-title>
                    <v-card-subtitle class="primary--text font-italic">{{ episode.episode }}</v-card-subtitle>
                    <v-card-text class="grey--text">Broadcasted on {{ episode.air_date }}</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Episodes',

        mounted: function(){
            axios.get('https://rickandmortyapi.com/api/episode')
                .then(response => this.episodes = response.data.results)
                .catch(this.episodes = [{name: 'No posts found.'}]);
        },

        data() {
            return{
                episodes: [],
                search: ''
            }
        },

        computed: {
            filteredEpisodes: function(){
                return this.episodes.filter((episode) => {
                    return episode.name.toLowerCase().match(this.search.toLowerCase());
                });
            }
        }
    }
</script>