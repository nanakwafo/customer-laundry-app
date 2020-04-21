<template>
<v-card-text>

    <div>
        <v-text-field label="Email" v-model="EMAILSIGNUPemailvalue"></v-text-field>
        <v-text-field label="Password" v-model="EMAILSIGNUPpasswordvalue"></v-text-field>
        <v-row justify="center">
            <v-btn @click="EMAILSIGNINsubmit()" depressed="" class=" font-weight-thin text-transform-none" rounded color="primary">Submit</v-btn>
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

        }

    },
    computed: {
        signInSuccess: function () {

            return this.$store.state.userSignin.signinsuccess

        }

    },
    watch: {

        signInSuccess: function (newValue, oldValue) {
            console.log('oldvalue:', oldValue);
            if (newValue === true) {
                console.log("ready to show dashboard")
                this.$router.push('main')
            }
        }
    },
    methods: {
        EMAILSIGNINsubmit: function () {
            //:TODO validate data
            console.log(`details entered by user ${this.EMAILSIGNUPemailvalue} && ${this.EMAILSIGNUPpasswordvalue}`)

            this.$store.dispatch('userSignin/EmailsiginAction', {
                'login': this.EMAILSIGNUPemailvalue,
                'password': this.EMAILSIGNUPpasswordvalue
            })
            this.EMAILSIGNINsetempty();

        },

        EMAILSIGNINsetempty: function () {
            this.EMAILSIGNUPpasswordvalue = null
            this.EMAILSIGNUPemailvalue = null
        },

    }
}
</script>
