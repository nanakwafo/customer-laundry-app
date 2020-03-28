<template>
<div class="dashboard grey lighten-5 ma-4">
    <h1 class="font-weight-thin grey-text ma-5"> Dashboard</h1>

    <v-container class="">

        <v-card flat class="mydata pa-6">

            <v-row no-gutters>

                <v-col cols="12" sm="4" class="">
                    <p class="font-weight-thin justify-center mx-10"> Your current Laundry status</p>
                    <v-timeline>

                        <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
                            <template v-slot:opposite>
                                <span :class="` font-weight-thin ${year.color}--text`" v-text="year.year"></span>
                            </template>
                            <div class="py-4">
                                <span :class="`font-weight-thin mb-4 ${year.color}--text`">Lorem ipsum</span>

                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
                <v-col cols="12" sm="4" class="">

                    <v-sheet color="red accent-4 justify-center ma-3 px-3" height="100"  tile="false">
                        <span class="font-weight-thin  white--text">Total Requests: </span>
                        <span class="display-3 font-weight-thin white--text">0.00</span>
                    </v-sheet>

                    <v-sheet color="yellow accent-4 justify-center ma-3  px-3" height="100"  tile="false">
                        <span class="font-weight-thin  white--text">Total Requests: </span>
                        <span class="display-3 font-weight-thin white--text">0.00</span>
                    </v-sheet>

                    <v-sheet color="orange accent-4 justify-center ma-3  px-3" height="100"  tile="false">
                        <span class="font-weight-thin  white--text">Total Requests: </span>
                        <span class="display-3 font-weight-thin white--text">0.00</span>
                    </v-sheet>

                </v-col>
                <v-col cols="12" sm="4" >
                    
                        <v-toolbar color="green" dark dense flat class="ma-3">
                            <v-toolbar-title class="body-2">Promotions</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-icon large @click="next">
                                mdi-chevron-right
                            </v-icon>
                        </v-card-actions>
                  
                </v-col>
            </v-row>

        </v-card>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            years: [{
                    color: 'cyan',
                    year: '19:60 am',
                },
                {
                    color: 'amber',
                    year: '19:90 pm',
                },
                {
                    color: 'green',
                    year: '19:70 pm',
                },

            ],
        }

    },

}
</script>

<style scoped>

</style>
