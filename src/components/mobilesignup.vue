<template>
<v-card-text>
    <div v-if="showMobileVerificationForm">
        <span class="caption grey--text text--darken-1">

            A verification code has been sent to your account
        </span>
        <v-text-field placeholder="4 digit number" v-model="MOBILESIGNUPdigit"> </v-text-field>
        <v-row justify="center">
            <v-btn @click="MOBILEVERIFYsubmit()" depressed="" class=" font-weight-thin text-transform-none" rounded color="primary">Verify</v-btn>
        </v-row>
    </div>
    <div v-if="showVerificationSuccess" class="pa-4 text-center">

        <h3 class="title font-weight-light mb-2">Welcome to our plaform</h3>
        <span class="caption grey--text">Thanks for signing up! you will be redirected shortly</span>
    </div>
    <div v-if="!showMobileVerificationForm && !showVerificationSuccess">
        <v-text-field label="Mobile"  v-model="MOBILESIGNUPmobilevalue"></v-text-field>
        <v-text-field label="Password" v-model="MOBILESIGNUPpasswordvalue"></v-text-field>
        <v-row justify="center">
            <v-btn @click="MOBILESIGNUPsubmit()" depressed="" class=" font-weight-thin text-transform-none" rounded color="primary">Submit</v-btn>
        </v-row>

    </div>

</v-card-text>
</template>


<script>
export default {
    data() {
        return {
            MOBILESIGNUPmobilevalue: null,
            MOBILESIGNUPpasswordvalue: null,
            MOBILESIGNUPdigit: null,
            verifySuccessWindow: 3

        }

    },
    computed: {

        showMobileVerificationForm: function () {
            return this.$store.state.userSignup.verifyMobileAccount;
        },
        showVerificationSuccess: function () {

            return this.$store.state.userVerification.signupVerificationStatus

        }
    },
    watch: {
        showVerificationSuccess: function (newValue, oldValue) {
            console.log('oldvalue:', oldValue);
            if (newValue === true) {
                this.$store.state.userSignup.verifyMobileAccount = false
            }
        }
    },
    methods: {
        MOBILESIGNUPsubmit: function () {
            //:TODO validate data
            console.log(`details entered by user ${this.MOBILESIGNUPmobilevalue} && ${this.MOBILESIGNUPpasswordvalue}`)

            this.$store.dispatch('userSignup/signupmobileAction', {
                'mobile': this.MOBILESIGNUPmobilevalue,
                'password': this.MOBILESIGNUPpasswordvalue
            })
            this.MOBILESIGNUPsetempty();

        },
        MOBILEVERIFYsubmit: function () {
            //:TODO validate data
            console.log(`4 digit entered by user ${this.MOBILESIGNUPdigit}`)
            this.$store.dispatch('userVerification/signupmobileVerificationAction', {
                'code': this.MOBILESIGNUPdigit,
                'account': localStorage.getItem('isRegisteringMobile'),

            })
            this.MOBILEVERIFYsetempty();

        },

        MOBILESIGNUPsetempty: function () {
            this.MOBILESIGNUPpasswordvalue = null
            this.MOBILESIGNUPmobilevalue = null
        },

        MOBILEVERIFYsetempty: function () {
            this.MOBILESIGNUPdigit = null
        },

    }
}
</script>
