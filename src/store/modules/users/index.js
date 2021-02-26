import {
    appAxios
} from "@/utils/securedAxios"
import router from "@/router"
export default {
    namespaced: true,
    state: {
        user: null,

    },
    mutations: {
        setUser(state, pUser) {
            state.user = pUser
        },
        logout(state) {
            state.user = null;
            localStorage.clear();
            router.push({
                name: "Home "
            });
        },


    },
    actions: {
        register({
            commit
        }, pUser) {
            appAxios.post("/users", pUser).then(register_response => {
                console.log('register :>> ', register_response);
                commit("setUser", register_response);
            });
        },
        Loggin({
            commit
        }, pUser) {
            appAxios.get(`/users?email=${pUser.email}&password=${pUser.password}`).then(login_response => {
                console.log('login_response :>> ', login_response);
                if (login_response?.status === 200 &&
                    login_response?.data?.length > 0) {

                }
                commit("setUser", login_response?.data[0]);
                localStorage.user = JSON.stringify(login_response?.data[0]);
                router.push("/")
            });
        },
        // addToFavorite({
        //     commit,
        //     state
        // }, movie) {
        //     axios
        //         .post(`${state.favoriteBaseURL}/favorites`, movie)
        //         .then((favorites_response) => {
        //             commit("addToFavorite", favorites_response.data);
        //         });
        // },
        // initFavorites({
        //     commit,
        //     state
        // }) {
        //     axios
        //         .get(`${state.favoriteBaseURL}/favorites`)
        //         .then((favorites_response) => {
        //             console.log("favorites_response", favorites_response);
        //             commit("setFavorites", favorites_response.data || []);
        //         });
        // },
        // setFavorites({
        //     state,
        //     commit
        // }) {
        //     if (state.user !== null) {
        //         appAxios.get(`/favorites?userId=${state.user.id}`).then(favorites_response => {
        //             commit("setFavorites", favorites_response?.data)
        //         })
        //     }
        // },
        // addToFavorites({
        //     state,
        //     commit
        // }, pFavorite) {
        //     const matchedFavorite = state.favorites.find(f => f.questionId === pFavorite.id)
        //     if (matchedFavorite) {
        //         appAxios.delete(`/favorites/${matchedFavorite.id}`).then(delete_response => {
        //             console.log('delete_response :>> ', delete_response);
        //             commit("deleteFavorite", matchedFavorite.id);

        //         })

        //     } else {
        //         const favoriteItem = {
        //             questionId: pFavorite.id,
        //             created_at: new Date(),
        //             userId: state.user.id,
        //         };
        //         appAxios.post("/favorites", favoriteItem)
        //             .then(favorite_response => {
        //                 console.log("favorite_response", favorite_response)
        //                 commit("addToFavorites", favorite_response?.data);
        //             });
        //     };

        // }
        // //commit("addToFavorites", pFavorite);
        // // state.favorites.push(pFavorite);
        // //(state.favorites.find(f => f.id === pFavorite.id))
    },
    getters: {
        currentUser: state => state.user,
        isAuthenticated: state => state.user !== null,
        // favoriteList: state => state.favorites,
        myFavorites: (state) => state.favorites,

    },
}