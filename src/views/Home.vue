<template>
<v-app>
<v-layout row wrap>

     <v-row class="d-flex " no-gutters>

        <v-col cols="12" md="4"  class="d-flex  amber lighten-1 " no-gutters height="20%">
            <v-container fill-height fluid class="pa-0">
                <p class="text-justify display-2 font-weight-light justify-center pa-4  blue--text">
                    Ondemand Laundry
                </p>
            </v-container>

        </v-col>
        <v-col cols="12" md="8" no-gutters class="d-flex ">

            <v-container fluid class="pa-0">

                <v-row no-gutters align="start" justify="end" style="height: 10%">
                    <v-col no-gutters cols="12" sm="4">
                        <div class="text-center ">
                            <v-btn depressed="" class="ma-2 font-weight-light text-transform-none" rounded color="primary">SignIn</v-btn>
                            <v-btn depressed="" class="ma-2 font-weight-light text-transform-none" rounded color="primary" dark>SignUp</v-btn>

                        </div>
                    </v-col>

                </v-row>

                <v-row no-gutters align="center" justify="center" style="height: 50%">
                    <v-col no-gutters cols="6" sm="3">
                        <v-text-field :rules="rules" placeholder="Enter your postcode"></v-text-field>
                         <v-btn depressed="" rounded color="primary" class="font-weight-light" dark  @click="$router.push('main')">
                             <v-icon left>search</v-icon>
                             <span>Search</span>

                             </v-btn>
                    </v-col>
                    

                </v-row>
                <v-row no-gutters align="end" justify="center" style="height: 40%">
                    <v-col no-gutters cols="12" sm="4">
                        <v-card   outlined>
                            <v-card-title>
                                Easy
                            </v-card-title>
                            <v-card-text class="font-weight-thin">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ne
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col no-gutters cols="12" sm="4">
                        <v-card   outlined>
                            <v-card-title>
                                Fast
                            </v-card-title>
                            <v-card-text class="font-weight-thin">
                               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ne
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col no-gutters cols="12" sm="4">
                        <v-card   outlined>
                            <v-card-title>
                                Reliable
                            </v-card-title>
                            <v-card-text class="font-weight-thin">
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ne
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

            </v-container>
        </v-col>
    </v-row>
</v-layout>
    
 
</v-app>



</template>

<script>


export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
       elevations: [6, 12, 18],
        rules: [
            value => !!value || 'Required.',
            value => (value || '').length <= 20 || 'Max 20 characters',
            value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
            },
        ],
    }
  }
}
</script>
