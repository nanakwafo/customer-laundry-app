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
            <v-flex xs12 md12 lg12 v-for="person in visibleVendors" v-bind:visibleVendors="visibleVendors" v-bind:currentPage="currentPage" :key="person.index">
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

                                <v-rating class="mx-4" large :v-model="`${person.rating}`"></v-rating>

                            </v-card-actions>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-card-text>
                                <div class="subheading font-weight-thin">Services</div>
                                <v-divider></v-divider>
                                <v-row justify="start" class="font-weight-thin">
                                    <v-checkbox v-for="p in person.service_id" :key="p.index" class="mx-2" :label="`${p.name}`"></v-checkbox>

                                </v-row>

                                <v-divider></v-divider>

                            </v-card-text>

                        </v-col>
                        <v-col cols="12" sm="4">
                            <div class="text-center font-weight-thin">
                                <v-btn depressed="" @click="$router.push('checkout')" rounded color="primary" class="font-weight-thin">Checkout Now</v-btn>
                            </div>
                        </v-col>
                    </v-row>

                </v-card>

            </v-flex>
             <Pagination
                    v-bind:vendors="vendors"
                    v-on:page:update="updatePage"
                    v-bind:currentPage="currentPage"
                    v-bind:pageSize="pageSize">
             </Pagination>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import Chat from '../views/Chat'
import Pagination from '../components/laundry/pagination'
export default {
    components: {
        Chat,
        Pagination
    },

    data() {
        return {
            
            vendors: [{
                    name: 'My Laundry',
                    role: '233 Cartmell drive',
                    avatar: '/img/avatar1.png',
                    rating: 3,
                    vendor_id: 1,
                    service_id: [{
                            id: 0,
                            name: 'Iron',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service2',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                    ]

                },
                {
                    name: 'Nan lejdk kjld',
                    role: 'jjdnd nbjdk',
                    avatar: '/img/avatar1.png',
                    rating: 3,
                    vendor_id: 1,
                    service_id: [{
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                    ]
                },
                {
                    name: 'Nan lejdk kjld',
                    role: 'jjdnd nbjdk',
                    avatar: '/img/avatar1.png',
                    rating: 3,
                    vendor_id: 1,
                    service_id: [{
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                    ]
                },
                {
                    name: 'Nan lejdk kjld',
                    role: 'jjdnd nbjdk',
                    avatar: '/img/avatar1.png',
                    rating: 3,
                    vendor_id: 1,
                    service_id: [{
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                    ]
                },
                 {
                    name: 'Nan lejdk kjld',
                    role: 'jjdnd nbjdk',
                    avatar: '/img/avatar1.png',
                    rating: 3,
                    vendor_id: 1,
                    service_id: [{
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                    ]
                },
                 {
                    name: 'Nan lejdk kjld',
                    role: 'jjdnd nbjdk',
                    avatar: '/img/avatar1.png',
                    rating: 3,
                    vendor_id: 1,
                    service_id: [{
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                    ]
                },
                 {
                    name: 'Nan lejdk kjld',
                    role: 'jjdnd nbjdk',
                    avatar: '/img/avatar1.png',
                    rating: 3,
                    vendor_id: 1,
                    service_id: [{
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                        {
                            id: 0,
                            name: 'service1',
                            price: 0.9
                        },
                    ]
                },
            ],
            currentPage: 0,
            pageSize: 2,
            visibleVendors: []

        }
    },
    beforeMount: function () {
        this.updateVisibleVendors();
    },
    methods: {
        updatePage: function (pageNumber) {
            this.currentPage = pageNumber;
            this.updateVisibleVendors();
        },
        updateVisibleVendors: function () {
            this.visibleVendors = this.vendors.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
            // if we 0 visible vendors,go back a page
            if (this.visibleVendors.length == 0 && this.currentPage > 0) {
                this.updatePage(this.currentPage - 1);
            }
        }
    }
}
</script>

<style scoped>

</style>
