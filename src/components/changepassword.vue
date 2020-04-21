<template>
<v-card-text>

    <div>
        <v-text-field label="Enter Account Email or Password" v-model="account"></v-text-field>
        <v-text-field label="Enter new Password" v-model="password"></v-text-field>
       
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
            account: null,
            password:null,
            

        }

    },
    computed: {
        changepasswordmamailsuccess: function () {

            return this.$store.state.userChangepassword.changepasswordsuccess

        }

    },
    watch: {

        changepasswordmamailsuccess: function (newValue, oldValue) {
            console.log('oldvalue:', oldValue);
            if (newValue === true) {
                console.log("password changed")
               
            }
        }
    },
    methods: {
        submit: function () {
            //:TODO validate data
            console.log(`details entered by user ${this.account} and ${this.password} `)

            this.$store.dispatch('userChangepassword/ChangepasswordAction', {
                'account': this.account,
                'password': this.account,
                
            })
            this.setempty();

        },

        setempty: function () {
            this.EMAILSIGNUPpasswordvalue = null
            this.EMAILSIGNUPemailvalue = null
        },

    }
}
</script>
