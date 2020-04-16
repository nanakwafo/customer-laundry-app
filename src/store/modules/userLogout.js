import Axios from 'axios'
const userLogout = {
    namespaced: true,
    state: {
        logoutMsg: null,
    },
    mutations: {
        LogoutResponse: function(state, data) {
            state.logoutMsg = data
        }
    },
    actions: {
        logoutAction: function(context, LogoutDetails) {
            Axios
                .post('http://localhost/nailservice/public/api/service', LogoutDetails)
                .then(response => {

                    context.commit('LogoutResponse', response.data.message)
                        //log request
                }).catch(error => {
                    console.log(error); //log

                })

        },

    }
}
export default userLogout