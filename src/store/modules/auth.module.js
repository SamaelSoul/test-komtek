import axios from "axios";

export default {
    namespaced: true,
    store() {
        return {
            token: null,
            userID: null
        }
    },
    getters: {
        getToken(state) {
            return state.token
        },
        getUserID(state) {
            return state.userID
        }
    },
    mutations: {
        setTokenAndID(state, value) {
            state.token = value.idToken
            state.userID = value.localId
        },
        logout(state) {
            state.token = null
            state.userID = null
        }
    },
    actions: {
        async login({commit, dispatch}, values) {
            try {
                const {data} = await axios.post(
                    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`,
                    {...values, returnSecureToken: true}
                )
                commit('setTokenAndID', data)
                console.log(data)
            } catch (e) {
                throw new Error(e)
            }
        }
    }
}