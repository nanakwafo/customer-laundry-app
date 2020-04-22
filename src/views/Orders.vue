<template>
<div class="dashboard">
    <h1 class="font-weight-thin grey-text ma-5"> My Orders</h1>

    <v-container class="my-5">
        <!-- <v-layout row class="mb-3 justify-center">

            <v-btn small flat depressed="" color="grey lighten-5" @click="sortby('title')" v-on="on">
                <v-icon left flat>folder</v-icon>
                <span class="caption text-lowercase">by Projectname</span>
            </v-btn>

            <v-btn small flat depressed="" color="grey lighten-5" @click="sortby('person')">
                <v-icon left flat>person</v-icon>
                <span class="caption text-lowercase">by name</span>
            </v-btn>
        </v-layout> -->
        <v-card flat class="mydata mx-3" v-for="project in visibleOrders" v-bind:visibleOrders="visibleOrders" v-bind:currentPage="currentPage" :key="project.title">
            <v-layout row wrap :class="`pa-3 project ${project.status}`">
                <v-flex xs6 md6>
                    <div class="caption grey--text">Order ID</div>
                    <div>{{project.title}}</div>
                </v-flex>

                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Landry Company</div>
                    <div>{{project.person}}</div>
                </v-flex>

                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Date</div>
                    <div>{{project.Dueby}}</div>
                </v-flex>

                <v-flex xs2 sm4 md2>
                    <div class="right">
                        <v-chip small :class="` ${project.status} white--text  caption my-3`">{{project.status}}</v-chip>
                    </div>
                </v-flex>

            </v-layout>
            <v-divider></v-divider>

        </v-card>
        <Pagination
                    v-bind:orders="orders"
                    v-on:page:update="updatePage"
                    v-bind:currentPage="currentPage"
                    v-bind:pageSize="pageSize">
             </Pagination>
    </v-container>
</div>
</template>

<script>
import Pagination from '../components/order/pagination'
export default {
      components: {
      
        Pagination
    },
    data() {
        return {
            orders: [{
                    title: 'Desoidod1',
                    person: 'kndj',
                    Dueby: 'jdjd',
                    status: 'complete'
                },
                {
                    title: 'Aesoidod2',
                    person: 'kndj',
                    Dueby: 'jdjd',
                    status: 'ongoing'
                },
                {
                    title: 'Desoidod3',
                    person: 'kndj',
                    Dueby: 'jdjd',
                    status: 'overdue'
                },
                {
                    title: 'Desoidod4',
                    person: 'kndj',
                    Dueby: 'jdjd',
                    status: 'overdue'
                },
                {
                    title: 'Desoidod5',
                    person: 'kndj',
                    Dueby: 'jdjd',
                    status: 'ongoing'
                },

            ],
            currentPage: 0,
            pageSize: 3,
            visibleOrders: []
        }

    },
    beforeMount: function () {
        this.updateVisibleOrders();
    },
    methods: {
        // sortby(prop) {
        //     this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
        // }
         updatePage: function (pageNumber) {
            this.currentPage = pageNumber;
            this.updateVisibleOrders();
        },
        updateVisibleOrders: function () {
            this.visibleOrders = this.orders.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
            // if we 0 visible vendors,go back a page
            if (this.visibleOrders.length == 0 && this.currentPage > 0) {
                this.updatePage(this.currentPage - 1);
            }
        }
    }

}
</script>

<style scoped>
.project.complete {
    border-left: 4px solid #3cd1c2 !important;
}

.project.ongoing {
    border-left: 4px solid orange !important;
}

.project.overdue {
    border-left: 4px solid tomato !important;
}

.v-chip.complete {
    background-color: #3cd1c2 !important;
}

.v-chip.ongoing {
    background-color: orange !important;
}

.v-chip.overdue {
    background-color: tomato !important;
}
</style>
