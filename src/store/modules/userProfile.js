import Axios from 'axios'
const userProfile = {
    namespaced: true,
    state: {
        profilesavedsuccess: false,
        credentialsavedsuccess: false,
    },
    mutations: {
        profileSavedResponse: function(state, data) {
            if (data.status == 'success') {
                state.profilesavedsuccess = true
            }

        },
        credentialsavedResponse: function(state, data) {
            if (data.status == 'success') {
                state.credentialsavedsuccess = true
            }

        }
    },
    actions: {

        updateprofileAction: function(context, Details) {
            Axios
                .post(`${process.env.VUE_APP_ROOT_URL}/customerresource/api/v1/updateprofile`, Details, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`
                    }
                })
                .then(response => {
                    console.log(response.data);
                    //store data in localstorage
                    context.commit('profileSavedResponse', response.data)

                }).catch(error => {
                    console.log(error); //log

                })

        },
        credentialsavedAction: function(context, Details) {
            Axios
                .post(`${process.env.VUE_APP_ROOT_URL}/customerresource/api/v1/updatecredential`, Details, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`
                    }
                })
                .then(response => {
                    console.log(response.data);
                    //store data in localstorage
                    context.commit('profileSavedResponse', response.data)

                }).catch(error => {
                    console.log(error); //log

                })

        },
    }
}
export default userProfile