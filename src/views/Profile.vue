<template>
<div class="dashboard grey lighten-5 ma-4">
    <h1 class="font-weight-thin grey-text ma-5"> Profile</h1>

    <v-container class="my-5">
        <v-layout row wrap>
            <v-flex xs12 md12 lg12>

                <v-tabs >
                    <v-tab class="font-weight-thin">
                       
                        Personal Details
                    </v-tab>
                    <v-tab class="font-weight-thin">
                         Login and Credentials
                    </v-tab>

                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                <form>
                                    <v-text-field v-model="name" :error-messages="nameErrors"  label="Surname" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                                    <v-text-field v-model="name" :error-messages="nameErrors"  label="Firstname" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                                    <v-text-field v-model="name" :error-messages="nameErrors"  label="Phone Number" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                                    <v-text-field v-model="name" :error-messages="nameErrors"  label="Email Address" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                                    <v-text-field v-model="name" :error-messages="nameErrors"  label="Location Address" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                                    <v-text-field v-model="name" :error-messages="nameErrors"  label="Postcode" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                                  
                                    <v-btn class="mr-4" @click="submit">submit</v-btn>
                                    <v-btn @click="clear">clear</v-btn>
                                </form>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                               <form>
                                  <v-text-field v-model="name" :error-messages="nameErrors"  label="Phone Number" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                                    <v-text-field v-model="name" :error-messages="nameErrors"  label="Email Address" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                                    <v-text-field v-model="name" :error-messages="nameErrors"  label="Password" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                                    <v-text-field v-model="name" :error-messages="nameErrors"  label="Stay LoggedIn for faster purchases" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                                  
                                    <v-btn class="mr-4" @click="submit">submit</v-btn>
                                    <v-btn @click="clear">clear</v-btn>
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
import { validationMixin } from 'vuelidate'
  import { required, maxLength} from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
    
      
    },

    data: () => ({
      name: '',
    
      
    }),

    computed: {
     
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
     
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
       
     
      },
    },
  }
</script>

<style scoped>

</style>
