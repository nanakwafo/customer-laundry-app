import Axios from 'axios'
const userSignup = {
    namespaced: true,
    state: {
        signupMsg: null,
    },
    mutations: {
        SignupResponse: function(state, data) {
            state.signupMsg = data
        }
    },
    actions: {
        signupemailAction: function(context, signupDetails) {
            Axios
                .post('http://localhost/nailservice/public/api/service', signupDetails)
                .then(response => {

                    context.commit('SignupResponse', response.data.message)
                        //log request
                }).catch(error => {
                    console.log(error); //log

                })

        },
        signupmobileAction: function(context, signupDetails) {


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
export default userSignup