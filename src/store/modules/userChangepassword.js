import Axios from 'axios'
const userSignin = {
    namespaced: true,
    state: {
        changepasswordsuccess: false,
    },
    mutations: {
        changepasswordResponse: function(state, data) {
            if (data.status == 'success') {
                state.changepasswordsuccess = true
            }

        }
    },
    actions: {

        ChangepasswordAction: function(context, changepasswordDetails) {
            Axios
                .post(`${process.env.VUE_APP_ROOT_URL}/api/v1/User/changePasswordUser`, changepasswordDetails, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`
                    }
                })
                .then(response => {
                    console.log(response.data);
                    //store data in localstorage
                    context.commit('changepasswordResponse', response.data)

                }).catch(error => {
                    console.log(error); //log

                })

        },

    }
}
export default userSignin