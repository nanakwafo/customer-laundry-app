<template>
<v-card class="mx-auto" flat="" max-width="500">
    <v-card-title class="title font-weight-regular justify-center">
        <span>Forgot Password for Account</span>

    </v-card-title>

    <v-window >
        <v-window-item>
            <v-layout column wrap>
                <v-flex>
                    <ForgotPasswordForm />
                </v-flex>
            </v-layout>

        </v-window-item>

       

    </v-window>

   
</v-card>
</template>

<script>
import ForgotPasswordForm from '../../components/forgotpassword'

export default {
    components: {
        ForgotPasswordForm

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
