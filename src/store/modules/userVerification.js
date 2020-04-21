import Axios from 'axios'
const userVerification = {
    namespaced: true,
    state: {
        signupVerificationStatus: false,
    },
    mutations: {
        signupVerificationStatus: function(state, data) {
            if (data.status == 'success') {
                state.signupVerificationStatus = true;
            }

        }
    },
    actions: {
        signupemailVerificationAction: function(context, verificationDetails) {
            console.log('verification details' + JSON.stringify(verificationDetails));
            Axios
                .post(`${process.env.VUE_APP_ROOT_URL}/api/v1/User/verify`, JSON.stringify(verificationDetails), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`
                    }
                })
                .then(response => {
                    console.log(response.data.status);
                    context.commit('signupVerificationStatus', response.data)
                        //log request
                }).catch(error => {
                    console.log(error); //log

                })

        },
        signupmobileVerificationAction: function(context, verificationDetails) {
            console.log('verification details' + JSON.stringify(verificationDetails));
            Axios
                .post(`${process.env.VUE_APP_ROOT_URL}/api/v1/User/verify`, JSON.stringify(verificationDetails), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`
                    }
                })
                .then(response => {
                    console.log(response.data.status);
                    context.commit('signupVerificationStatus', response.data)
                        //log request
                }).catch(error => {
                    console.log(error); //log

                })

        },


    }
}
export default userVerification