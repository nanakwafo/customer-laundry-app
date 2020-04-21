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
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4OFwvYXBpXC92MVwvdG9rZW4iLCJpYXQiOjE1ODc0MzA4NTMsImV4cCI6MTU4NzQzNDQ1MywibmJmIjoxNTg3NDMwODUzLCJqdGkiOiJnRjdVNlljNlM1NklsNEhGIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.ia9gsXTAH_S-kNB96mW3NQmxjOLkagBU-S_iBLAyG20'
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
                .post('http://localhost:8080/api/v1/User/verify', JSON.stringify(verificationDetails), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4OFwvYXBpXC92MVwvdG9rZW4iLCJpYXQiOjE1ODc0MzQ1NDgsImV4cCI6MTU4NzQzODE0OCwibmJmIjoxNTg3NDM0NTQ4LCJqdGkiOiIyOG9ZS1RKc2EyMXhKRzlSIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.3mu8fLbc-fCbeBaSaomeH0Bj8RxbNQvIWsuacG44098'
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