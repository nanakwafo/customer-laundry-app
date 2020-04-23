<template>
<div>
    <v-alert class="mt-2" :type="`${type}`" v-model="alert" border="left" close-text="Close Alert" dark dismissible>
        {{msg}}
    </v-alert>
</div>
</template>

<script>
export default {
    props: {
        typeAlert: String,
        msgAlert: String
    },
    data() {
        return {
            type: this.typeAlert,
            msg: this.msgAlert
        }
    },
    methods: {

    },

}
</script>
