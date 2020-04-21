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
                .post(`${process.env.VUE_APP_ROOT_URL}/api/v1/User/createwithoutactivation`, JSON.stringify(signupDetails), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`
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
                .post(`${process.env.VUE_APP_ROOT_URL}/api/v1/User/createwithoutactivationmobile`, JSON.stringify(signupDetails), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`
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