<template>
<div class="dashboard">
    <h1 class="font-weight-thin grey-text ma-5"> My Orders</h1>

    <v-container class="my-5">

        <v-expansion-panels popout flat>
            <v-expansion-panel v-for="(item,i) in 5" :key="i">
                <v-expansion-panel-header>Item</v-expansion-panel-header>
                <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
                <v-divider class="grey"></v-divider>
            </v-expansion-panel>
        </v-expansion-panels>

    </v-container>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
