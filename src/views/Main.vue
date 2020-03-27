<template>
<v-app id="inspire">
    <v-navigation-drawer color="amber lighten-1" v-model="drawer" app>
        <v-layout column align-center>
            <v-flex class="mt-5">
                <v-avatar size="100">
                    <img src="/img/avatar1.png" alt="">
                </v-avatar>
                <p class="white--text subheading mt-1">
                    Kwafo Nana Mensah
                </p>
            </v-flex>
        </v-layout>
        <v-list dense>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon class="white--text">{{link.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
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
        <!-- dropdown -->
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn  depressed="" color="grey ligthen-5" dark v-on="on">
                    <v-icon left >expand_more</v-icon>
                       menu
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <!-- dropdown end -->
        <v-btn depressed color="grey lighten-5">
            <v-icon right>exit_to_app</v-icon>
        </v-btn>
    </v-app-bar>

    <v-content class="grey lighten-5">
        <router-view></router-view>
    </v-content>
    <!-- <v-footer color="indigo" app>
        <span class="white--text">&copy; 2019</span>
    </v-footer> -->
</v-app>
</template>

<script>
export default {
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,
        links: [{
                icon: 'dashboard',
                text: 'Dashboard',
                route: '/dashboard'
            },
            {
                icon: 'folder',
                text: 'My Projects',
                route: '/projects'
            },
            {
                icon: 'person',
                text: 'Team',
                route: '/team'
            },

        ],
        items: [
        { title: 'Dashboard' },
        { title: 'Projects' },
        { title: 'Team' },
        { title: 'Click Me 2' },
      ],
    }),
}
</script>
