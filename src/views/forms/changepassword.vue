<template>
<v-card class="mx-auto" flat="" max-width="500">
    <v-card-title class="title font-weight-regular justify-center">
        <span>Change Password for Account</span>

    </v-card-title>

    <v-window >
        <v-window-item>
            <v-layout column wrap>
                <v-flex>
                    <ChangePasswordForm />
                </v-flex>
            </v-layout>

        </v-window-item>

       

    </v-window>

   
</v-card>
</template>

<script>
import ChangePasswordForm from '../../components/changepassword'

export default {
    components: {
        ChangePasswordForm

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
