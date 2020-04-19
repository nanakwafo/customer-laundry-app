import Axios from 'axios'
const userVerification = {
    namespaced: true,
    state: {
        signupVerification: null,
    },
    mutations: {
        SignupResponse: function(state, data) {
            //state.signupVerification = data
        }
    },
    actions: {
        signupemailVerificationAction: function(context, verificationDetails) {
            Axios
                .post('http://localhost:8080/api/v1/Userwithoutactivation/verifyemail', JSON.stringify(verificationDetails), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4OFwvYXBpXC92MVwvdG9rZW4iLCJpYXQiOjE1ODcyNTMyNTYsImV4cCI6MTU4NzI1Njg1NiwibmJmIjoxNTg3MjUzMjU2LCJqdGkiOiJrQWxqb3UxVE9PSThoNWJtIiwic3ViIjoyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.JtzEwGZeF-dVKMsxVAoT8_b-mmMQmXtkbooewcQ7vPg'
                    }
                })
                .then(response => {

                    //context.commit('SignupResponse', response.data.message)
                    //log request
                }).catch(error => {
                    console.log(error); //log

                })

        },
        signupmobileVerificationAction: function(context, signupmobilenumber) {


            Axios
                .post('http://localhost/nailservice/public/api/service', signupDetails)
                .then(response => {

                    context.commit('SignupResponse', response.data.message)
                        //log request
                }).catch(error => {
                    console.log(error); //log

                })

        },

    }
}
export default userVerification