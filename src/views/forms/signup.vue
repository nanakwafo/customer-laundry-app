<template>
<v-card class="mx-auto" flat="" max-width="500">
    <v-card-title class="title font-weight-regular justify-start">
        <span>{{ currentTitle }}</span>

    </v-card-title>

    <v-window v-model="step">
        <v-window-item :value="1">
            <v-layout column wrap>
                <v-flex>
                    <v-card-text>
                         <div v-if="showEmailVerificationForm">
                            <span class="caption grey--text text--darken-1">

                                A verification code has been sent to your account
                            </span>
                            <v-text-field placeholder="4 digit number"> </v-text-field>
                        </div>
                        <div v-else>
                            <v-text-field placeholder="Phonenumber" v-model="MOBILESIGNUPemailvalue"></v-text-field>
                            <!-- <v-btn  depressed="" class="ma-2 font-weight-thin text-transform-none align-center" rounded color="primary">Verify</v-btn> -->

                            <v-text-field label="Password" v-model="MOBILESIGNUPpasswordvalue"></v-text-field>
                            <v-row justify="center">

                                <v-btn @click="MOBILESIGNUPsubmit()" depressed="" class=" font-weight-thin text-transform-none" rounded color="primary">Submit</v-btn>
                            </v-row>
                        </div>
                       
                    </v-card-text>
                </v-flex>
            </v-layout>

        </v-window-item>

        <v-window-item :value="2">
            <v-layout column="" wrap>
                <v-flex>
                    <v-card-text>
                        <div v-if="showEmailVerificationForm">
                            <span class="caption grey--text text--darken-1">

                                A verification code has been sent to your account
                            </span>
                            <v-text-field placeholder="4 digit number" v-model="EMAILSIGNUPdigit"> </v-text-field>
                            <v-row justify="center">
                                <v-btn @click="EMAILVERIFYsubmit()" depressed="" class=" font-weight-thin text-transform-none" rounded color="primary">Verify</v-btn>
                            </v-row>
                        </div>
                        <div v-else>
                            <v-text-field placeholder="Email" v-model="EMAILSIGNUPemailvalue"></v-text-field>
                            <v-text-field label="Password" v-model="EMAILSIGNUPpasswordvalue"></v-text-field>
                            <v-row justify="center">
                                <v-btn @click="EMAILSIGNUPsubmit()" depressed="" class=" font-weight-thin text-transform-none" rounded color="primary">Submit</v-btn>
                            </v-row>
                        </div>

                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-window-item>

        <v-window-item :value="3">
            <div class="pa-4 text-center">
                <!-- <v-img class="mb-4" contain height="128" src="https://cdn.vuetifyjs.com/images/logos/v.svg"></v-img> -->
                <h3 class="title font-weight-light mb-2">Welcome to our plaform</h3>
                <span class="caption grey--text">Thanks for signing up! you will be redirected shortly</span>
            </div>
        </v-window-item>
    </v-window>

    <v-card-actions>

        <v-btn :disabled="step === 1" text @click="step--">
            Back
        </v-btn>
        <v-spacer></v-spacer>
        <span :disabled="step === 3" color="primary" depressed @click="step++" class=" blue--text font-weight-thin caption ">Sign up with Email</span>
        <!-- <v-btn :disabled="step === 3" color="primary" depressed @click="step++">
            OR
        </v-btn> -->
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    data() {
        return {
            step: 1,

            //Signup mobile number option
            MOBILESIGNUPemailvalue: null,
            MOBILESIGNUPpasswordvalue: null,
            MOBILESIGNUPdigit: null,
            //Signup email option
            EMAILSIGNUPemailvalue: null,
            EMAILSIGNUPpasswordvalue: null,
            EMAILSIGNUPdigit: null,

        }

    },
    computed: {
        currentTitle() {
            switch (this.step) {
                case 1:
                    return 'Sign Up with Mobile Number'
                case 2:
                    return 'Sign Up with Email'
                default:
                    return ''
            }
        },
        showEmailVerificationForm: function () {

            return this.$store.state.userSignup.verifyEmailAccount;
        }
    },

    methods: {
        EMAILSIGNUPsubmit: function () {
            //:TODO validate data
            console.log(`details entered by user ${this.EMAILSIGNUPemailvalue} && ${this.EMAILSIGNUPpasswordvalue}`)

            this.$store.dispatch('userSignup/signupemailAction', {
                'email': this.EMAILSIGNUPemailvalue,
                'password': this.EMAILSIGNUPpasswordvalue
            })
            this.EMAILSIGNUPsetempty();

        },
        EMAILVERIFYsubmit: function () {
            //:TODO validate data
            console.log(`4 digit entered by user `)
            this.$store.dispatch('userVerification/signupemailVerificationAction', {
                'digit': this.EMAILSIGNUPdigit,
                'email': '' //localstorage data,

            })
            this.EMAILVERIFYsetempty();

        },
        MOBILESIGNUPsubmit: function () {
            //:TODO validate data
            console.log(`details entered by user ${this.MOBILESIGNUPemailvalue} && ${this.MOBILESIGNUPpasswordvalue}`)

            this.$store.dispatch('userSignup/signupmobileAction', {
                'email': this.MOBILESIGNUPemailvalue,
                'password': this.MOBILESIGNUPpasswordvalue
            })
            this.MOBILESIGNUPsetempty();

        },
        MOBILEVERIFYsubmit: function () {
            //:TODO validate data
            console.log(`4 digit entered by user `)
            this.$store.dispatch('userVerification/signupmobileVerificationAction', {
                'digit': this.MOBILESIGNUPdigit,
                'mibile': '' //localstorage data,

            })
            this.EMAILVERIFYsetempty();

        },
        EMAILSIGNUPsetempty: function () {
            this.EMAILSIGNUPpasswordvalue = null
            this.EMAILSIGNUPemailvalue = null
        },
        MOBILESIGNUPsetempty: function () {
            this.MOBILESIGNUPpasswordvalue = null
            this.MOBILESIGNUPemailvalue = null
        },
        EMAILVERIFYsetempty: function () {
            this.EMAILSIGNUPdigit = null
        },
        MOBILEVERIFYsetempty: function () {
            this.MOBILESIGNUPdigit = null
        }

    }
}
</script>
