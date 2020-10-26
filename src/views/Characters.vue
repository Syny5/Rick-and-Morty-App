<template>
    <div>
        <v-text-field type="text" v-model="search" label="Search characters"></v-text-field>
        <v-layout row wrap class="d-flex justify-center align-end layout">
            <v-flex v-for="character in updateVisibleCharacters" :key="character.id" xs5 sm3 lg2 class="mx-3 classicThumbnail"> 
                <div class="d-flex flex-column align-center">
                    <p class="text-center my-1 name" v-text="character.name"></p>
                    <img :src="character.image" :alt="character.name">
                    <div class="characterDetails text-center">
                        <p>{{character.species}} ({{character.gender}})</p>
                        <p>Status: {{character.status}}</p>
                    </div>
                </div>
            </v-flex>
            <v-pagination v-model="currentPage" :length="Math.ceil(filteredCharacters.length / pageSize)" circle></v-pagination>
        </v-layout>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Characters',

        mounted: function(){
            let URL1 = "https://rickandmortyapi.com/api/character/?page=1";
            let URL2 = "https://rickandmortyapi.com/api/character/?page=2";
            let URL3 = "https://rickandmortyapi.com/api/character/?page=3";
            let URL4 = "https://rickandmortyapi.com/api/character/?page=4";
            let URL5 = "https://rickandmortyapi.com/api/character/?page=5";
            let URL6 = "https://rickandmortyapi.com/api/character/?page=6";
            let URL7 = "https://rickandmortyapi.com/api/character/?page=7";
            let URL8 = "https://rickandmortyapi.com/api/character/?page=8";
            let URL9 = "https://rickandmortyapi.com/api/character/?page=9";
            let URL10 = "https://rickandmortyapi.com/api/character/?page=10";
            let URL11 = "https://rickandmortyapi.com/api/character/?page=11";
            let URL12 = "https://rickandmortyapi.com/api/character/?page=12";
            let URL13 = "https://rickandmortyapi.com/api/character/?page=13";
            let URL14 = "https://rickandmortyapi.com/api/character/?page=14";
            let URL15 = "https://rickandmortyapi.com/api/character/?page=15";
            let URL16 = "https://rickandmortyapi.com/api/character/?page=16";
            let URL17 = "https://rickandmortyapi.com/api/character/?page=17";
            let URL18 = "https://rickandmortyapi.com/api/character/?page=18";
            let URL19 = "https://rickandmortyapi.com/api/character/?page=19";
            let URL20 = "https://rickandmortyapi.com/api/character/?page=20";
            let URL21 = "https://rickandmortyapi.com/api/character/?page=21";
            let URL22 = "https://rickandmortyapi.com/api/character/?page=22";
            let URL23 = "https://rickandmortyapi.com/api/character/?page=23";
            let URL24 = "https://rickandmortyapi.com/api/character/?page=24";
            let URL25 = "https://rickandmortyapi.com/api/character/?page=25";
            let URL26 = "https://rickandmortyapi.com/api/character/?page=26";
            let URL27 = "https://rickandmortyapi.com/api/character/?page=27";
            let URL28 = "https://rickandmortyapi.com/api/character/?page=28";
            let URL29 = "https://rickandmortyapi.com/api/character/?page=29";
            let URL30 = "https://rickandmortyapi.com/api/character/?page=30";
            let URL31 = "https://rickandmortyapi.com/api/character/?page=31";
            let URL32 = "https://rickandmortyapi.com/api/character/?page=32";
            let URL33 = "https://rickandmortyapi.com/api/character/?page=33";
            let URL34 = "https://rickandmortyapi.com/api/character/?page=34";
            const promise1 = axios.get(URL1);
            const promise2 = axios.get(URL2);
            const promise3 = axios.get(URL3);
            const promise4 = axios.get(URL4);
            const promise5 = axios.get(URL5);
            const promise6 = axios.get(URL6);
            const promise7 = axios.get(URL7);
            const promise8 = axios.get(URL8);
            const promise9 = axios.get(URL9);
            const promise10 = axios.get(URL10);
            const promise11 = axios.get(URL11);
            const promise12 = axios.get(URL12);
            const promise13 = axios.get(URL13);
            const promise14 = axios.get(URL14);
            const promise15 = axios.get(URL15);
            const promise16 = axios.get(URL16);
            const promise17 = axios.get(URL17);
            const promise18 = axios.get(URL18);
            const promise19 = axios.get(URL19);
            const promise20 = axios.get(URL20);
            const promise21 = axios.get(URL21);
            const promise22 = axios.get(URL22);
            const promise23 = axios.get(URL23);
            const promise24 = axios.get(URL24);
            const promise25 = axios.get(URL25);
            const promise26 = axios.get(URL26);
            const promise27 = axios.get(URL27);
            const promise28 = axios.get(URL28);
            const promise29 = axios.get(URL29);
            const promise30 = axios.get(URL30);
            const promise31 = axios.get(URL31);
            const promise32 = axios.get(URL32);
            const promise33 = axios.get(URL33);
            const promise34 = axios.get(URL34);
            Promise.all([
                promise1,
                promise2,
                promise3,
                promise4,
                promise5,
                promise6,
                promise7,
                promise8,
                promise9,
                promise10,
                promise11,
                promise12,
                promise13,
                promise14,
                promise15,
                promise16,
                promise17,
                promise18,
                promise19,
                promise20,
                promise21,
                promise22,
                promise23,
                promise24,
                promise25,
                promise26,
                promise27,
                promise28,
                promise29,
                promise30,
                promise31,
                promise32,
                promise33,
                promise34
            ])
                .then(response => this.characters = response[0].data.results.concat(
                    response[1].data.results, 
                    response[2].data.results, 
                    response[3].data.results, 
                    response[4].data.results, 
                    response[5].data.results, 
                    response[6].data.results, 
                    response[7].data.results,
                    response[8].data.results,
                    response[9].data.results,
                    response[10].data.results,
                    response[11].data.results,
                    response[12].data.results,
                    response[13].data.results,
                    response[14].data.results,
                    response[15].data.results,
                    response[16].data.results,
                    response[17].data.results,
                    response[18].data.results,
                    response[19].data.results,
                    response[20].data.results,
                    response[21].data.results,
                    response[22].data.results,
                    response[23].data.results,
                    response[24].data.results,
                    response[25].data.results,
                    response[26].data.results,
                    response[27].data.results,
                    response[28].data.results,
                    response[29].data.results,
                    response[30].data.results,
                    response[31].data.results,
                    response[32].data.results,
                    response[33].data.results
                    ))
                .catch(this.characters = [{name: 'No posts found.'}]);
        },

        data() {
            return{
                characters: [],
                search: '',
                currentPage: 1,
                pageSize: 30
            }
        },
        computed: {
            filteredCharacters: function(){
                return this.characters.filter((character) => {
                    return character.name.toLowerCase().match(this.search.toLowerCase());
                });
            },
            updateVisibleCharacters: function(){
                return this.filteredCharacters.slice((this.currentPage -1) * this.pageSize, ((this.currentPage - 1) * this.pageSize) + this.pageSize);
            }
        },
        methods:{
            updatePage(pageNumber){
                this.currentPage = pageNumber;
                this.updateVisibleCharacters();
            }
        }
    }
</script>
