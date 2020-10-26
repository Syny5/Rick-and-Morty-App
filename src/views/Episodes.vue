<template>
    <div>
        <v-text-field type="text" v-model="search" label="Search episodes"></v-text-field>
        <v-layout row wrap class="d-flex justify-center layoutLocationsEpisodes">
            <v-flex v-for="episode in updateVisibleEpisodes" :key="episode.id" xs5 sm3 lg2 class="ma-3 classicThumbnail cardsThumbnails"> 
                <v-card class="d-flex flex-column align-center text-center">
                    <v-card-title v-text="episode.name"></v-card-title>
                    <v-card-subtitle class="primary--text font-italic">{{ episode.episode }}</v-card-subtitle>
                    <v-card-text class="grey--text">Broadcasted on {{ episode.air_date }}</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-pagination v-model="currentPage" :length="Math.ceil(filteredEpisodes.length / pageSize)" circle></v-pagination>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Episodes',

        mounted: function(){
            let URL1 = "https://rickandmortyapi.com/api/episode?page=1";
            let URL2 = "https://rickandmortyapi.com/api/episode?page=2";
            const promise1 = axios.get(URL1);
            const promise2 = axios.get(URL2);
            Promise.all([
                promise1,
                promise2
            ])
                .then(response => this.episodes = response[0].data.results.concat(response[1].data.results))
                .catch(this.episodes = [{name: 'No posts found.'}]);
        },

        data() {
            return{
                episodes: [],
                search: '',
                currentPage: 1,
                pageSize: 20
            }
        },

        computed: {
            filteredEpisodes: function(){
                return this.episodes.filter((episode) => {
                    return episode.name.toLowerCase().match(this.search.toLowerCase());
                });
            },
            updateVisibleEpisodes: function(){
                return this.filteredEpisodes.slice((this.currentPage -1) * this.pageSize, ((this.currentPage - 1) * this.pageSize) + this.pageSize);
            }
        }
    }
</script>