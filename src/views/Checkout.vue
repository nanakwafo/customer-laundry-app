<template>
<div class="dashboard grey lighten-5 ma-4">
    <h1 class="font-weight-thin grey-text ma-5"> Checkout</h1>

    <v-container class="">

        <v-layout column="" wrap>
            <v-stepper v-model="e1" light>
                <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3">Name of step 3</v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

                        <v-btn color="primary" @click="e1 = 2" depressed="">
                            Continue
                        </v-btn>

                        <v-btn text>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

                        <v-btn color="primary" @click="e1 = 3">
                            Continue
                        </v-btn>

                        <v-btn text>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

                        <v-btn color="primary" @click="e1 = 1">
                            Finish
                        </v-btn>

                        <v-btn text>Cancel</v-btn>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-layout>
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
            e1: 1,
        }

    },

}
</script>

<style scoped>

</style>
