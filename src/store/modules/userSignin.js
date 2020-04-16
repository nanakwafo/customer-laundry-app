import Axios from 'axios'
const userSignin = {
    namespaced: true,
    state: {
        signinMsg: null,
    },
    mutations: {
        SigninResponse: function(state, data) {
            state.signinMsg = data
        }
    },
    actions: {
        siginAction: function(context, signinDetails) {
            Axios
                .post('http://localhost/nailservice/public/api/service', signinDetails)
                .then(response => {

                    context.commit('LogoutResponse', response.data.message)
                        //log request
                }).catch(error => {
                    console.log(error); //log

                })

        },

    }
}
export default userSignin