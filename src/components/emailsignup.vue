<template>
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
    <div v-if="showVerificationSuccess" class="pa-4 text-center">

        <h3 class="title font-weight-light mb-2">Welcome to our plaform</h3>
        <span class="caption grey--text">Thanks for signing up! you will be redirected shortly</span>
    </div>
    <div v-if="!showEmailVerificationForm && !showVerificationSuccess">
        <v-text-field label="Email" v-model="EMAILSIGNUPemailvalue"></v-text-field>
        <v-text-field label="Password" v-model="EMAILSIGNUPpasswordvalue"></v-text-field>
        <v-row justify="center">
            <v-btn @click="EMAILSIGNUPsubmit()" depressed="" class=" font-weight-thin text-transform-none" rounded color="primary">Submit</v-btn>
        </v-row>
    </div>

</v-card-text>
</template>

<script>
export default {
    data() {
        return {
            EMAILSIGNUPemailvalue: null,
            EMAILSIGNUPpasswordvalue: null,
            EMAILSIGNUPdigit: null,
            verifySuccessWindow: 3

        }

    },
    computed: {

        showEmailVerificationForm: function () {
            return this.$store.state.userSignup.verifyEmailAccount;
        },
        showVerificationSuccess: function () {

            return this.$store.state.userVerification.signupVerificationStatus

        }
    },
    watch: {
        showVerificationSuccess: function (newValue, oldValue) {
            console.log('oldvalue:', oldValue);
            if (newValue === true) {
                this.$store.state.userSignup.verifyEmailAccount = false
            }
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
            console.log(`4 digit entered by user ${this.EMAILSIGNUPdigit}`)
            this.$store.dispatch('userVerification/signupemailVerificationAction', {
                'code': this.EMAILSIGNUPdigit,
                'account': localStorage.getItem('isRegisteringEmail'),

            })
            this.EMAILVERIFYsetempty();

        },

        EMAILSIGNUPsetempty: function () {
            this.EMAILSIGNUPpasswordvalue = null
            this.EMAILSIGNUPemailvalue = null
        },

        EMAILVERIFYsetempty: function () {
            this.EMAILSIGNUPdigit = null
        },

    }
}
</script>
