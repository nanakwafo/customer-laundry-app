<template>
<div class="dashboard">
    <h1 class="font-weight-thin grey-text mx-5"> My laundry</h1>
    <v-container class="ma-0">
        <v-layout row wrap class="justify-center">
            <v-col cols="12" sm="6">
                <v-text-field label="Search by Postcode or Address"></v-text-field>

            </v-col>
        </v-layout>
    </v-container>
    <v-container class="my-0">
        <v-layout row wrap>
            <v-flex xs12 md12 lg12 v-for="person in team" :key="person.index">
                <v-card flat="" class="ma-3 pa-3">
                    <v-row no-gutters>
                        <v-col cols="12" sm="4">
                            <v-responsive class="pt-2 mx-3">
                                <v-avatar size="100" class="grey lighten-2">
                                    <img :src="person.avatar">
                                </v-avatar>
                            </v-responsive>
                            <v-card-text>
                                <div class="subheading font-weight-thin">Company Name: {{person.name}}</div>
                                <div class="grey--text font-weight-thin">Location: {{person.role}}</div>
                                <div class="grey--text font-weight-thin">Postcode: ls150ap</div>
                            </v-card-text>
                            <v-card-actions class="float-left">

                              <Chat />
                                
                             <v-rating class="mx-4" large v-model="rating"></v-rating>
                               
                            </v-card-actions>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-card-text>
                                <div class="subheading font-weight-thin">Services</div>
                                <v-divider></v-divider>
                                <v-row justify="start" class="font-weight-thin">
                                    <v-checkbox class="mx-2" label="Wash and Dry"></v-checkbox>
                                    <v-checkbox class="mx-2" label="Iron"></v-checkbox>
                                    <v-checkbox class="mx-2" label="Dry Cleaning"></v-checkbox>
                                    <v-checkbox class="mx-2" label="Ironing Only"></v-checkbox>
                                    <v-checkbox class="mx-2" label="Duvets and BulkItems"></v-checkbox>
                                    <v-checkbox class="mx-2" label="Success"></v-checkbox>
                                </v-row>

                                <v-divider></v-divider>

                            </v-card-text>

                        </v-col>
                        <v-col cols="12" sm="4">
                            <div class="text-center font-weight-thin">
                                <v-btn depressed=""  @click="$router.push('checkout')" rounded color="primary" class="font-weight-thin">Checkout Now</v-btn>
                            </div>
                        </v-col>
                    </v-row>

                </v-card>

            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import Chat from '../views/Chat'
export default {
    components: {
        Chat
    },
    data() {
        return {
            
        team: [{
                    name: 'My Laundry',
                    role: '233 Cartmell drive',
                    avatar: '/img/avatar1.png'
                },
                {
                    name: 'Nan lejdk kjld',
                    role: 'jjdnd nbjdk',
                    avatar: '/img/avatar1.png'
                },
                {
                    name: 'Nan lejdk kjld',
                    role: 'jjdnd nbjdk',
                    avatar: '/img/avatar1.png'
                },
                {
                    name: 'Nan lejdk kjld',
                    role: 'jjdnd nbjdk',
                    avatar: '/img/avatar1.png'
                },
            ],
            rating: 3,
        }
    }
}
</script>

<style scoped>

</style>
