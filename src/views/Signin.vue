<template>
<v-app>
    <v-layout row wrap>

        <v-col cols="12" md="4" class="v-flex amber lighten-1 " no-gutters height="20%">
            <v-layout column>

                <p class="mx-10 mt-10 font-weight-thin">
                    <span class=" display-3 blue--text">Ondemand Laundry</span>

                </p>
                <p class="mx-10  font-weight-thin">
                    <span class=" blue--text font-weight-thin caption">All your laundry service needs here.</span>

                </p>

                <span class="mx-10 blue--text font-weight-thin caption justify-start charity">Wants to make a contribution to our charity platform ?</span>

            </v-layout>

        </v-col>

        <v-col cols="12" md="8" no-gutters class="d-flex ">

            <v-container fluid class="pa-0">

                <v-row no-gutters align="start" justify="end" style="height: 10%">
                    <v-col no-gutters cols="12" sm="4">
                        <HomeNavBar/>
                    </v-col>

                </v-row>
                <v-divider></v-divider>
                <v-row no-gutters align="center" justify="center" style="height: 50%">
                    <v-col no-gutters cols="6" sm="3">
<SignInForm/>
                    </v-col>

                </v-row>
                <v-row no-gutters align="end" justify="center" style="height: 40%">
                    <v-col no-gutters cols="12" sm="4">
                        <v-card flat>
                            <v-card-title>
                                <v-icon left class="primary--text ">done</v-icon><span class="primary--text font-weight-thin">Easy</span>
                            </v-card-title>
                            <v-card-text class="font-weight-thin">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ne
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col no-gutters cols="12" sm="4">
                        <v-card flat>
                            <v-card-title>
                                <v-icon left class="primary--text ">done</v-icon><span class="primary--text font-weight-thin">Fast</span>
                            </v-card-title>
                            <v-card-text class="font-weight-thin">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ne
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col no-gutters cols="12" sm="4">
                        <v-card flat>
                            <v-card-title>
                                <v-icon left class="primary--text ">done</v-icon><span class="primary--text font-weight-thin">Reliable</span>
                            </v-card-title>
                            <v-card-text class="font-weight-thin">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ne
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

            </v-container>
        </v-col>

    </v-layout>

</v-app>
</template>

<script>
import SignInForm from '../views/forms/signin'
import HomeNavBar from '../components/homenavbar'
export default {
    name: 'Home',
    components: {
        SignInForm,
        HomeNavBar
    },
    data() {
        return {
            elevations: [6, 12, 18],
            rules: [
                value => !!value || 'Required.',
                value => (value || '').length <= 20 || 'Max 20 characters',
                value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            ],
        }
    }
}
</script>

<style scoped>
.charity {
    text-decoration: underline !important;
}
</style>
