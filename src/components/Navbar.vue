<template>
    <nav>
        <v-app-bar text app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Rick & Morty</span>
                <span class="ml-2" v-text="this.$route.name"></span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color="grey">
                <span>Sign out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer" class="primary">
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data () {
            return {
                drawer: false,
                links: [
                    { icon: 'account_circle', text: 'Characters', route: '/'},
                    { icon: 'location_on', text: 'Locations', route: '/locations'},
                    { icon: 'save', text: 'Episodes', route: '/episodes'}
                ],
                pageTitle: this.$route.name
            }
        }
    }
</script>