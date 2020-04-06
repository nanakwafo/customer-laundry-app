<template>
<v-app id="inspire">
    <v-navigation-drawer color="amber lighten-1" v-model="drawer" app>
        <v-layout column class="align-center">
            <v-flex class="mt-5 ">
                <v-avatar size="100">
                    <img src="/img/avatar1.png" alt="">
                </v-avatar>
                <p class="ma-0 pa-0">
                    <span class="primary--text font-weight-thin caption"> Kwafo Nana Mensah </span>
                </p>

                <p class="ma-0 pa-0">
                    <v-chip class="ma-2 white--text primary" x-small>
                        Account Verified
                    </v-chip>

                </p>

            </v-flex>
        </v-layout>
        <v-list dense>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon class="primary--text">{{link.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="primary--text font-weight-thin caption">{{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat class="grey lighten-5">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title class="text-uppercase grey--text">

            <span class="font-weight-light"> On demand </span>
            <span> Laundry</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>


        <v-btn depressed color="grey lighten-5" @click="$router.push('/')">
            <v-icon right>exit_to_app</v-icon>
        </v-btn>
    </v-app-bar>

    <v-content class="grey lighten-5">
        <router-view></router-view>
    </v-content>
  
</v-app>
</template>

<script>
export default {
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,
        links: [
            {
                icon: 'person',
                text: 'Profile',
                route: '/profile'
            },
            {
                icon: 'dashboard',
                text: 'Dashboard',
                route: '/dashboard'
            },
            {
                icon: 'list',
                text: 'My Orders',
                route: '/orders'
            },
            {
                icon: 'find_replace',
                text: 'Laundry',
                route: '/laundry'
            },

        ],
        items: [
             {
                title: 'Profile'
            },
            {
                title: 'Dashboard'
            },
            {
                title: 'Orders'
            },
            {
                title: 'Laundry'
            },
            
        ],
    }),
}
</script>
