<template>
<v-app id="inspire" class="grey lighten-5">
   

        <router-view></router-view>
    
    <!-- <Home v-if="page"></Home>
    <Dashboard v-else></Dashboard> -->

</v-app>
</template>

<script>
// import Home from './views/Home'
// import Dashboard from './views/Dashboard'

export default {
    name: 'App',

    // components: {
    //     Home,
    //     Dashboard
    // },
    data() {
        return {
            page: false,
        }
    },

};
</script>

<style scoped>

</style>
