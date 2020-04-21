import Axios from 'axios'
const userSignin = {
    namespaced: true,
    state: {
        forgotpasswordmamailsuccess: false,
    },
    mutations: {
        forgotpasswordmamailResponse: function(state, data) {
            if (data.status == 'success') {
                state.forgotpasswordmamailsuccess = true
            }

        }
    },
    actions: {

        ForgotpasswordAction: function(context, mailDetails) {
            Axios
                .post(`${process.env.VUE_APP_ROOT_URL}/api/v1/forgotpasswordmail`, mailDetails, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`
                    }
                })
                .then(response => {
                    console.log(response.data);
                    //store data in localstorage
                    context.commit('forgotpasswordmamailResponse', response.data)

                }).catch(error => {
                    console.log(error); //log

                })

        },

    }
}
export default userSignin