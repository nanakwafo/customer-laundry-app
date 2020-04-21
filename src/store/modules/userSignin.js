import Axios from 'axios'
const userSignin = {
    namespaced: true,
    state: {
        signinsuccess: false,
    },
    mutations: {
        SigninResponse: function(state, data) {
            if (data.status == 'success') {
                state.signinsuccess = true
            }

        }
    },
    actions: {
        EmailsiginAction: function(context, signinDetails) {
            Axios
                .post(`${process.env.VUE_APP_ROOT_URL}/api/v1/loginemail`, signinDetails, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`
                    }
                })
                .then(response => {
                    console.log(response.data);
                    context.commit('SigninResponse', response.data)

                }).catch(error => {
                    console.log(error); //log

                })

        },
        MobilesiginAction: function(context, signinDetails) {
            Axios
                .post(`${process.env.VUE_APP_ROOT_URL}/api/v1/loginmobile`, signinDetails, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`
                    }
                })
                .then(response => {
                    console.log(response.data);
                    //store data in localstorage
                    context.commit('SigninResponse', response.data)

                }).catch(error => {
                    console.log(error); //log

                })

        },

    }
}
export default userSignin