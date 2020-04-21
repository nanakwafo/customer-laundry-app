export default {
    computed: {
        logoutsuccess: function() {
            return this.$store.state.userLogout.logoutsuccess
        }
    },
    watch: {
        logoutsuccess: function(newValue, oldValue) {
            console.log('oldvalue:', oldValue);
            if (newValue === true) {
                //redirect to home
                this.$router.push('/')
                    //clear content from cache
            }
        }
    },
    methods: {
        logoutAction: function() {
            this.$store.state.userLogout.logoutsuccess = true
        }
    }

}