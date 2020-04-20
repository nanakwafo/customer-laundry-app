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
                .post('http://localhost:8080/api/v1/User/verify', JSON.stringify(verificationDetails), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4OFwvYXBpXC92MVwvdG9rZW4iLCJpYXQiOjE1ODc0MDU2NTQsImV4cCI6MTU4NzQwOTI1NCwibmJmIjoxNTg3NDA1NjU0LCJqdGkiOiJwUWVqMzVKSE9yM2lvbzRZIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.XcYX6wqgxNPYcf0lSLJSf5g8zwlynUUK4_pQLu4Lj80'
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
        // signupmobileVerificationAction: function(context, signupmobilenumber) {


        //     Axios
        //         .post('http://localhost/nailservice/public/api/service', signupDetails)
        //         .then(response => {

        //             context.commit('SignupResponse', response.data.message)
        //                 //log request
        //         }).catch(error => {
        //             console.log(error); //log

        //         })

        // },

    }
}
export default userVerification