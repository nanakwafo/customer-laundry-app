<template>
<v-row justify="center">
    <v-dialog v-model="dialog" scrollable fullscreen hide-overlay transition="dialog-bottom-transition" :retain-focus="false" >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" depressed="" color="grey lighten-5" left class="font-weight-thin">
            <v-icon small left>message</v-icon>
            <span class="font-weight-thin">Message</span>
        </v-btn>

    </template>
      <v-card>
          <v-toolbar dark flat color="primary">
            <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Ondemand Messaging</v-toolbar-title>
            
        </v-toolbar>
      
        <v-card-text >
               <v-layout column wrap class="pa-5">

            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-start">
                    <v-chip class="float-left"> hello </v-chip>
                </v-card-actions>

            </v-card>

            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-end">
                    <v-chip class="float-right"> Yes am here</v-chip>
                </v-card-actions>
            </v-card>

            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-end">
                    <v-chip class=" float-right"> Yes am here</v-chip>
                </v-card-actions>
            </v-card>
            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-start">
                    <v-chip class="float-left"> hello </v-chip>
                </v-card-actions>

            </v-card>

            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-end">
                    <v-chip class="float-right"> Yes am here</v-chip>
                </v-card-actions>
            </v-card>

            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-end">
                    <v-chip class=" float-right"> Yes am here</v-chip>
                </v-card-actions>
            </v-card>
            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-start">
                    <v-chip class="float-left"> hello </v-chip>
                </v-card-actions>

            </v-card>

            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-end">
                    <v-chip class="float-right"> Yes am here</v-chip>
                </v-card-actions>
            </v-card>

            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-end">
                    <v-chip class=" float-right"> Yes am here</v-chip>
                </v-card-actions>
            </v-card>
            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-start">
                    <v-chip class="float-left"> hello </v-chip>
                </v-card-actions>

            </v-card>

            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-end">
                    <v-chip class="float-right"> Yes am here</v-chip>
                </v-card-actions>
            </v-card>

            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-end">
                    <v-chip class=" float-right"> Yes am here</v-chip>
                </v-card-actions>
            </v-card>
            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-start">
                    <v-chip class="float-left"> hello </v-chip>
                </v-card-actions>

            </v-card>

            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-end">
                    <v-chip class="float-right"> Yes am here</v-chip>
                </v-card-actions>
            </v-card>

            <v-card class="ma-1 elevation-0">

                <v-card-actions class="justify-end">
                    <v-chip class=" float-right"> Yes am heredfbdghrfhfh yyjtut ut tujujtjtjt jt tjt  </v-chip>
                </v-card-actions>
            </v-card>
         
        </v-layout>
        </v-card-text>
       
        <v-card-actions>
          <v-textarea class="mx-7" label="send a message" rows="1" ></v-textarea>
         <v-btn rounded color="primary" dark>send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    data() {
        return {
            //messaging dialog
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,

        }
    },

}
</script>

<style scoped>

</style>>
