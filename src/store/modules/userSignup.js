import Axios from 'axios'

const userSignup = {
    namespaced: true,

    state: {
        signupMsg: null,
        verifyEmailAccount: false,
        verifyMobileAccount: false,

    },
    mutations: {
        SignupEmailResponse: function(state, data) {


            if (data.status == 'success') {
                state.verifyEmailAccount = true
            }

        },
        SignupMobileResponse: function(state, data) {


            if (data.status == 'success') {
                state.verifyMobileAccount = true
            }

        },

    },
    actions: {
        signupemailAction: function(context, signupDetails) {

            Axios
                .post('http://localhost:8080/api/v1/User/createwithoutactivation', JSON.stringify(signupDetails), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4OFwvYXBpXC92MVwvdG9rZW4iLCJpYXQiOjE1ODc0MzA4NTMsImV4cCI6MTU4NzQzNDQ1MywibmJmIjoxNTg3NDMwODUzLCJqdGkiOiJnRjdVNlljNlM1NklsNEhGIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.ia9gsXTAH_S-kNB96mW3NQmxjOLkagBU-S_iBLAyG20'
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
                .post('http://localhost:8080/api/v1/User/createwithoutactivationmobile', JSON.stringify(signupDetails), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4OFwvYXBpXC92MVwvdG9rZW4iLCJpYXQiOjE1ODc0MzQ1NDgsImV4cCI6MTU4NzQzODE0OCwibmJmIjoxNTg3NDM0NTQ4LCJqdGkiOiIyOG9ZS1RKc2EyMXhKRzlSIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.3mu8fLbc-fCbeBaSaomeH0Bj8RxbNQvIWsuacG44098'
                    }
                })
                .then(response => {
                    //store resonse to localstoage
                    localStorage.setItem('isRegisteringMobile', response.data.Data.mobile);
                    localStorage.setItem('isRegisteringStage', 'verification');
                    //Return response to view   
                    context.commit('SignupMobileResponse', response.data)
                        //log request
                }).catch(error => {
                    console.log(error); //log

                })

        },

    }
}
export default userSignup