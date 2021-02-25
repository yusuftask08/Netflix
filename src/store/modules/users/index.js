import {
    appAxios
} from "@/utils/securedAxios"
import router from "@/router"
export default {
    namespaced: true,
    state: {
        user: null,
        favorites: [],
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
        addToFavorites(state, pFavorite) {
            if (!state.favorites.find(f => f.id === pFavorite.id)) {
                state.favorites = state.favorites.filter(f => f.id !== pFavorite.id)
            } else {
                state.favorites.push(pFavorite);


            };
        }
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

    },
    getters: {
        currentUser: state => state.user,
        isAuthenticated: state => state.user !== null,
        favoriteList: state => state.favorites
    },
}