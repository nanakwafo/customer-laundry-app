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
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4OFwvYXBpXC92MVwvdG9rZW4iLCJpYXQiOjE1ODcyNTMyNTYsImV4cCI6MTU4NzI1Njg1NiwibmJmIjoxNTg3MjUzMjU2LCJqdGkiOiJrQWxqb3UxVE9PSThoNWJtIiwic3ViIjoyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.JtzEwGZeF-dVKMsxVAoT8_b-mmMQmXtkbooewcQ7vPg'
                    }
                })
                .then(response => {
                    //console.log(response.data.status);
                    //store resonse to localstoage
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
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4OFwvYXBpXC92MVwvdG9rZW4iLCJpYXQiOjE1ODcyNTMyNTYsImV4cCI6MTU4NzI1Njg1NiwibmJmIjoxNTg3MjUzMjU2LCJqdGkiOiJrQWxqb3UxVE9PSThoNWJtIiwic3ViIjoyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.JtzEwGZeF-dVKMsxVAoT8_b-mmMQmXtkbooewcQ7vPg'
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