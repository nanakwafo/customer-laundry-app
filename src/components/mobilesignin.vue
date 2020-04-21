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
        MOBILESIGNINsubmit: function () {
            //:TODO validate data
            console.log(`details entered by user ${this.MOBILESIGNUPmobilevalue} && ${this.MOBILESIGNUPpasswordvalue}`)

            this.$store.dispatch('userSignin/MobilesiginAction', {
                'login': this.MOBILESIGNUPmobilevalue,
                'password': this.MOBILESIGNUPpasswordvalue
            })
            this.MOBILESIGNUPsetempty();

        },
        

        MOBILESIGNUPsetempty: function () {
            this.MOBILESIGNUPpasswordvalue = null
            this.MOBILESIGNUPmobilevalue = null
        },


    }
}
</script>
