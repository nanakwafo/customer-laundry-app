import Axios from 'axios'

const userSignup = {
    namespaced: true,

    state: {
        signupMsg: null,
        verifyEmailAccount: false,
        verifyPasswordAccount: false,
    },
    mutations: {
        SignupEmailResponse: function(state, data) {


            if (data.status == 'success') {
                state.verifyEmailAccount = true
            }

        },
        SignupPasswordResponse: function(state, data) {


            if (data.status == 'success') {
                state.verifyPasswordAccount = true
            }

        }
    },
    actions: {
        signupemailAction: function(context, signupDetails) {

            Axios
                .post('http://localhost:8080/api/v1/User/createwithoutactivation', JSON.stringify(signupDetails), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4OFwvYXBpXC92MVwvdG9rZW4iLCJpYXQiOjE1ODc0MDU2NTQsImV4cCI6MTU4NzQwOTI1NCwibmJmIjoxNTg3NDA1NjU0LCJqdGkiOiJwUWVqMzVKSE9yM2lvbzRZIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.XcYX6wqgxNPYcf0lSLJSf5g8zwlynUUK4_pQLu4Lj80'
                    }
                })
                .then(response => {

                    //store resonse to localstoage
                    localStorage.setItem('isRegisteringEmail', response.data.Data.email);
                    localStorage.setItem('isRegisteringStage', 'verification');
                    //Return response to view
                    context.commit('SignupEmailResponse', response.data)
                        //log request
                }).catch(error => {
                    console.log(error); //log

                })

        },
        signupmobileAction: function(context, signupDetails) {


            Axios
                .post('http://localhost:8080/api/v1/User/createwithoutactivation', JSON.stringify(signupDetails), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4OFwvYXBpXC92MVwvdG9rZW4iLCJpYXQiOjE1ODc0MDU2NTQsImV4cCI6MTU4NzQwOTI1NCwibmJmIjoxNTg3NDA1NjU0LCJqdGkiOiJwUWVqMzVKSE9yM2lvbzRZIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.XcYX6wqgxNPYcf0lSLJSf5g8zwlynUUK4_pQLu4Lj80'
                    }
                })
                .then(response => {

                    context.commit('SignupPasswordResponse', response.data)
                        //log request
                }).catch(error => {
                    console.log(error); //log

                })

        },

    }
}
export default userSignup