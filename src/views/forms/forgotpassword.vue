<template>
<v-card class="mx-auto" flat="" max-width="500">
    <v-card-title class="title font-weight-regular justify-center">
        <span>Change Password</span>

    </v-card-title>

    <v-window >
        <v-window-item>
            <v-layout column wrap>
                <v-flex>
                    <ForgetPasswordForm />
                </v-flex>
            </v-layout>

        </v-window-item>

       

    </v-window>

   
</v-card>
</template>

<script>
import ForgetPasswordForm from '../../components/forgotpassword'

export default {
    components: {
        

    },
    data() {
        return {
          
        }

    },

    computed: {
    

    },
    watch: {

    },
    methods: {

    }
}
</script>
