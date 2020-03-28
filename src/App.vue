<template>
<v-app id="inspire" class="grey lighten-5">
   

        <router-view></router-view>
 
</v-app>
</template>

<script>


export default {
    name: 'App',
    data() {
        return {
            page: false,
        }
    },

};
</script>

<style scoped>

</style>
