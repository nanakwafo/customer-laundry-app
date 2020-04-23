<template>
<div class="dashboard grey lighten-5 ma-4">
    <h1 class="font-weight-thin grey-text ma-5"> Profile</h1>

    <v-container class="my-5">
        <v-layout row wrap>
            <v-flex xs12 md12 lg12>

                <v-tabs>
                    <v-tab class="font-weight-thin">

                        Personal Details
                    </v-tab>
                    <v-tab class="font-weight-thin">
                        Credentials
                    </v-tab>

                    <v-tab-item>
                        <v-card flat>
                            <Alert v-if="personalDetails.savedSuccess" :typeAlert="`${personalDetails.alertType}`" :msgAlert="`${Profile.successMsg}`"></Alert>
                            <v-card-text>
                                <form>
                                    <v-text-field v-model="personalDetails.lastname" label="Lastname" required></v-text-field>
                                    <v-text-field v-model="personalDetails.firstname" label="Firstname" required></v-text-field>
                                    <v-text-field v-model="personalDetails.phonenumber" label="Phone Number" required></v-text-field>
                                    <v-text-field v-model="personalDetails.email_address" label="Email Address" required></v-text-field>
                                    <v-text-field v-model="personalDetails.location_address" label="Location Address" required></v-text-field>
                                    <v-text-field v-model="personalDetails.postcode" label="Postcode" required></v-text-field>

                                    <div class="text-center">

                                        <v-btn rounded color="primary" class="mr-4" @click="submitPersonalDetails">submit</v-btn>
                                        <v-btn rounded class="amber lighten-1" @click="clearPersonalDetails"> <span class=" white--text">Clear</span></v-btn>
                                    </div>
                                </form>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                <form>
                                    <v-text-field v-model="credentials.phonenumber" label="Phone Number" required></v-text-field>
                                    <v-text-field v-model="credentials.email_address" label="Email Address" required></v-text-field>
                                    <v-text-field v-model="credentials.password" label="Password" required></v-text-field>

                                    <div class="text-center">

                                        <v-btn rounded color="primary" class="mr-4" @click="submitCredential">submit</v-btn>
                                        <v-btn rounded class="amber lighten-1" @click="clearCredential"> <span class=" white--text">Clear</span></v-btn>
                                    </div>

                                </form>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>

                </v-tabs>

            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import Alert from '../components/alert'
import messages from '../mixins/messages'
export default {
    components: {
        Alert,

    },
    mixins: [messages],
    data() {
        return {

            personalDetails: {
                lastname: null,
                firstname: null,
                phonenumber: null,
                email_address: null,
                location_address: null,
                postcode: null,
                savedSuccess: false,
                alertType: null,
            },
            credentials: {
                phonenumber: null,
                email_address: null,
                password: null
            }
        }
    },

    computed: {

    },

    methods: {

        submitPersonalDetails: function () {
            
            //:TODO validate data
            //log data in browser
            console.log(`details entered by user ${this.personalDetails.lastname} && ${this.personalDetails.firstname}`)
            //save data to db
            this.$store.dispatch('userProfile/updateprofileAction', {
                'lastname': this.personalDetails.lastname,
                'firstname': this.personalDetails.firstname,
                'phonenumber': this.personalDetails.phonenumber,
                'email_address': this.personalDetails.email_address,
                'location_address': this.personalDetails.location_address,
                'postcode': this.postcode,
            })
            //empty textboxes
            this.clearPersonalDetails();
            //show success alert
            this.personalDetails.savedSuccess = true
            this.personalDetails.alertType = 'success'
            //close succes message automatically
            setTimeout(function () {
                this.personalDetails.savedSuccess = false
            }.bind(this), 4000);

        },
        clearPersonalDetails: function () {
            this.personalDetails.lastname = null,
                this.personalDetails.firstname = null,
                this.personalDetails.phonenumber = null,
                this.personalDetails.email_address = null,
                this.personalDetails.location_address = null,
                this.postcode = null
        },
        submitCredential: function () {
            //:TODO validate data
            console.log(`details entered by user ${this.credentials.phonenumber} && ${this.credentials.email_address}`)
            this.$store.dispatch('profile/updatecredentialsAction', {
                'phonenumber': this.credentials.phonenumber,
                'email_address': this.credentials.email_address,
                'password': this.credentials.password,

            })
            this.clearCredential();
        },
        clearCredential: function () {
            this.credentials.phonenumber = null,
                this.credentials.email_address = null,
                this.credentials.password = null
        },
    },
}
</script>

<style scoped>

</style>
