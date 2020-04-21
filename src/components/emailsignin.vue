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

      
    },
    watch: {
       
    },
    methods: {
        EMAILSIGNINsubmit: function () {
            //:TODO validate data
             console.log(`details entered by user ${this.EMAILSIGNUPemailvalue} && ${this.EMAILSIGNUPpasswordvalue}`)

            // this.$store.dispatch('userSignup/signupemailAction', {
            //     'email': this.EMAILSIGNUPemailvalue,
            //     'password': this.EMAILSIGNUPpasswordvalue
            // })
            // this.EMAILSIGNUPsetempty();

        },
     
        EMAILSIGNUPsetempty: function () {
            this.EMAILSIGNUPpasswordvalue = null
            this.EMAILSIGNUPemailvalue = null
        },

       

    }
}
</script>
