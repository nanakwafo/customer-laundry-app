<template>
<v-card-text>

    <div>
        <v-text-field label="Enter Email" v-model="email"></v-text-field>
       
        <v-row justify="center">
            <v-btn @click="submit()" depressed="" class=" font-weight-thin text-transform-none" rounded color="primary">Submit</v-btn>
        </v-row>
    </div>

</v-card-text>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            

        }

    },
    computed: {
        forgotpasswordmamailsuccess: function () {

            return this.$store.state.userForgotpassword.forgotpasswordmamailsuccess

        }

    },
    watch: {

        forgotpasswordmamailsuccess: function (newValue, oldValue) {
            console.log('oldvalue:', oldValue);
            if (newValue === true) {
                console.log("reset mail sent")
               
            }
        }
    },
    methods: {
        submit: function () {
            //:TODO validate data
            console.log(`details entered by user ${this.email} `)

            this.$store.dispatch('userForgotpassword/ForgotpasswordAction', {
                'email': this.email,
                
            })
            this.EMAILSIGNINsetempty();

        },

        setempty: function () {
            this.EMAILSIGNUPpasswordvalue = null
            this.EMAILSIGNUPemailvalue = null
        },

    }
}
</script>
