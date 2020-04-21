<template>
<v-card class="mx-auto" flat="" max-width="500">
    <v-card-title class="title font-weight-regular justify-center">
        <span>{{ currentTitle }}</span>

    </v-card-title>

    <v-window v-model="step">
        <v-window-item :value="1">
            <v-layout column wrap>
                <v-flex>
                    <MobileSignInForm />
                </v-flex>
            </v-layout>

        </v-window-item>

        <v-window-item :value="2">
            <v-layout column="" wrap>
                <v-flex>
                    <EmailSignInForm />
                </v-flex>
            </v-layout>
        </v-window-item>

    </v-window>

    <v-card-actions>

        <v-btn :disabled="step === 1" text @click="step--">
            Back
        </v-btn>
        <v-spacer></v-spacer>
        <span :disabled="step === 2" color="primary" depressed @click="step++" class=" blue--text font-weight-thin caption ">Sign In with Email</span>

    </v-card-actions>
</v-card>
</template>

<script>
import EmailSignInForm from '../../components/emailsignin'
import MobileSignInForm from '../../components/mobilesignin'

export default {
    components: {
        EmailSignInForm,
        MobileSignInForm

    },
    data() {
        return {
            step: 1,
        }

    },

    computed: {
        currentTitle() {
            switch (this.step) {
                case 1:
                    return 'Sign In with Mobile Number'
                case 2:
                    return 'Sign In with Email Address'
                default:
                    return ''
            }
        },

    },
    watch: {

    },
    methods: {

    }
}
</script>
