import Axios from 'axios'
const userVerification = {
    namespaced: true,
    state: {
        signupVerification: null,
    },
    mutations: {
        SignupResponse: function(state, data) {
            state.signupVerification = data
        }
    },
    actions: {
        signupemailVerificationAction: function(context, signupemail) {
            Axios
                .post('http://localhost/nailservice/public/api/service', signupDetails)
                .then(response => {

                    context.commit('SignupResponse', response.data.message)
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