<template>
<v-card-text>
    
    <div >
        <v-text-field label="Mobile"  v-model="MOBILESIGNUPmobilevalue"></v-text-field>
        <v-text-field label="Password" v-model="MOBILESIGNUPpasswordvalue"></v-text-field>
        <v-row justify="center">
            <v-btn @click="MOBILESIGNINsubmit()" depressed="" class=" font-weight-thin text-transform-none" rounded color="primary">Submit</v-btn>
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
         

        }

    },
    computed: {

        
    },
    watch: {
        
    },
    methods: {
        MOBILESIGNINsubmit: function () {
            //:TODO validate data
            console.log(`details entered by user ${this.MOBILESIGNUPmobilevalue} && ${this.MOBILESIGNUPpasswordvalue}`)

            // this.$store.dispatch('userSignup/signupmobileAction', {
            //     'mobile': this.MOBILESIGNUPmobilevalue,
            //     'password': this.MOBILESIGNUPpasswordvalue
            // })
            // this.MOBILESIGNUPsetempty();

        },
        

        MOBILESIGNUPsetempty: function () {
            this.MOBILESIGNUPpasswordvalue = null
            this.MOBILESIGNUPmobilevalue = null
        },


    }
}
</script>
