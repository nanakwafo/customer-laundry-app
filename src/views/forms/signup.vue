<template>
<v-card class="mx-auto" flat="" max-width="500">
    <v-card-title class="title font-weight-regular justify-start">
        <span>{{ currentTitle }}</span>
     
    </v-card-title>

    <v-window v-model="step">
        <v-window-item :value="1">
           <v-layout row wrap>
            <v-flex>
            <v-card-text>
              <v-row>
                 <v-text-field label="Phone Number" value="07950199283"></v-text-field>
                <v-btn  depressed="" class="ma-2 font-weight-thin text-transform-none align-center" rounded color="primary">Verify</v-btn>
                </v-row>
                <!-- <span class="caption grey--text text--darken-1">
                  
                    This is the email you will use to login to your Vuetify account
                </span> -->
            </v-card-text>
             </v-flex>
            </v-layout>
           
        </v-window-item>

        <v-window-item :value="2">
            <v-card-text>
                 <v-row>
                 <v-text-field label="Email" value="john@vuetifyjs.com"></v-text-field>
                <v-btn  depressed="" class="ma-2 font-weight-thin text-transform-none align-center" rounded color="primary">Verify</v-btn>
                </v-row>
                <!-- <v-text-field label="Email" value="john@vuetifyjs.com"></v-text-field>
                <span class="caption grey--text text--darken-1">
                    This is the email you will use to login to your Vuetify account
                </span> -->
            </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
            <div class="pa-4 text-center">
                <!-- <v-img class="mb-4" contain height="128" src="https://cdn.vuetifyjs.com/images/logos/v.svg"></v-img> -->
                <h3 class="title font-weight-light mb-2">Welcome to our plaform</h3>
                <span class="caption grey--text">Thanks for signing up! you will be redirected shortly</span>
            </div>
        </v-window-item>
    </v-window>

    

    <v-card-actions>
    
        <v-btn :disabled="step === 1" text @click="step--">
            Back
        </v-btn>
        <v-spacer></v-spacer>
          <span :disabled="step === 3" color="primary" depressed @click="step++" class=" blue--text font-weight-thin caption ">Sign  up with Email</span>
        <!-- <v-btn :disabled="step === 3" color="primary" depressed @click="step++">
            OR
        </v-btn> -->
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    data: () => ({
        step: 1,
    }),

    computed: {
        currentTitle() {
            switch (this.step) {
                case 1:
                    return 'Mobile Number'
                case 2:
                    return 'Email'
                default:
                    return 'Account created'
            }
        },
    },
}
</script>
